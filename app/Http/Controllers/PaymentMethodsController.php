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
}
