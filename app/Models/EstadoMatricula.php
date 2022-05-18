<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoMatricula extends Model
{
    protected $table= 'estado_matricula';
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'id',
        'descripcion',
    ];
}
