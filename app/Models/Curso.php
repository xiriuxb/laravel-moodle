<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Curso extends Model
{
    use HasFactory;
    public function category()
    {
        return $this->belongsTo(CategoriaCurso::class,'category')->select('id','name');
    }
    protected $fillable = [
        'id',
        'fullname',
        'category',
        'shortname',
        'summary',
        'image',
        'price',
        'destacado',
        'ex_description'
    ];
}
