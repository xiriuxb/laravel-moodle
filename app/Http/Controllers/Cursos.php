<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;

class Cursos extends Controller
{

    
    public function __construct()
    {
        $this->middleware('guest');
    }
                /**
     *
     * @param  array  $data
     * @return \App\Models\Comment
     */
    public function index() {
        return response()->json(['status'=>'ok','data'=>Curso::all()], 200);
    }
}
