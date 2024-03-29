<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Curso;
use App\Models\MoodleCurso;

class CursosLocal extends Controller
{
    public function __construct()
    {
    }
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
        $cursosDestacados = Curso::where('destacado', 1)->select('moodle_id')->get()->map(function ($item) {
            return $item->moodle_id;
        });
        return sizeof($cursosDestacados) != 0 ? response()->json(['status' => 'ok', 'data' =>  $this->getFromMood($cursosDestacados)], 200):response()->json([],404);

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
        $res = $client->request('GET', config('app.moodle_ws_url'), [
            'query' => [
                'wstoken' => (string)config('app.moodle_ws_token'),
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
                        $curso_aux->overviewfiles == null?'/images/default_course_image.png':str_replace('/webservice', '', $curso_aux->overviewfiles[0]->fileurl),
                        $curso_aux->startdate,
                        $curso_aux->enddate,
                    );
                    $cursos[] = $curso;
                }
            }
            unset($curso_aux);
            return $cursos;
    }
}
