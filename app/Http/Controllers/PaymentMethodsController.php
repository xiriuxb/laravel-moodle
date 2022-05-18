<?php

namespace App\Http\Controllers;

use App\Http\Traits\MoodleServicesTrait;
use Illuminate\Http\Request;
use App\Models\PaymentMethod;
use App\Models\Matricula;
use Illuminate\Support\Facades\Auth;

class PaymentMethodsController extends Controller
{
    use MoodleServicesTrait;
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
            'locale' => (string) env('PAYPAL_LOCALE'),
        ];
        return response()->json( $datos);   
    }

    public function depositoTransferenciaPaymentData($curso_id){
        $curso_aux = $this->getCourseFromMoodle($curso_id);
        $curso_data = ['shortname'=>$curso_aux->shortname,'fullname'=>$curso_aux->fullname, 'precio'=>$curso_aux->customfields[1]->value];
        $paymentData = [
            'user'=>str_replace('_',' ',(string)env('TRANSFER_NAME')) ,
            'user_id'=>(string)env('TRANSFER_ID'),
            'user_account'=>(string)env('TRANSFER_ACCOUNT'),
            'user_bank'=>str_replace('_',' ',(string)env('TRANSFER_BANK')) ,
        ];
        if(Matricula::where([['username', Auth::user()->username], ['curso_moodle_id', $curso_aux->id], ['estado_matricula_id',3]])->exists()){
            return inertia('payments/DepositoTransferenciaComponent', ['curso_data' => $curso_data, 'pago' => true]);
        }else{
            return inertia('payments/DepositoTransferenciaComponent',['account_pago_data'=>$paymentData, 'curso_data'=>$curso_data]);
        }
    }
}
