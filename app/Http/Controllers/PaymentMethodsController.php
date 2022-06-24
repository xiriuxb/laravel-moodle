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
    public function __construct()
    {
        $this->middleware('can:matricula.generarmatricula', ['only' => ['index']]);
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
        if(Matricula::where([['usuario_id', Auth::user()->id], ['curso_moodle_id', $curso_aux->id]])
        ->where(function($query){
            $query->where('estado_matricula_id',1)->orWhere('estado_matricula_id',3);
        })->exists()){
            return redirect('/curso/'.$curso_aux->shortname);
        }
        $paymentData = [
            'user'=>str_replace('_',' ',(string)config('app.bank_account_owner')),
            'user_id'=>(string)config('app.bank_account_owner_document'),
            'user_account'=>(string)config('app.bank_account_number'),
            'user_bank'=>str_replace('_',' ',(string)config('app.bank_name')),
        ];
        return inertia('payments/DepositoTransferenciaComponent',['account_pago_data'=>$paymentData, 'curso_data'=>$curso_data]);
    }
}
