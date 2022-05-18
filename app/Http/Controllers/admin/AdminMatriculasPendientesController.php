<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminMatriculasPendientesController extends Controller
{
    public function index()
    {
        return response()->json( ['matriculas'=>\App\Models\Matricula::with('username','cursos','pago')->where([['username',null],['estado_matricula_id',3]])->get()]);
    }
}
