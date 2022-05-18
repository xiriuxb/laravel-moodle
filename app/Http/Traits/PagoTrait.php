<?php
namespace App\Http\Traits;

use Illuminate\Http\Request;
use App\Models\Pago;
trait PagoTrait {
    public function store(Request $request, int $tipo_pago)
    {
        //
        $pago = new Pago();
                $pago->metodo_pago_id = $tipo_pago;
                $pago->amount = $request->payment_form['amount'];
                $pago->currency = $request->payment_form['currency'];
                $pago->payment_status = $request->payment_form['payment_status'];
                $pago->payment_id = $request->payment_form['payment_id'];
                $pago->payer_id = $request->payment_form['payer_id'];
                $pago->payer_email = $request->payment_form['payer_email'];
                $pago->payer_name = $request->payment_form['payer_name'];
                $pago->transaction_id = $request->payment_form['transaction_id'];
                $pago->file = $tipo_pago==3?$request->file:'';
                $pago->save();
    }
    
}