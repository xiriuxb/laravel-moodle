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

    Route::get('/ingreso', 'App\Http\Controllers\Auth\LoginController@index')->middleware('guest')->name('ingreso');

    Route::post('vuelogin', 'App\Http\Controllers\Auth\LoginController@vuelogin')->name('vuelogin');

    Route::get('/mis-cursos', 'App\Http\Controllers\UserController@matriculas')->name('mis-cursos');

    Route::prefix('admin')->middleware('auth', 'can:admin.home')->group(function () {
        Route::get('/testimonials', function () {
            return inertia('Admin/AdminTestimonialComponent');
        })->name('admin.home');
        Route::get('/cursos-moodle', function () {
            return inertia('Admin/AdminCoursesMoodleComponent');
        });
        Route::get('/cursos', function () {
            return inertia('Admin/AdminCoursesComponent');
        });
        Route::get('/users', function () {
            return inertia('Admin/AdminUsersComponent');
        });
        Route::get('/matriculas-pendientes', function () {
            return inertia('Admin/AdminMatriculasPendientesComponent');
        });
        Route::get('/site-images', function () {
            return inertia('Admin/AdminPublicImagesComponent');
        });
    });

    Route::post('/matricula-free', 'App\Http\Controllers\MatriculaController@storeF')->name('matricula-free');
    Route::post('/matricula', 'App\Http\Controllers\MatriculaController@storePaypalOrCreditCard')->name('matricula');
    Route::post('/matricula-deposito-transferencia', 'App\Http\Controllers\MatriculaController@storeDepositoTransferencia')->name('matricula-dep-transf');

    Route::get('/cursos/{category?}/{page?}', 'App\Http\Controllers\Cursos@index')->name('cursess');

    Route::redirect('/cursos', '/cursos/all/1');

    Route::get('/eliminar-cuenta', function () {
        return inertia('User/EliminarCuentaComponent');
    })->middleware('auth', 'can:user.deleteprofileview')->name('eliminar-cuenta');

    Route::post('/user/delete', 'App\Http\Controllers\UserController@deleteProfile')->name('user.delete');
    Route::get('/curso/{any}', 'App\Http\Controllers\MatriculaController@index')->where(['any' => '.*']);

    Route::get('/email/verification-notification', 'App\Http\Controllers\Auth\VerificationController@index')->name('verification.notice');

    Route::post('/email/verification-notification', 'App\Http\Controllers\Auth\VerificationController@verify')->name('verification.resend');

    Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect('/');
    })->middleware(['auth', 'signed'])->name('verification.verify');

    Route::get('/forgot-password', 'App\Http\Controllers\Auth\ForgotPasswordController@index')->middleware('guest')->name('password.request');

    Route::post('/forgot-password', 'App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail')->middleware('guest')->name('password.email');

    Route::get('/reset-password/{token}', 'App\Http\Controllers\Auth\ResetPasswordController@index')->middleware('guest')->name('password.reset');
    Route::post('/reset-password', 'App\Http\Controllers\Auth\ResetPasswordController@resetPassword')->name('password.update');

    Route::get('/personal', 'App\Http\Controllers\UserController@index')->middleware('auth')->name('personal.data');

    Route::post('/change-password', 'App\Http\Controllers\UserController@changePassword')->name('change.password');
    Route::get('/change-password', function () {
        return redirect('/personal');
    })->middleware('auth');

    Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logout')->middleware('auth')->name('logout');

    Route::post('/change-email', 'App\Http\Controllers\UserController@changeEmail')->middleware('auth')->name('change.email');

    Route::post('/update-user', 'App\Http\Controllers\UserController@update')->middleware('auth');

    Route::get('/courses/search', 'App\Http\Controllers\Cursos@searchCourses');

    Route::get('/payments', function () {
        return inertia('payments/PaymentSelectorComponent');
    })->middleware('auth')->name('payments');

    Route::get('not-found', function () {
        return inertia('NotFoundComponent');
    });

    Route::get('/pago-deposito-transferencia/{curso_id}', 'App\Http\Controllers\PaymentMethodsController@depositoTransferenciaPaymentData')->where(['curso_id' => '.*'])->middleware('auth')->name('deposito-transferencia');
});
