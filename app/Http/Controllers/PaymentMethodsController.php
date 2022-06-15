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
            'mode' => (string) config('app.paypal_mode'),
            'client_id' => (string) config('app.paypal_client_id'),
            'currency' => (string) config('app.paypal_currency'),
            'buyer_country' => (string) config('app.paypal_buyer_country'),
            'locale' => (string) config('app.paypal_locale'),
        ];
        return response()->json( $datos);   
    }

    public function depositoTransferenciaPaymentData($curso_id){
        $curso_aux = $this->getCourseFromMoodle($curso_id);
        $curso_data = ['shortname'=>$curso_aux->shortname,'fullname'=>$curso_aux->fullname, 'precio'=>$curso_aux->customfields[1]->value];
        $paymentData = [
            'user'=>str_replace('_',' ',(string)config('app.bank_account_owner')),
            'user_id'=>(string)config('app.bank_account_owner_document'),
            'user_account'=>(string)config('app.bank_account_number'),
            'user_bank'=>str_replace('_',' ',(string)config('app.bank_name')),
        ];
        if(Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso_aux->id], ['estado_matricula_id',3]])->exists()){
            return inertia('payments/DepositoTransferenciaComponent', ['curso_data' => $curso_data, 'pago' => true]);
        }else{
            return inertia('payments/DepositoTransferenciaComponent',['account_pago_data'=>$paymentData, 'curso_data'=>$curso_data]);
        }
    }
}
