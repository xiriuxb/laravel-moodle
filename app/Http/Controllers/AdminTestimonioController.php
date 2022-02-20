<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Testimonial;
use Illuminate\Http\Response;
use GuzzleHttp\Middleware;

class AdminTestimonioController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['visibles']]);
        //El CRUD puede ser hecho por los roles su-adm y admin
        $this->middleware('can:testimonial.create', ['only' => ['store']]);
        $this->middleware('can:testimonial.delete', ['only' => ['destroy']]);
        $this->middleware('can:testimonial.edit', ['only' => ['update']]);
        $this->middleware('can:testimonial.edit', ['only' => ['index', 'show']]);
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
        return response()->json(['status' => 'ok', 'data' => Testimonial::where('is_active', 1)->select('id', 'autor', 'texto')->get()], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'autor' => ['required', 'string', 'max:64'],
            'texto' => ['required', 'string', 'max:512'],
        ]);
        if ($request->is_active == "") {
            $request->is_active = 0;
        }
        Testimonial::create([
            'texto' => $request->texto,
            'autor' => $request->autor,
            'is_active' => $request->is_active
        ]);
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
        ]);
        if ($request->is_active == "") {
            $request->is_active = 0;
        }
        $testimonial->update([
            'texto' => $request->texto,
            'autor' => $request->autor,
            'is_active' => $request->is_active
        ]);
        return response()->json(['status' => 'ok', 'data' => ['message' => 'Se actualizó correctamente']], 200);
    }
    public function destroy($id)
    {
        $comment = Testimonial::find($id);

        if (!$comment) {
            return response()->json(['errors' => array(['code' => 404, 'message' => 'No se encuentra un comentario con ese código.'])], 404);
        }
        $comment->delete();

        return response()->json(['code' => 204, 'message' => 'Se ha eliminado el comentario correctamente.'], 204);
    }
}
