<?php

namespace App\Http\Controllers;

use App\Models\CategoriaCurso;
use Illuminate\Http\Request;

class CategoriaCursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['status'=>'ok','data'=>CategoriaCurso::select('id','name')->get()], 200);
    }
}
