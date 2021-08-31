<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Comment;
use Illuminate\Http\Response;
use GuzzleHttp\Middleware;

class AdminComentarioController extends Controller
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
        return response()->json(['status'=>'ok','data'=>Comment::all()], 200);
    }

    public function visibles() {
        return response()->json(['status'=>'ok','data'=>Comment::where('is_active',1)->get()], 200);
    }

    public function store(Request $request) {
        $request->validate([
            'autor' => ['required', 'string', 'max:64'],
            'texto' => ['required', 'string','max:512'],
        ]);
        if($request->is_active == ""){
            $request->is_active = 0;
        }
        $comment = new Comment();
        $comment->texto = $request->texto;
        $comment->autor = $request->autor;
        $comment->is_active = $request->is_active;
        $comment->save();
    }

    public function show($id) {
        $comment=Comment::find($id);
        if (!$comment)
        {
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un comentario con ese código.'])],404);
        }
        return response()->json(['status'=>'ok','data'=>$comment],200);
    }

            public function edit($id) {
            echo 'edit';
            }
            public function update(Request $request, $id) {
            echo 'update';
            }
    public function destroy($id) {
        $comment=Comment::find($id);

        if (!$comment)
        {
            return response()->json(['errors'=>array(['code'=>404,'message'=>'No se encuentra un comentario con ese código.'])],404);
        }
        $comment->delete();

        return response()->json(['code'=>204,'message'=>'Se ha eliminado el comentario correctamente.'],204);
    }  
    
        
}
