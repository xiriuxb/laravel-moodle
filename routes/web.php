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


Route::get('', function () {
    return view('layouts.master');
})->name('home');

Route::get('/admin', function(){
    return view('layouts.master');
})->middleware('can:admin.home')->name('admin.home');

Route::get('/{url}', function () {
    return view('layouts.master');
})->where(['url' => 'cursos|ingreso']);

Route::get('/curso/{any}', function () {
    return view('layouts.master');
})->where(['any' => '.*']);

Auth::routes();