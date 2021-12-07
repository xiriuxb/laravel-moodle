<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;

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
    public function index()
    {
        $cursos = [];
        //Recive todos los cursos desde la API de moodle
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:59565/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '3e1c3b8cd05832f337d84de5985e125b',
                'wsfunction' => 'core_course_get_courses_by_field',
                'moodlewsrestformat' => 'json',
            ]
        ]);
        $json = json_decode($res->getBody());
        foreach ($json->courses as $curso) {
            if ($curso->id != 1) {
                $curso = new Curso([
                    'id' => $curso->id,
                    'fullname' => $curso->fullname,
                    'shortname' => $curso->shortname,
                    'category' => $curso->categoryid,
                    'summary' => $curso->summary,
                    'image' =>  str_replace('/webservice', '', $curso->overviewfiles[0]->fileurl), //remove /webservice string,
                    'price' => $curso->customfields[1]->value,
                ]);
                $cursos[] = $curso;
            }
            unset($curso);
        }
        return response()->json(['status' => 'ok', 'data' => $cursos], 200);
    }

    public function show($shortname)
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:59565/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '3e1c3b8cd05832f337d84de5985e125b',
                'wsfunction' => 'core_course_get_courses_by_field',
                //Recive los datos del curso especificado desde la API de moodle
                'field' => 'shortname',
                'value' => $shortname,
                'moodlewsrestformat' => 'json',
            ]
        ]);
        $json = json_decode($res->getBody());
        if (empty($json->courses) ) {
            return response()->json(['status' => 'error', 'message' => 'No existe el curso'], 404);
        } else {
            $curso = new Curso([
                'id' => $json->courses[0]->id,
                'fullname' => $json->courses[0]->fullname,
                'shortname' => $json->courses[0]->shortname,
                'category' => $json->courses[0]->categoryid,
                'summary' => $json->courses[0]->summary,
                'image' =>  str_replace('/webservice', '', $json->courses[0]->overviewfiles[0]->fileurl), //remove /webservice string,
                'price' => $json->courses[0]->customfields[1]->value,
                'ex_description' => $json->courses[0]->customfields[2]->value,
            ]);
            return response()->json(['status' => 'ok', 'data' => $curso], 200);	
        }
    }
}
