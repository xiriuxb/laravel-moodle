<?php

namespace App\Http\Controllers;

use App\Models\MoodleCurso;

class Cursos extends Controller
{
    public function __construct()
    {
    }
    /**
     *
     * @param  array  $data
     * @return \App\Models\Comment
     */
    public function index($categoria=null)
    {
        $cursos = [];
        //dd($categoria);
        //Recive todos los cursos desde la API de moodle
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://moodle.xiriuxb.org/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '9b2f731935a54e126809b497bd231bd8',
                'wsfunction' => 'core_course_get_courses_by_field',
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
        $json = json_decode($res->getBody());
        if (empty($json->courses) ) {
            return response()->json(['status' => 'error', 'message' => 'No existen cursos'], 404);
        }else{
            foreach ($json->courses as $cursoj) {
            //filter data by category
                if ($cursoj->id != 1 && $cursoj->visible) { //Si el curso no es moodle y esta visible
                    $curso = new MoodleCurso(
                        $cursoj->id,
                        $cursoj->fullname,
                        $cursoj->shortname,
                        $cursoj->summary,
                        $cursoj->customfields[1]->value,
                        $cursoj->categoryname,
                        str_replace('/webservice', '', $cursoj->overviewfiles[0]->fileurl), //remove /webservice string,
                    );
                    if($categoria!= null && $curso->category == $categoria){
                        //dd($categoria);
                        $cursos[] = $curso;
                    }
                    elseif($categoria == null){
                        $cursos[] = $curso;
                    }
                }
                unset($curso);
            }
            return response()->json(['status' => 'ok', 'data' => $cursos], 200);
        }
    }

    public function show($shortname)
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
        if (empty($json->courses) ) {
            return response()->json(['status' => 'error', 'message' => 'No existe el curso'], 404);
        } else {
            $curso_aux = $json->courses[0];
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
            return response()->json(['status' => 'ok', 'data' => $curso], 200);	
        }
    }
}
