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

Route::get('/acerca', function(){
    return view('layouts.about');
})->name('acerca');

Route::get('{any}', function () {
    return view('layouts.master');
})->where('any','.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home2');

Route::get('/email/verify', function () {
    return view('layouts.sendemail');
})->middleware('auth')->name('verification.notice');