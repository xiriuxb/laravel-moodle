<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use App\Models\Matricula;
use App\Models\MoodleCurso;
use Illuminate\Http\Request;
use App\Http\Traits\MoodleServicesTrait;
use Illuminate\Support\Facades\Auth;
use App\Models\Pago;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Notifications\NewPagoDepositoNotification;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Notification;

class MatriculaController extends Controller
{

    use MoodleServicesTrait;

    public function __construct()
    {
        $this->middleware('can:matricula.generarmatricula')->except('index');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($curso_id)
    {
        $curso = $this->makeCourseFromMoodleData($curso_id);
        if ($curso == []) {
            return inertia('NotFoundComponent');
        }
        if (Auth::check()) {
            $user_verified = Auth::user()->email_verified_at == null ? false : true;
            //Si el usuario ya está matriculado
            if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso->moodle_id], ['estado_matricula_id', 1]])->exists()) {
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => true]);
            }
            //Si el usuario no está matriculado pero pagó con depósito
            if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso->moodle_id], ['estado_matricula_id', 3]])->exists()) {
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'pago' => true]);
            }
            if (doubleval($curso->price == 0)) {
                //Si el curso es gratis
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => 'matricula.free', 'verificado' => $user_verified]);
            } else {
                //Si el curso no es gratis
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => 'matricula', 'verificado' => $user_verified]);
            }
        } else {
            return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => '/login']);
        }
    }

    public function storeFree(Request $request)
    {
        $curso_aux = $this->verifyMatriculaIfExists($request->curso_id);
        if ($curso_aux['precio'] == 0) {
            $this->generateMatricula($curso_aux['curso']->id, $curso_aux['curso']->moodle_id, Auth::user()->username, 1, null);
            return redirect()->back()->with(['curso' => $curso_aux['curso'], 'matriculado' => true]);
        } else {
            return redirect()->back()->withErrors('message', 'ocurrio un error');
        }
    }

    public function storePaypalOrCreditCard(Request $request)
    {
        $curso_aux = $this->verifyMatriculaIfExists($request->curso_id);
        if ($curso_aux['precio'] > 0) {
            $pago = $this->storePago($request, '', 1);
            $this->generateMatricula($curso_aux['curso']->id, $curso_aux['curso']->moodle_id, Auth::user()->username, 1, $pago->id);
            return redirect()->back()->with(['curso' => $curso_aux['curso'], 'matriculado' => true]);
        } else {
            return redirect()->back()->withErrors('message', 'ocurrio un error');
        }
    }

    public function storeDepositoTransferencia(Request $request)
    {
        $curso_aux = $this->verifyMatriculaIfExists($request->curso_id);
        if ($curso_aux['precio'] > 0) {
            $time = time();
            $pago = $this->storePago($request, $time, 3);
            $this->generateMatricula($curso_aux['curso']->id, $curso_aux['curso']->moodle_id, null, 3, $pago->id);
            return redirect('/curso/' . $request->curso_id)->with(['curso' => $curso_aux['curso'], 'matriculado' => true]);
        } else {
            return redirect()->back()->withErrors('message', 'El curso es gratuito');
        }
    }

    private function makeCourseFromMoodleData(String $shortname)
    {
        $curso_aux = $this->getCourseFromMoodle($shortname);
        if ($curso_aux == []) {
            return [];
        } else {
            $curso = new MoodleCurso(
                $curso_aux->id,
                $curso_aux->fullname,
                $curso_aux->shortname,
                $curso_aux->summary,
                $curso_aux->customfields[intval(config('app.mdl_precio_index'))]->value,
                $curso_aux->categoryname,
                $curso_aux->overviewfiles == null ? '/images/default_course_image.png' : str_replace('/webservice', '', $curso_aux->overviewfiles[0]->fileurl), //remove /webservice string,
                $curso_aux->customfields[intval(config('app.mdl_aprendera_index'))]->value,
            );
            return $curso;
        }
    }

    private function storePago(Request $request, String $nombre_archivo, int $metodo_pago_id)
    {
        if ($metodo_pago_id == 3) { //Si pago deposito
            $request->validate([
                'file' => 'required|image|max:5120|mimes:jpg,png,jpeg',
            ]);
            $pago_id = Auth::user()->username . '_' . $nombre_archivo;
            $file_name = 'pago_' . Auth::user()->username . '_' . $nombre_archivo . '.' . $request->file->getClientOriginalExtension();
            $path = Storage::putFileAs('pagos', $request->file, $file_name);
        } else {
            $pago_id = $request->payment_id;
            $path = null;
        }
        try {
            $pago = new Pago();
            $pago->metodo_pago_id = $metodo_pago_id;
            $pago->amount = $request->amount;
            $pago->currency = $request->currency;
            $pago->payment_status = $request->payment_status;
            $pago->payment_id = $pago_id;
            $pago->payer_id = $request->payer_id;
            $pago->payer_email = $request->payer_email;
            $pago->payer_name = $request->payer_name;
            $pago->transaction_id = $request->transaction_id;
            $pago->file = $path;
            $pago->save();
            return $pago;
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Ocurrió un error en el pago');
        }
    }

    private function notifyByEmailToAdmins()
    {
        try {
            $admin_users_emails = User::role(['admin', 'su_admin'])->where('deleted', 0)->select('email')->get();
            foreach ($admin_users_emails as $admin_user_email) {
                Notification::route('mail', $admin_user_email->email) //Sending mail to subscriber
                    ->notify(new NewPagoDepositoNotification()); //With new post
            }
            unset($admin_users_emails);
        } catch (\Exception $e) {
        }
    }

    private function generateMatricula(int $curso_id, int $curso_moodle_id, String $username = null, int $estado, String $pago_id = null)
    {
        try {
            $matricula = new Matricula();
            $matricula->curso_id = $curso_id;
            $matricula->usuario_id = Auth::user()->id;
            $matricula->username = $username;
            $matricula->curso_moodle_id = $curso_moodle_id;
            $matricula->estado_matricula_id = $estado;
            $matricula->pago_id = $pago_id;
            $matricula->save();
        } catch (\Exception $e) {
            return redirect()->back()->withErrors('Ocurrió un error durante la matrícula');
        }
    }

    /**
     * Verifica que la matrícula existe, si existe es riderccionado, si no, retorna el curso y el precio.
     *
     * @param  String
     */

    private function verifyMatriculaIfExists(String $curso_id)
    {
        $curso_aux = $this->makeCourseFromMoodleData($curso_id);
        if ($curso_aux == []) {
            return inertia('NotFoundComponent');
        }
        if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso_aux->moodle_id]])->exists()) {
            return inertia('MatriculaComponent', ['curso' => $curso_aux, 'matriculado' => true]);
        } else {
            //el proceso de matriculación continúa
            $curso = $this->storeCursoIfNotExists($curso_aux);
            return ['curso' => $curso, 'precio' => doubleval($curso_aux->price)];
        }
    }

    /**
     * Guarda un curso en la DB del sitio web principal.
     *
     * @param  \app\Models\MoodleCurso
     * @return \app\Models\Curso
     */
    private function storeCursoIfNotExists(MoodleCurso $curso)
    {
        $curso = Curso::firstOrCreate(
            ['shortname' => $curso->shortname],
            ['moodle_id' => $curso->moodle_id, 'fullname' => $curso->fullname, 'shortname' => $curso->shortname, 'category' => $curso->category, 'destacado' => false]
        );
        $curso->save();
        return $curso;
    }
}
