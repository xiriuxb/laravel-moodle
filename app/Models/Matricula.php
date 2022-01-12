<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matricula extends Model
{
    use HasFactory;

    public function cursos()
    {
        return $this->belongsTo(Curso::class,'moodle_id');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class,'username');
    }

    protected $fillable = [
        'curso_id',
        'usuario_id',
    ];
}
