<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/lista',function (){
    return view('layouts.lista');
});

Route::resource('list','ListaComentarioController');

Route::get('/acerca', function(){
    return view('layouts.about');
})->name('acerca');