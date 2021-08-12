<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
    Route::post('login', 'App\Http\Controllers\Auth\LoginController@login')->name('login');

    Route::post('register', 'App\Http\Controllers\Auth\RegisterController@validator')->name('register');

    Route::get('email/verify/{hash}', 'App\Http\Controllers\Auth\VerificationController@verify')->name('verification.verify');

    Route::get('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend')->name('verification.resend');

    Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');

    Route::post('comment', 'App\Http\Controllers\ListaComentarioController@comment')->name('comment');