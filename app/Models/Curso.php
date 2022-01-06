<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    public function matriculas()
    {
        return $this->hasMany(Matricula::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */     
    //se anade category porque moodle trabaja con ese campo cuando
    //la matricula se maneja con una base de datos externa
    protected $fillable = [
        'moodle_id',
        'fullname',
        'shortname',
        'category',
        'destacado',
    ];
}
