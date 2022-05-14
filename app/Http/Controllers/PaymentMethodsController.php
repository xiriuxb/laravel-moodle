<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PaymentMethod;

class PaymentMethodsController extends Controller
{
    public function index()
    {
        $paymentMethods = PaymentMethod::where('active', 1)->get();
        return compact('paymentMethods');
    }

    public function getPaypalData(Request $request)
    {
        $datos = [
            'mode' => (string) env('PAYPAL_MODE'),
            'client_id' => (string) env('PAYPAL_CLIENT_ID'),
            'currency' => (string) env('PAYPAL_CURRENCY'),
            'buyer_country' => (string) env('PAYPAL_BUYER_COUNTRY'),
            'locale' => (string) env('PAYPAL_locale'),
        ];
        return response()->json( $datos);   
    }
}
