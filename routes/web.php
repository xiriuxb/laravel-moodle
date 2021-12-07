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
    return view('layouts.master');
})->name('home');

Route::get('/admin', function(){
    return view('layouts.master');
})->middleware('can:admin.home')->name('admin.home');

Route::get('/admin/{any}', function(){
    return view('layouts.master');
})->middleware('can:admin.home')
->name('admin.home')
->where(['any'=>'comentarios|cursos']);

Route::get('/cursos', function () {
    return view('layouts.master');
});

Route::get('/ingreso', function () {
    return view('layouts.master');
})->middleware('guest')->name('ingreso');

Route::get('/curso/{any}', function () {
    return view('layouts.master');
})->where(['any' => '.*']);

Route::get('/email/verify', function () {
    return view('auth.verify');
})->middleware('auth')->name('verification.notice');

Route::get('/test', function () {
    return view('layouts.lista');
})->name('xD');

Auth::routes();