<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;
    protected $connection = 'moodle';
    protected $table = 'course';
    protected $fillable = [
        'id',
        'fullname',
        'category',
        'shortname',
        'summary',
    ];
}
