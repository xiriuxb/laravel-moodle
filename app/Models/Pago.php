<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    use HasFactory;
    protected $table= 'pago';

    public function matricula()
    {
        return $this->belongsTo(Matricula::class,'id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class);
    }

    protected $fillable = [
        'metodo_pago_id',
        'amount',
        'currency',
        'payment_status',
        'payment_id',
        'file',
        'payment_status',
        'payer_id',
        'payer_email', 
        'payer_name',
        'transaction_id',
    ];

    protected $hidden = [

    ];
}
