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
    // your routes here
Route::group(['middleware'=>['api']],function(){
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::prefix('admin')->group(function(){
        Route::get('/cursos-moodle', 'App\Http\Controllers\admin\AdminMoodleCursosController@index');
        Route::get('/cursos-local', 'App\Http\Controllers\admin\AdminLocalCursosController@index');
        Route::post('/cursos-local/destacado', 'App\Http\Controllers\admin\AdminLocalCursosController@setDestacado');
        Route::post('/cursos-local/importar', 'App\Http\Controllers\admin\AdminLocalCursosController@importFromMoodle');
        Route::get('/users', 'App\Http\Controllers\admin\AdminUsersController@index');
        Route::post('/users/change-role', 'App\Http\Controllers\admin\AdminUsersController@changeRole');
        Route::get('/users/get-user-role', 'App\Http\Controllers\admin\AdminUsersController@getUserRole');
        Route::get('/roles', 'App\Http\Controllers\admin\RolesController@index');
        Route::post('/images/favicon', 'App\Http\Controllers\admin\AdminSiteImagesController@storeIcon');
        Route::post('/images', 'App\Http\Controllers\admin\AdminSiteImagesController@storeImage');
        Route::get('/site-config', 'App\Http\Controllers\admin\SiteConfigController@index');
        Route::post('/site-config', 'App\Http\Controllers\admin\SiteConfigController@update');
        Route::post('/site-config/update', 'App\Http\Controllers\admin\SiteConfigController@updateConfig');
        Route::get('/matriculas/pendientes', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@index');
        Route::put('/matriculas/pendientes', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@updatePending');
        Route::get('/matriculas/pendientes/imagen/{id}', 'App\Http\Controllers\PagoController@getImage');
        Route::get('/matriculas/usuario/{username}', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@indexByUser');
        Route::put('/matriculas', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@update');
        Route::get('/matriculas/estados', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@getEstados');
    });
    
    Route::post('register', 'App\Http\Controllers\Auth\RegisterController@create')->name('register')->middleware('guest');
    
    Route::apiResource('testimonials', 'App\Http\Controllers\AdminTestimonioController')->middleware('auth');
    
    Route::get('visibleComments', 'App\Http\Controllers\AdminTestimonioController@visibles')->name('visibles');
    
    Route::get('curse/{id}', 'App\Http\Controllers\Cursos@show');
    
    Route::get('categorias', 'App\Http\Controllers\CategoriaCursoController@index')->name('categorias');
    
    Route::apiResource('matricula', 'App\Http\Controllers\MatriculaController')->middleware(['auth','verified']);
    
    Route::apiResource('users', 'App\Http\Controllers\UserController');

    Route::get('user/matricula/{curso}', 'App\Http\Controllers\UserController@matricula')->middleware(['auth']);

    Route::get('user/matriculas', 'App\Http\Controllers\UserController@matriculas');

    Route::get('cursos-local/destacados', 'App\Http\Controllers\CursosLocal@destacados');

    Route::get('payment-methods', 'App\Http\Controllers\PaymentMethodsController@index');

    Route::get('paypal-data', 'App\Http\Controllers\PaymentMethodsController@getPaypalData');

    Route::get('/courses/search', 'App\Http\Controllers\Cursos@searchCourses');

});

    