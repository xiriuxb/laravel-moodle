<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\InscripcionMailer;
use App\Models\Matricula;
use App\Models\Pago;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AdminMatriculasPendientesController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:admuser.pendingmatricula', ['only' => ['index','updatePending']]);
        $this->middleware('can:admuser.getusermatricula', ['only' => ['indexByUser','update','getEstados','generarReporteUsuario']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['matriculas' => \App\Models\Matricula::with('user', 'cursos', 'pago')->where([['username', null], ['estado_matricula_id', 3]])->get()]);
    }

    public function indexByUser(Request $request,$username)
    {
        $user = \App\Models\User::where('username', $username)->first();
        $user_name = $user->name . ' ' . $user->last_name;
        return inertia('Admin/AdminPagosUsuario', ['matriculas' => \App\Models\Matricula::with('cursos', 'pago', 'estado_matricula')->where([['usuario_id', $user->id]])->paginate(10), 'user' => $user_name, 'username'=>$username]);
    }

    public function updatePending(Request $request)
    {
        $matricula = \App\Models\Matricula::with(['user','cursos','pago'])->find($request->matricula_id);

        if (!$matricula) {
            return response()->json(['error' => 'No se encontró la matrícula'], 404);
        }
        switch ($request->estado) {
            case 1:
                $matricula->estado_matricula_id = 1;
                $matricula->username = $matricula->user->username;
                $matricula->save();
                $this->sendEmailNotification($matricula->user->email, $matricula, $matricula->cursos->fullname, $matricula->pago);
                return response()->json(['matricula' => 'Matrícula aceptada'], 200);
                break;
            case 2:
                $matricula->estado_matricula_id = 2;
                $matricula->save();
                return response()->json(['matricula' => 'Matrícula rechazada'], 200);
                break;
            default:
                return response()->json(['error' => 'No se encontró el estado de la matrícula'], 404);
                break;
        }
    }

    public function update(Request $request)
    {
        if (!Hash::check(request('password'), $request->user()->password)) {
            return response()->json(['message' => 'La informacion es inválida'], 422);
        }
        $matricula = \App\Models\Matricula::with('user')->where([['id', $request->id]])->first();
        if (!$matricula) {
            return response()->json(['error' => 'No se encontró la matrícula'], 404);
        }
        if (\App\Models\Matricula::where([['usuario_id',$matricula->value('usuario_id')],['curso_id',$matricula->value('curso_id')],['estado_matricula_id',1]])->exists() && $request->estado==1) {
            return response()->json(['message'=>'El usuario ya esta aceptado en este curso'],422);
        }
        switch ($request->estado) {
            case 1:
                $matricula->estado_matricula_id = 1;
                $matricula->username = $matricula->user->username;
                $matricula->save();
                return response()->json(['matricula' => 'Matrícula aceptada'], 200);
                break;
            case 2:
                $matricula->estado_matricula_id = 2;
                $matricula->username = null;
                $matricula->save();
                return response()->json(['matricula' => 'Matrícula rechazada'], 200);
                break;
            case 3:
                $matricula->estado_matricula_id = 3;
                $matricula->username = null;
                $matricula->save();
                return response()->json(['matricula' => 'Matrícula en revisión'], 200);
                break;
            case 4:
                $matricula->estado_matricula_id = 4;
                $matricula->username = null;
                $matricula->save();
                return response()->json(['matricula' => 'Matrícula cancelada/revocada'], 200);
                break;
            default:
                return response()->json(['error' => 'No se encontró el estado de la matrícula'], 404);
                break;
        }
        $matricula->estado_matricula_id = $request->estado_matricula_id;
        $matricula->save();
        return response()->json(['matricula' => 'Matrícula actualizada'], 200);
    }

    public function getEstados()
    {
        return response()->json(['estados' => \App\Models\EstadoMatricula::select('id', 'nombre')->get()]);
    }

    public function generarReporteUsuario($username){
        $user = \App\Models\User::where('username', $username)->first();
        if($user){
            $date = Carbon::now();
            $user_name = $user->name . ' ' . $user->last_name;
            $matriculas = \App\Models\Matricula::with('cursos', 'pago', 'estado_matricula')->where([['usuario_id', $user->id]])->get();
            $pdf = app('dompdf.wrapper');
            $pdf->loadView('PDF/userpdf',['user_name'=>$user_name, 'matriculas'=>$matriculas, 'date'=>$date]);
            return $pdf->stream($user_name.'_'.$date.'.pdf',array("Attachment"=>false));
        }else{
            return redirect()->route('admin.users');
        }
    }

    private function sendEmailNotification(string $userEmail, Matricula $matricula, string $nombreCurso, ?Pago $pago){
        try {
            Mail::to($userEmail)->queue(new InscripcionMailer($matricula,$nombreCurso, $pago));
            
        } catch (\Throwable $th) {
            dd($th);
        }
    }
}
