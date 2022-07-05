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
        return response()->json(['status' => 'ok', 'data' => Testimonial::where('is_active', 1)->select('id', 'autor', 'texto','file')->get()], 200);
    }
}
