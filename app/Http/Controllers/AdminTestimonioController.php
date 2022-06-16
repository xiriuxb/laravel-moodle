<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Testimonial;
use Illuminate\Support\Facades\File;

class AdminTestimonioController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['visibles']]);
        //El CRUD puede ser hecho por los roles su-adm y admin
        $this->middleware('can:testimonial.crud', ['except' => ['visibles']]);
    }
    /**
     *
     * @param  array  $data
     * @return \App\Models\Comment
     */
    public function index()
    {
        return response()->json(['status' => 'ok', 'data' => Testimonial::all()], 200);
    }

    public function visibles()
    {
        return response()->json(['status' => 'ok', 'data' => Testimonial::where('is_active', 1)->select('id', 'autor', 'texto','file')->get()], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'autor' => ['required', 'string', 'max:64'],
            'texto' => ['required', 'string', 'max:512'],
            'file' => ['nullable','sometimes','image', 'max:512','mimes:jpeg,png,jpg'],
        ]);
        $request->is_active = $request->is_active = true? 1 : 0;
        try {
            $testimonial = new Testimonial();
            $testimonial->autor = $request->autor;
            $testimonial->user_id = $request->user()->id;
            $testimonial->texto = $request->texto;
            $testimonial->is_active = $request->is_active;
            $testimonial->save();
            if ($request->file) {
                $file = $request->file('file');
                $name = $testimonial->id . '-testimonial.' . $file->getClientOriginalExtension();
                $path = public_path() . '/images/testimonial/';
                $file->move($path, $name);
                $testimonial->file = $name;
                $testimonial->save();
            }
            return response()->json(['status' => 'ok', 'message' => "Se guardó correctamente"], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 422);
        }
    }

    public function show($id)
    {
        $comment = Testimonial::find($id);
        if (!$comment) {
            return response()->json(['errors' => array(['code' => 404, 'message' => 'No se encuentra un comentario con ese código.'])], 404);
        }
        return response()->json(['status' => 'ok', 'data' => $comment], 200);
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json(['errors' => array(['code' => 404, 'message' => 'No se encuentra un comentario con ese código.'])], 404);
        }
        $request->validate([
            'autor' => ['required', 'string', 'max:64'],
            'texto' => ['required', 'string', 'max:512'],
            'file' => ['nullable','sometimes','image', 'max:512','mimes:jpeg,png,jpg'],
        ]);
        $request->is_active = $request->is_active = true? 1 : 0;
        try {
            $testimonial->autor = $request->autor;
            $testimonial->user_id = $request->user()->id;
            $testimonial->texto = $request->texto;
            $testimonial->is_active = $request->is_active;
            $testimonial->save();
            if ($request->file) {
                $file = $request->file('file');
                $name = $testimonial->id . '-testimonial.' . $file->getClientOriginalExtension();
                $path = public_path() . '/images/testimonial/';
                $file->move($path, $name);
                $testimonial->file = $name;
                $testimonial->save();
            }
            return response()->json(['status' => 'ok', 'message' => 'Se actualizó correctamente'], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 422);
        }
    }
    public function destroy($id)
    {
        $comment = Testimonial::find($id);

        if (!$comment) {
            return response()->json(['errors' => array(['code' => 404, 'message' => 'No se encuentra un comentario con ese código.'])], 404);
        }
        $comment->delete();
        if(File::exists(public_path() . '/images/testimonial/' . $comment->file)){
            File::delete(public_path() . '/images/testimonial/' . $comment->file);
        }
        return response()->json(['code' => 204, 'message' => 'Se ha eliminado el comentario correctamente.'], 204);
    }
}
