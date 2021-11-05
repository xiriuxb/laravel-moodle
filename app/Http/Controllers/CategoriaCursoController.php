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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoriaCurso  $categoriaCurso
     * @return \Illuminate\Http\Response
     */
    public function show(CategoriaCurso $categoriaCurso)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CategoriaCurso  $categoriaCurso
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoriaCurso $categoriaCurso)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoriaCurso  $categoriaCurso
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoriaCurso $categoriaCurso)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoriaCurso  $categoriaCurso
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoriaCurso $categoriaCurso)
    {
        //
    }
}
