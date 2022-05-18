<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matricula extends Model
{
    use HasFactory;

    protected $table= 'matricula';
    public function cursos()
    {
        return $this->belongsTo(Curso::class,'curso_id');
    }

    public function username()
    {
        return $this->belongsTo(User::class,'usuario_id');
    }
    public function pago(){
        return $this->belongsTo(Pago::class,'pago_id');
    }
    protected $fillable = [
        'curso_id',
        'usuario_id',
        'curso_moodle_id',
        'pago_id',
        'username',
    ];

    protected $hidden = [
        'updated_at',
    ];
}
