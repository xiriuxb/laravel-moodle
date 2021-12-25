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
        $res = $client->request('GET', 'https://moodle.xiriuxb.org/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '9b2f731935a54e126809b497bd231bd8',
                'wsfunction' => 'core_course_get_courses_by_field',
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
        $json = json_decode($res->getBody());
        foreach ($json->courses as $curso) {
            if ($curso->id != 1) {
                $curso = new Curso([
                    'id' => $curso->id,
                    'fullname' => $curso->fullname,
                    'shortname' => $curso->shortname,
                    'summary' => $curso->summary,
                    //'image' =>  str_replace('/webservice', '', $curso->overviewfiles[0]->fileurl), //remove /webservice string,
                    'price' => $curso->customfields[1]->value,
                    'category' => $curso->categoryname,
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
            $curso = new Curso([
                'id' => $json->courses[0]->id,
                'fullname' => $json->courses[0]->fullname,
                'shortname' => $json->courses[0]->shortname,
                'summary' => $json->courses[0]->summary,
                //'image' =>  str_replace('/webservice', '', $json->courses[0]->overviewfiles[0]->fileurl), //remove /webservice string,
                'price' => $json->courses[0]->customfields[1]->value,
                'ex_description' => $json->courses[0]->customfields[2]->value,
                'category' => $json->courses[0]->categoryname,
            ]);
            return response()->json(['status' => 'ok', 'data' => $curso], 200);	
        }
    }
}
