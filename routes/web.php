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
Route::group(['middleware' => ['web']], function () {

    Route::post('vuelogin', 'App\Http\Controllers\Auth\LoginController@vuelogin')->name('vuelogin');
    
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
    ->where(['any'=>'testimonios|cursos|usuarios|cursos-moodle']);
    
    Route::get('/cursos', function () {
        return view('layouts.master');
    });
    
    // Route::get('/cursos/{category}', function ($category) {
    //     return redirect('/cursos/'.$category.'/1');
    // })->where(['category'=>'.*']);
    
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

    Route::get('/forgot-password', function () {
        return view('layouts.master');
    })->middleware('guest')->name('password.request');
    
    Route::get('/reset-password/{token}', function ($token) {
        return view('layouts.master', ['token' => $token]);
    })->middleware('guest')->name('password.reset');

    Route::get('/personal', function () {
        return view('layouts.master');
    })->middleware('auth')->name('personal.data');

    Route::get('/search-temp', function () {
        return view('layouts.master');
    });

    Route::post('/change-password', 'App\Http\Controllers\UserController@changePassword')->name('change.password');

    Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->middleware('auth')->name('logout');

    Route::post('/change-email', 'App\Http\Controllers\UserController@changeEmail')->middleware('auth')->name('change.email');

    Route::post('/update-user','App\Http\COntrollers\UserController@update')->middleware('auth');
    Route::get('/mis-cursos',function ()
    {
        return view('layouts.master');
    })->middleware('auth')->name('my.courses');

    Route::get('/courses/search', 'App\Http\Controllers\Cursos@searchCourses');
});
