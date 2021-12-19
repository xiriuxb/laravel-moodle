<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

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
->name('admi')
->where(['any'=>'testimonios|cursos|usuarios']);

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
    return view('layouts.master');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');

Auth::routes();