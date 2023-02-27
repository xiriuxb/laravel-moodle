<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;

class TestimonioController extends Controller
{
    public function __construct()
    {

    }

    public function visibles()
    {
        $testimonios = Testimonial::where('is_active', 1)->select('id', 'autor', 'texto','file')->get();
        return response()->json(['status' => 'ok', 'testimonios' => $testimonios], 200);
    }
}
