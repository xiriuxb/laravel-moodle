<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pago;
use Illuminate\Support\Facades\File;

class PagoController extends Controller
{
    //
    public function index()
    {
        return inertia('PagoComponent');
    }

    public function getImage($id)
    {
        $pago = Pago::find($id);
        
        //dd(File::exists(storage_path().'/app/pago_jtrujillo_1653053612'));
        if(!File::exists(storage_path('app/').$pago->file)) {
            return response()->json(['error' => 'File does not exist'], 404);
        }
        $file = File::get(storage_path('app/').$pago->file);

        return response( $file)->header('Content-Type', 'image/png');
    }
}
