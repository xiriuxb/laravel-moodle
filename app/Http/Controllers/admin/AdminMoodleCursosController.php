<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\MoodleCurso;
use Illuminate\Http\Request;

class AdminMoodleCursosController extends Controller
{

    public function __construct()
    {
    }

    public function index(Request $request)
    {
        return response()->json(MoodleCurso::where([['format','<>','site'],['visible','=',1],['fullname','LIKE','%'.$request->search.'%']])->select('shortname','fullname')->paginate(10), 200);
    }
}
