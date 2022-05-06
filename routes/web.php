<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
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
Route::inertia('/home', 'LoginT');
Route::group(['middleware' => ['web']], function () {
    Route::get('/', function () {
        return inertia('HomeComponent');
    })->name('home');

    Route::get('/ingreso','App\Http\Controllers\Auth\LoginController@index')->middleware('guest')->name('ingreso');

    Route::post('vuelogin', 'App\Http\Controllers\Auth\LoginController@vuelogin')->name('vuelogin');
    
    Route::get('/mis-cursos', 'App\Http\Controllers\UserController@matriculas')->name('mis-cursos');
    
    // Route::get('/home', 'App\Http\Controllers\HomeController@index');
    
    Route::prefix('admin')->group(function(){
        Route::get('/testimonials', function(){
            return inertia('Admin/AdminTestimonialComponent');
        })->middleware('can:admin.home')->name('admin.home');
        Route::get('/cursos-moodle', function(){
            return inertia('Admin/AdminCoursesMoodleComponent');
        })->middleware('can:admin.home');
        Route::get('/cursos', function(){
            return inertia('Admin/AdminCoursesComponent');
        })->middleware('can:admin.home');
        Route::get('/users', function(){
            return inertia('Admin/AdminUsersComponent');
        })->middleware('can:admin.home');
    });
    
    Route::post('/matricula-free', 'App\Http\Controllers\MatriculaController@storeF')->name('matricula-free');
    Route::post('/matricula', 'App\Http\Controllers\MatriculaController@store')->name('matricula');
    
    Route::get('/cursos/{category?}/{page?}', 'App\Http\Controllers\Cursos@index')->name('cursess');

    Route::redirect('/cursos', '/cursos/all/1');
    
    Route::get('/eliminar-cuenta', function(){
        return inertia('User/EliminarCuentaComponent');
    })->middleware('auth')->name('eliminar-cuenta');

    Route::post('/user/delete', 'App\Http\Controllers\UserController@deleteProfile')->name('user.delete');
    Route::get('/curso/{any}', 'App\Http\Controllers\MatriculaController@index')->where(['any' => '.*']);
    
    Route::get('/email/verification-notification', function () {
        return inertia('Email/Notice');
    })->name('verification.notice');

    Route::post('/email/verification-notification', function (Request $request) {
        $request->user()->sendEmailVerificationNotification();
        return redirect("/email/verification-notification",['message' => 'Se a reenviado el mail de verificación.', 'status' => 200]);
    })->middleware(['auth', 'throttle:1,3'])->name('verification.resend');
    
    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect('/');
    })->middleware(['auth', 'signed'])->name('verification.verify');

    Route::get('/forgot-password', function () {
        return inertia('auth/ForgotPasswordComponent');
    })->middleware('guest')->name('password.request');
    
    Route::get('/reset-password/{token}', function ($token, Request $request) {
        return inertia('auth/ResetPasswordComponent',['tokenRecive' => $token, 'emailRecive' => $request->only('email')['email']]);
    })->middleware('guest')->name('password.reset');

    Route::get('/personal', 'App\Http\Controllers\UserController@index')->middleware('auth')->name('personal.data');

    Route::get('/search-temp', function () {
        return view('layouts.master');
    });

    Route::post('/change-password', 'App\Http\Controllers\UserController@changePassword')->name('change.password');
    Route::get('/change-password', function () {
        return redirect('/personal');
    })->middleware('auth');

    Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->middleware('auth')->name('logout');

    Route::post('/change-email', 'App\Http\Controllers\UserController@changeEmail')->middleware('auth')->name('change.email');

    Route::post('/update-user','App\Http\COntrollers\UserController@update')->middleware('auth');

    Route::get('/courses/search', 'App\Http\Controllers\Cursos@searchCourses');

    Route::get('/payments',function ()
    {
        return inertia('payments/PaymentSelectorComponent');
    })->name('payments');

    Route::get('not-found', function () {
        return inertia('NotFoundComponent');
    });

    Route::post('post-test', function () {
        return back()->withErrors(['message' => 'Error al enviar el formulario']);
    });

});
