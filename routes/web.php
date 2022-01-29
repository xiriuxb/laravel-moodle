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
function authData(){
    $user = null;
    if(Auth::check()){
        $user =['name'=>Auth::user()->name,
                'username'=>Auth::user()->username];
    }
    return $user;
}
function profileData(){
    $user = null;
    if(Auth::check()){
        $user =['name'=>Auth::user()->name,
                'last_name'=>Auth::user()->last_name,
                'username'=>Auth::user()->username,
                'email'=>Auth::user()->email,
                'role'=>Auth::user()->role,];
    }
    return $user;
}
Route::group(['middleware' => ['web']], function () {
    
    Route::get('/', function () {
        return view('layouts.master',['auth_user'=>authData()]);
    })->name('home');
    
    Route::get('/admin', function(){
        return view('layouts.master',['auth_user'=>authData()]);
    })->middleware('can:admin.home')->name('admin.home');
    
    Route::get('/admin/{any}', function(){
        return view('layouts.master',['auth_user'=>authData()]);
    })->middleware('can:admin.home')
    ->name('admi')
    ->where(['any'=>'testimonios|cursos|usuarios']);
    
    Route::get('/cursos', function () {
        return redirect('/cursos/all/1');
    })->where(['any'=>'.*'])->name('cursos');
    
    Route::get('/cursos/{category}/{page}', function () {
        return view('layouts.master',['auth_user'=>authData()]);
    })->where(['category'=>'.*','page' => '[0-9]+']);
    
    Route::get('/cursos/{category}', function ($category) {
        return redirect('/cursos/'.$category.'/1');
    })->where(['category'=>'.*']);
    
    Route::get('/ingreso', function () {
        return view('layouts.master',['auth_user'=>authData()]);
    })->middleware('guest')->name('ingreso');
    
    Route::get('/curso/{any}', function () {
        return view('layouts.master',['auth_user'=>authData()]);
    })->where(['any' => '.*']);
    
    Route::get('/email/verify', function () {
        return view('layouts.master',['auth_user'=>authData()]);
    })->middleware('auth')->name('verification.notice');
    
    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect('/');
    })->middleware(['auth', 'signed'])->name('verification.verify');

    Route::get('/forgot-password', function () {
        return view('layouts.master',['auth_user'=>authData()]);
    })->middleware('guest')->name('password.request');
    
    Route::get('/reset-password/{token}', function ($token) {
        return view('layouts.master', ['token' => $token,'auth_user'=>authData()]);
    })->middleware('guest')->name('password.reset');

    Route::get('/personal', function () {
        return view('layouts.master', ['auth_user'=>profileData()]);
    })->middleware('auth')->name('personal.data');
});
