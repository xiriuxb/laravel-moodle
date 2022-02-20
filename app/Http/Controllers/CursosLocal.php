<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Curso;
use App\Models\MoodleCurso;

class CursosLocal extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(['status' => 'ok', 'data' => Curso::all()], 200);
    }

    public function destacados(){
        $cursosDestacados =Curso::where('destacado', 1)->select('moodle_id')->get()->map(function ($item) {
            return $item->moodle_id;
        });
        return response()->json(['status' => 'ok', 'data' =>  $this->getFromMood($cursosDestacados)], 200);

    }

    /**
     * Obtiene los datos de los cursos destacados desde moodle
     * @param Array con los cursos id de los cursos destacados
     * @return Array
     */
    private function getFromMood($cursos_ids)
    {
        $cursos = [];
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://moodle.xiriuxb.org/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '9b2f731935a54e126809b497bd231bd8',
                'wsfunction' => 'core_course_get_courses_by_field',
                //Recive los datos del curso especificado desde la API de moodle
                'field' => 'ids',
                'value' => ''.$cursos_ids,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
        //ddd(json_decode($res->getBody()));
        $json = json_decode($res->getBody());
            foreach($json->courses as $curso_aux){
                if($curso_aux->visible){
                    $curso = new MoodleCurso(
                        $curso_aux->fullname,
                        $curso_aux->shortname,
                        $curso_aux->summary,
                        $curso_aux->categoryname,
                        str_replace('/webservice', '', $curso_aux->overviewfiles[0]->fileurl), //remove /webservice string,
                        //'destacado' => $json->courses[0]->customfields[3]->value,
                    );
                    $cursos[] = $curso;
                }
            }
            unset($curso_aux);
            return $cursos;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
