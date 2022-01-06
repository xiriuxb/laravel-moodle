<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use App\Models\Matricula;
use Illuminate\Http\Request;

class MatriculaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(['status' => 'ok', 'data' => Matricula::with('usuario')->get()], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        //dd($request->all());
        $mensaje = '';
        $status = '';
        $curso = Curso::firstOrCreate(
            ['moodle_id' => $request->moodle_id],
            ['fullname' => $request->fullname, 'shortname' => $request->shortname, 'category' => $request->category, 'destacado' => false]
        );
        $curso->save();
        $matricula= Matricula::where([['usuario_id',$request->user_id],
        ['curso_id',$request->moodle_id]])->first();

        if ($matricula === null) {
            Matricula::create(
            ['curso_id' => $request->moodle_id, 'usuario_id' => $request->user_id]);
            $mensaje = 'Matricula realizada con éxito';
            $status = 'ok';
        }else{
            $mensaje = 'Ya está matriculado en este curso';
            $status = 'error';
        }
        // Matricula::create(['curso_id' => $request->moodle_id, 'usuario_id' => $request->user_id]);
        return response()->json(['status' => $status,'mensaje' => $mensaje], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function show(Matricula $matricula)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function edit(Matricula $matricula)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Matricula $matricula)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Matricula  $matricula
     * @return \Illuminate\Http\Response
     */
    public function destroy(Matricula $matricula)
    {
        //
    }
}
