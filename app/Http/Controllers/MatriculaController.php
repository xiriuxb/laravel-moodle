<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use App\Models\Matricula;
use App\Models\MoodleCurso;
use Illuminate\Http\Request;
use App\Http\Controllers\Cursos;
use Illuminate\Support\Facades\Auth;
use App\Models\Pago;
use Inertia\Inertia;
use PhpParser\Node\Stmt\TryCatch;

class MatriculaController extends Controller
{

    public function __construct()
    {
        $this->middleware('can:matricula.getcomponent');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($curso_id)
    {
        $curso = $this->getFromMoodle($curso_id);
        if ($curso == []) {
            return inertia('NotFoundComponent');
        }
        //return inertia('views/Curso',['status' => 'ok', 'curso' => $curso], 200);	
        if (Auth::check()) {
            if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso->moodle_id]])->exists()) {
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => true]);
            }
            if ($curso->price == 0) {
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => '/matricula-free']);
            } else {
                return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => '/matricula']);
            }
        } else {
            return inertia('MatriculaComponent', ['curso' => $curso, 'matriculado' => false, 'ruta' => '/login']);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function storeF(Request $request)
    {
        $curso_aux = $this->getFromMoodle($request->shortname);
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
            $matricula->curso_moodle_id = $curso->moodle_id;
            $matricula->estado_matricula_id = 1;
            $matricula->save();
            return redirect()->back()->with(['curso' => $curso, 'matriculado' => true]);
        } else {
            return redirect()->back()->withErrors('message', 'ocurrio un error');
        }
    }

    public function store(Request $request)
    {
        $curso_aux = $this->getFromMoodle($request->shortname);
        if ($curso_aux == []) {
            return inertia('NotFoundComponent');
        }
        if (Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso_aux->id]])->exists()) {
            return inertia('MatriculaComponent', ['curso' => $curso_aux, 'matriculado' => true]);
        }
        if ($curso_aux->price > 0) {
            $curso = Curso::firstOrCreate(
                ['shortname' => $request->shortname],
                ['moodle_id'=> $curso_aux->moodle_id,'fullname' => $curso_aux->fullname, 'shortname' => $curso_aux->shortname, 'category' => $curso_aux->category, 'destacado' => false]
            );
            $curso->save();
            $temp_id = $temp_id = Curso::where('id', $curso->id)->get()->first()->id;
            try {
                $pago = new Pago();
                $pago->metodo_pago_id = 1;
                $pago->amount = $request->payment_form['amount'];
                $pago->currency = $request->payment_form['currency'];
                $pago->payment_status = $request->payment_form['payment_status'];
                $pago->payment_id = $request->payment_form['payment_id'];
                $pago->payer_id = $request->payment_form['payer_id'];
                $pago->payer_email = $request->payment_form['payer_email'];
                $pago->payer_name = $request->payment_form['payer_name'];
                $pago->transaction_id = $request->payment_form['transaction_id'];
                $pago->file = '';
                $pago->save();
            } catch (\Exception $e) {
                return redirect()->back()->withErrors('message', 'ocurrio un error pago');
            }
            try{
                $matricula = new Matricula();
                $matricula->curso_id = $temp_id;
                $matricula->usuario_id = Auth::user()->id;
                $matricula->curso_moodle_id = $curso->moodle_id;
                $matricula->estado_matricula_id = 1;
                $matricula->pago_id = Pago::where('payment_id', $request->payment_form['payment_id'])->select('id')->get()->first()->id;
                $matricula->save();
                return redirect()->back()->with(['curso' => $curso, 'matriculado' => true]);
            }
            catch (\Exception $e) {
                return redirect()->back()->withErrors('message', 'ocurrio un error pago');
            }
        } else {
            return redirect()->back()->withErrors('message', 'ocurrio un error xD');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function show(Matricula $matricula)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function edit(Matricula $matricula)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Matricula $matricula)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function destroy(Matricula $matricula)
    {
        //
    }

    /**
     * Get the specified resource from moodle.
     *
     * @param  String  $shortname
     * @return MoodleCurso if found if not empty array
     */
    private function getFromMoodle($shortname)
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://moodle.xiriuxb.org/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '9b2f731935a54e126809b497bd231bd8',
                'wsfunction' => 'core_course_get_courses_by_field',
                //Recive los datos del curso especificado desde la API de moodle
                'field' => 'shortname',
                'value' => $shortname,
                'moodlewsrestformat' => 'json',
            ], 'verify' => false
        ]);
        $json = json_decode($res->getBody());
        if (empty($json->courses)) {
            return [];
        }
        if (!$json->courses[0]->visible) {
            return [];
        }
        return $this->makeCourseFromMoodleData($json->courses[0]);
    }

    /**
     * Make a course from the data from moodle
     *
     * @param  Object  $data
     * @return MoodleCurso
     */

    private function makeCourseFromMoodleData($curso_aux)
    {
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
