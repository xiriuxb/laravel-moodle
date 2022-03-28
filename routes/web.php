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

    Route::post('vuelogin', 'App\Http\Controllers\Auth\LoginController@vuelogin')->name('vuelogin');
    
    Route::get('/', function () {
        return inertia('HomeComponent');
    })->name('home');

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

    
    
    Route::get('/admin/{any}', function(){
        return view('layouts.master');
    })->middleware('can:admin.home')
    ->name('admi')
    ->where(['any'=>'testimonios|cursos|usuarios|cursos-moodle']);
    
    Route::get('/cursos/{category?}/{page?}', 'App\Http\Controllers\Cursos@index')->name('cursess');
    
    // Route::get('/cursos/{category}', function ($category) {
    //     return redirect('/cursos/'.$category.'/1');
    // })->where(['category'=>'.*']);
    
    Route::get('/ingreso','App\Http\Controllers\Auth\LoginController@index')->middleware('guest')->name('ingreso');
    
    Route::get('/curso/{any}', 'App\Http\Controllers\Cursos@show')->where(['any' => '.*']);
    
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
        return view('layouts.master');
    })->middleware('guest')->name('password.request');
    
    Route::get('/reset-password/{token}', function ($token) {
        return view('layouts.master', ['token' => $token]);
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

    Route::get('/payments/{id}',function ()
    {
        return view('layouts.master');
    });

    Route::get('not-found', function () {
        return inertia('NotFoundComponent');
    });

    Route::post('post-test', function () {
        return back()->withErrors(['message' => 'Error al enviar el formulario']);
    });

    Route::get('create-transaction', [PayPalController::class, 'createTransaction'])->name('createTransaction');
Route::get('process-transaction', [PayPalController::class, 'processTransaction'])->name('processTransaction');
Route::get('success-transaction', [PayPalController::class, 'successTransaction'])->name('successTransaction');
Route::get('cancel-transaction', [PayPalController::class, 'cancelTransaction'])->name('cancelTransaction');
});
