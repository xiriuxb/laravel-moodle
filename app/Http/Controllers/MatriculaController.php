<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use App\Models\Matricula;
use App\Models\MoodleCurso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MatriculaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(['status' => 'ok', 'data' => Matricula::with('usuario')->get()], 200);
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
    public function store(Request $request)
    {
        //Primero verifico que el curso existe, si no existe devuelvo error
        if(!MoodleCurso::where('shortname','=', $request->shortname)->exists()){
            return response()->json(['status' => 'error','mensaje' => 'El curso no existe'], 419);
        }
        //Obtengo el curso con el shortname desde moodle
        $course = $this->sho($request->shortname);
        $userid=Auth::user()->id;
        //Verifico que el usuario no este matriculado en el curso
        if(Matricula::where([['usuario_id',$userid],['curso_id',$course->id]])->exists()){
            return response()->json(['status' =>'error','mensaje' => 'Ya está matriculado en este curso'], 419);
        }
        //Si no esta matriculado, priemero Registro el curso en la base de nuestra app (en caso de que el curso ya esté registrado
        //no hago nada)
        $curso = Curso::firstOrCreate(
            ['shortname' => $request->shortname],
            ['moodle_id'=> $course->id,'fullname' => $course->fullname, 'shortname' => $course->shortname, 'category' => $course->categoryname, 'destacado' => false]
        );
        $curso->save();
        //Procedo a matricular al usuario en el curso
        Matricula::create(['curso_id' => $course->id, 'usuario_id' => $userid]);
        return response()->json(['status' => 'ok','mensaje' => 'Matrícula realizada con éxito'], 200);
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

    private function sho($shortname)
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
            ],'verify'=> false
        ]);
        $json = json_decode($res->getBody());
            $curso_aux = $json->courses[0];
            return $curso_aux;
        
    }
}
