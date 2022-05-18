<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    use HasFactory;

    protected $table= 'payment_method'; 

    public function matriculas()
    {
        return $this->belongsToMany(Matricula::class);
    }

    protected $fillable = [
        'name',
        'label',
        'icon',
        'active',
    ];

    protected $hidden = [
        'active',
        'id',
        'created_at',
        'updated_at',
    ];
}
