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
Route::post('vuelogin', 'App\Http\Controllers\Auth\LoginController@vuelogin')
->name('vuelogin');

Route::post('register', 'App\Http\Controllers\Auth\RegisterController@validator')->name('register')->middleware('guest');

Route::get('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend')->name('verification.resend');

Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');

Route::apiResource('testimonials', 'App\Http\Controllers\AdminTestimonioController');

Route::get('visibleComments', 'App\Http\Controllers\AdminTestimonioController@visibles')->name('visibles');

Route::apiResource('curses', 'App\Http\Controllers\Cursos');

Route::get('categorias', 'App\Http\Controllers\CategoriaCursoController@index')->name('cursos');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return response()->json(['message' => 'Se a reenviado el mail de verificación.', 'status' => 200]);
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::apiResource('users', 'App\Http\Controllers\UserController');