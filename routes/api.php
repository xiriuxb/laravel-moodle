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
    
    Route::prefix('admin')->group(function(){
        Route::get('/admin-cursos-moodle', 'App\Http\Controllers\admin\AdminMoodleCursosController@index');
        Route::get('/cursos-local', 'App\Http\Controllers\admin\AdminLocalCursosController@index');
        Route::post('/cursos-local/destacado', 'App\Http\Controllers\admin\AdminLocalCursosController@setDestacado');
        Route::post('/cursos-local/importar', 'App\Http\Controllers\admin\AdminLocalCursosController@importFromMoodle');
        Route::get('/users', 'App\Http\Controllers\admin\AdminUsersController@index');
        Route::post('/users/change-role', 'App\Http\Controllers\admin\AdminUsersController@changeRole');
        Route::get('/users/get-user-role', 'App\Http\Controllers\admin\AdminUsersController@getUserRole');
        Route::get('/roles', 'App\Http\Controllers\admin\RolesController@index');
        Route::get('/matriculas-pendientes', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@index');
        Route::get('/get-matricula-pendiente-pago/{id}', 'App\Http\Controllers\PagoController@getImage');
        Route::put('/matriculas-pendientes/{id}/{estado}', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@update');
    });
    
    Route::post('register', 'App\Http\Controllers\Auth\RegisterController@create')->name('register')->middleware('guest');
    
    // Route::get('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend')->name('verification.resend');
    
    Route::apiResource('testimonials', 'App\Http\Controllers\AdminTestimonioController')->middleware('auth');
    
    Route::get('visibleComments', 'App\Http\Controllers\AdminTestimonioController@visibles')->name('visibles');
    
    Route::get('curse/{id}', 'App\Http\Controllers\Cursos@show');
    
    //Route::get('curses/{categoria?}/{page?}', 'App\Http\Controllers\Cursos@index')->name('curses.index');
    Route::get('cursess/{categoria?}/{page?}', 'App\Http\Controllers\Cursos@index2');
    
    Route::get('cursesh', 'App\Http\Controllers\Cursos@search')->name('curses.search');
    
    Route::get('categorias', 'App\Http\Controllers\CategoriaCursoController@index')->name('categorias');
    
    
    
    Route::apiResource('matricula', 'App\Http\Controllers\MatriculaController')->middleware(['auth','verified']);
    
    Route::apiResource('users', 'App\Http\Controllers\UserController');

    Route::post('/forgot-password', function (Request $request) {
        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
                    ? redirect()->back()->with('message',__($status))//response()->json(['status' => __($status)])
                    : redirect()->back()->withErrors(__($status));
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
                // event(new PasswordReset($user));
            }
        );
    
        return $status === Password::PASSWORD_RESET
                    ? redirect()->back()->with('message', __($status))
                    : redirect()->back()->withErrors(['email'=>__($status)]);
    })->middleware('guest')->name('password.update');

    Route::get('user/matricula/{curso}', 'App\Http\Controllers\UserController@matricula')->middleware(['auth']);

    Route::get('user/matriculas', 'App\Http\Controllers\UserController@matriculas');

    //    Route::get('user/role', 'App\Http\Controllers\UserController@role');

    Route::get('cursos-local/destacados', 'App\Http\Controllers\CursosLocal@destacados');

    Route::get('payment-methods', 'App\Http\Controllers\PaymentMethodsController@index');

    Route::get('paypal-data', 'App\Http\Controllers\PaymentMethodsController@getPaypalData');

});

    