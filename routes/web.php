<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;

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
function FunctionName()
{
    # code...
    $user = null;
    if(Auth::check()){
        $user =['name'=>Auth::user()->name,
                'email'=>Auth::user()->email,
                'id'=>Auth::user()->id,
                'username'=>Auth::user()->username];
    }
    return $user;
}

Route::group(['middleware' => ['web']], function () {
    
    Route::get('/', function () {
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->name('home');
    
    Route::get('/admin', function(){
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->middleware('can:admin.home')->name('admin.home');
    
    Route::get('/admin/{any}', function(){
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->middleware('can:admin.home')
    ->name('admi')
    ->where(['any'=>'testimonios|cursos|usuarios']);
    
    Route::get('/cursos', function () {
        return redirect('/cursos/all/1');
    })->where(['any'=>'.*'])->name('cursos');
    
    Route::get('/cursos/{category}/{page}', function () {
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->where(['category'=>'.*','page' => '[0-9]+']);
    
    Route::get('/cursos/{category}', function ($category) {
        return redirect('/cursos/'.$category.'/1');
    })->where(['category'=>'.*']);
    
    Route::get('/ingreso', function () {
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->middleware('guest')->name('ingreso');
    
    Route::get('/curso/{any}', function () {
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->where(['any' => '.*']);
    
    Route::get('/email/verify', function () {
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->middleware('auth')->name('verification.notice');
    
    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect('/');
    })->middleware(['auth', 'signed'])->name('verification.verify');

    Route::get('/forgot-password', function () {
        return view('layouts.master',['auth_user'=>FunctionName()]);
    })->middleware('guest')->name('password.request');
    
    Route::get('/reset-password/{token}', function ($token) {
        return view('layouts.master', ['token' => $token,'auth_user'=>FunctionName()]);
    })->middleware('guest')->name('password.reset');
});
