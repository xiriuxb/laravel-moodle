<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\MoodleServicesTrait;
use Illuminate\Http\Request;
use App\Models\Curso;

class AdminLocalCursosController extends Controller
{
    use MoodleServicesTrait;
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
        $course = $this->getCourseFromMoodle($request->shortname);
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
}
