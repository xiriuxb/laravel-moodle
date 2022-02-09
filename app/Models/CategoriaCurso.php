<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoriaCurso extends Model
{
    use HasFactory;
    protected $connection = 'moodle';
    protected $table = 'mdl_course_categories';
    protected $fillable = [
        'id',
        'name',
    ];
}
