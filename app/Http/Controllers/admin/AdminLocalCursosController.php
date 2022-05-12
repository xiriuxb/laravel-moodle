<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Curso;

class AdminLocalCursosController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:cursoslocal.all');
    }

    public function index(Request $request)
    {
        return response()->json(
            Curso::where([
                ['fullname','LIKE','%'.$request->search.'%']
            ])->select('shortname','fullname','category','destacado')->paginate(10), 200);
    }

    public function importFromMoodle(Request $request)
    {
        $course = $this->sho($request->shortname);
        $curso = Curso::updateOrCreate(
            ['shortname' => $request->shortname],
            ['moodle_id'=> $course->id,'fullname' => $course->fullname, 'shortname' => $course->shortname, 'category' => $course->categoryname, 'destacado' => false]
        );
        return $curso->save();
    }

    public function setDestacado(Request $request){
        $curso = Curso::where('shortname',$request->id)->first();
        $curso->destacado = $request->destacado;
        $curso->save();
        return response()->json(['status' => 'ok', 'data' => $curso], 200);
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
