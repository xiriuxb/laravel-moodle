<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminMatriculasPendientesController extends Controller
{
    public function index()
    {
        return response()->json(['matriculas' => \App\Models\Matricula::with('user', 'cursos', 'pago')->where([['username', null], ['estado_matricula_id', 3]])->get()]);
    }

    public function update($id, $estado_matricula_id)
    {
        $matricula = \App\Models\Matricula::with('user')->find($id);
        if (!$matricula) {
            return response()->json(['error' => 'No se encontró la matrícula'], 404);
        }
        switch ($estado_matricula_id) {
            case 1:
                $matricula->estado_matricula_id = 1;
                $matricula->username = $matricula->user->username;
                $matricula->save();
                return response()->json(['matricula' => 'Matrícula aceptada'], 200);
                break;
            case 2:
                $matricula->estado_matricula_id = 2;
                $matricula->save();
                return response()->json(['matricula' => 'Matrícula rechazada'], 200);
                break;
            case 4:
                $matricula->estado_matricula_id = 4;
                $matricula->save();
                break;
            case 5:
                $matricula->estado_matricula_id = 5;
                $matricula->save();
                break;
            default:
                return response()->json(['error' => 'No se encontró el estado de la matrícula'], 404);
                break;
        }
    }
}
