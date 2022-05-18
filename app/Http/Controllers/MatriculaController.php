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
use Laravel\Ui\AuthRouteMethods;

class MatriculaController extends Controller
{

    use MoodleServicesTrait;

    public function __construct()
    {
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
            $user_verified = Auth::user()->email_verified_at==null?false:true;
            //Si el usuario ya está matriculado
            if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso->moodle_id], ['estado_matricula_id',1]])->exists()) {
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => true]);
            }
            //Si el usuario no está matriculado pero pagó con depósito
            if(Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso->moodle_id], ['estado_matricula_id',3]])->exists()){
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'pago' => true]);
            }
            if ($curso->price == 0) {
                //Si el curso es gratis
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => '/matricula-free', 'verificado'=>$user_verified]);
            } else {
                //Si el curso no es gratis
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => '/matricula', 'verificado'=>$user_verified]);
            }
        } else {
            return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => '/login']);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function storeFree(Request $request)
    {
        $curso_aux = $this->makeCourseFromMoodleData($request->shortname);
        if ($curso_aux == []) {
            return inertia('NotFoundComponent');
        }
        if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso_aux->id]])->exists()) {
            return inertia('MatriculaComponent', ['curso' => $curso_aux, 'matriculado' => true]);
        }
        if ($curso_aux->price == 0) {
            $curso = Curso::firstOrCreate(
                ['shortname' => $request->shortname],
                ['moodle_id'=> $curso_aux->moodle_id,'fullname' => $curso_aux->fullname, 'shortname' => $curso_aux->shortname, 'category' => $curso_aux->category, 'destacado' => false]
            );
            $curso->save();
            $temp_id = Curso::where('id', $curso->id)->get()->first()->id;
            $matricula = new Matricula();
            $matricula->curso_id = $temp_id;
            $matricula->usuario_id = Auth::user()->id;
            $matricula->username = Auth::user()->username;
            $matricula->curso_moodle_id = $curso->moodle_id;
            $matricula->estado_matricula_id = 1;
            $matricula->save();
            return redirect()->back()->with(['curso' => $curso, 'matriculado' => true]);
        } else {
            return redirect()->back()->withErrors('message', 'ocurrio un error');
        }
    }

    public function storePaypalOrCreditCard(Request $request)
    {
        $curso_aux = $this->makeCourseFromMoodleData($request->curso_id);
        if ($curso_aux == []) {
            return inertia('NotFoundComponent');
        }
        if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso_aux->id]])->exists()) {
            return inertia('MatriculaComponent', ['curso' => $curso_aux, 'matriculado' => true]);
        }
        if ($curso_aux->price > 0) {
            $curso = Curso::firstOrCreate(
                ['shortname' => $request->curso_id],
                ['moodle_id'=> $curso_aux->moodle_id,'fullname' => $curso_aux->fullname, 'shortname' => $curso_aux->shortname, 'category' => $curso_aux->category, 'destacado' => false]
            );
            $curso->save();
            $pago = $this->storePago($request, '', 1);
            try{
                $matricula = new Matricula();
                $matricula->curso_id = $curso->id;
                $matricula->usuario_id = Auth::user()->id;
                $matricula->username = Auth::user()->username;
                $matricula->curso_moodle_id = $curso->moodle_id;
                $matricula->estado_matricula_id = 1;
                $matricula->pago_id = $pago->id;
                $matricula->save();
                return redirect()->back()->with(['curso' => $curso, 'matriculado' => true]);
            }
            catch (\Exception $e) {
                return redirect()->back()->withErrors('message', 'Ocurrió un error en la matrícula');
            }
        } else {
            return redirect()->back()->withErrors('message', 'ocurrio un error xD');
        }
    }

    public function storeDepositoTransferencia(Request $request)
    {
        $curso_aux = $this->makeCourseFromMoodleData($request->curso_id);
        if ($curso_aux == []) {
            return inertia('NotFoundComponent');
        }
        if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso_aux->id]])->exists()) {
            return inertia('MatriculaComponent', ['curso' => $curso_aux, 'matriculado' => true]);
        }
        if ($curso_aux->price > 0) {
            $curso = Curso::firstOrCreate(
                ['shortname' => $request->curso_id],
                ['moodle_id'=> $curso_aux->moodle_id,'fullname' => $curso_aux->fullname, 'shortname' => $curso_aux->shortname, 'category' => $curso_aux->category, 'destacado' => false]
            );
            $curso->save();
            $time = time();
            $temp_id = $temp_id = Curso::where('id', $curso->id)->get()->first()->id;
            $pago = $this->storePago($request, $time, 3);
            try{
                $matricula = new Matricula();
                $matricula->curso_id = $temp_id;
                $matricula->usuario_id = Auth::user()->id;
                $matricula->curso_moodle_id = $curso->moodle_id;
                $matricula->estado_matricula_id = 3;
                $matricula->pago_id = $pago->id;
                $matricula->save();
                return redirect('/curso/'.$request->curso_id)->with(['curso' => $curso, 'matriculado' => true]);
            }
            catch (\Exception $e) {
                dd($e);
                return redirect()->back()->withErrors('Ocurrió un error en la matrícula');
            }
        } else {
            return redirect()->back()->withErrors('message', 'ocurrio un error xD');
        }
    }

    private function makeCourseFromMoodleData($shortname)
    {
        $curso_aux = $this->getCourseFromMoodle($shortname);
        if ($curso_aux == []) {
            return [];
        }else{

            $curso = new MoodleCurso(
                $curso_aux->id,
                $curso_aux->fullname,
                $curso_aux->shortname,
                $curso_aux->summary,
                $curso_aux->customfields[1]->value,
                $curso_aux->categoryname,
                str_replace('/webservice', '', $curso_aux->overviewfiles[0]->fileurl), //remove /webservice string,
                $curso_aux->customfields[2]->value,
                //'destacado' => $json->courses[0]->customfields[3]->value,
            );
            return $curso;
        }
    }

    private function storePago(Request $request, $nombre_archivo, int $metodo_pago_id){
        $pago_id = $metodo_pago_id == 3? Auth::user()->username.'_'.$nombre_archivo : $request->payment_id;
        $file = $metodo_pago_id == 3? 'pago_'.Auth::user()->username.'_'.$nombre_archivo : null;
        try{
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
            $pago->file = $file;
            $pago->save();
            return $pago;
        }catch (\Exception $e){
            dd($e);
            return redirect()->back()->withErrors('Ocurrió un error en el pago');
        }
    }
}
