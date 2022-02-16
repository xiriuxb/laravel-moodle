<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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
    // your routes here
Route::group(['middleware'=>['api']],function(){
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });
    
    
    Route::post('register', 'App\Http\Controllers\Auth\RegisterController@create')->name('register')->middleware('guest');
    
    Route::get('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend')->name('verification.resend');
    
    Route::apiResource('testimonials', 'App\Http\Controllers\AdminTestimonioController');
    
    Route::get('visibleComments', 'App\Http\Controllers\AdminTestimonioController@visibles')->name('visibles');
    
    Route::get('curse/{id}', 'App\Http\Controllers\Cursos@show');
    
    Route::get('curses/{categoria?}/{page?}', 'App\Http\Controllers\Cursos@index')->name('curses.index');
    Route::get('cursess/{categoria?}/{page?}', 'App\Http\Controllers\Cursos@index2');
    
    Route::get('cursesh', 'App\Http\Controllers\Cursos@search')->name('curses.search');
    
    Route::get('categorias', 'App\Http\Controllers\CategoriaCursoController@index')->name('categorias');

    Route::get('categorias-test', 'App\Http\Controllers\CategoriaCursoController@indexTest');
    
    Route::post('/email/verification-notification', function (Request $request) {
        $request->user()->sendEmailVerificationNotification();
        return response()->json(['message' => 'Se a reenviado el mail de verificación.', 'status' => 200]);
    })->middleware(['auth', 'throttle:6,1'])->name('verification.send');
    
    Route::apiResource('matricula', 'App\Http\Controllers\MatriculaController')->middleware(['auth','verified']);
    
    Route::apiResource('users', 'App\Http\Controllers\UserController');

    Route::post('/forgot-password', function (Request $request) {
        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
                    ? response()->json(['status' => __($status)])
                    : response()->json(['email' => __($status)]);
    })->middleware('guest')->name('password.email');

    Route::post('/reset-password', function (Request $request) {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);
    
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));
    
                $user->save();
    
                event(new PasswordReset($user));
            }
        );
    
        return $status === Password::PASSWORD_RESET
                    ? response()->json(['status'=> __($status)])
                    : response()->json(['errors'=>['email' => __($status)]],422);
    })->middleware('guest')->name('password.update');

    Route::get('user/matricula/{curso}', 'App\Http\Controllers\UserController@matricula')->middleware(['auth','verified']);

    Route::get('user/matriculas', 'App\Http\Controllers\UserController@matriculas');

    //    Route::get('user/role', 'App\Http\Controllers\UserController@role');

    Route::get('cursos-local', 'App\Http\Controllers\CursosLocal@index');

    Route::post('cursos-local/destacado', 'App\Http\Controllers\CursosLocal@setDestacado');

    Route::get('cursos-local/destacados', 'App\Http\Controllers\CursosLocal@destacados');
});

    