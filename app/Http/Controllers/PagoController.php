<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pago;

class PagoController extends Controller
{
    //
    public function index()
    {
        return inertia('PagoComponent');
    }

    public function store(Request $request)
    {
        //
        $pago = new Pago();
        $pago->metodo_pago_id = 1;
        $pago->amount = $request->amount;
        $pago->currency = $request->currency;
        $pago->status = $request->status;
        $pago->transaction_id = $request->transaction_id;
        $pago->file = '';
        $pago->save();
    }
}
