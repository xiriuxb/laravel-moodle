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
        Route::get('/cursos-moodle', 'App\Http\Controllers\admin\AdminMoodleCursosController@index')->name('admin.cursos-moodle.index');
        Route::get('/cursos-local', 'App\Http\Controllers\admin\AdminLocalCursosController@index')->name('admin.cursos.index');
        Route::post('/cursos-local/destacado', 'App\Http\Controllers\admin\AdminLocalCursosController@setDestacado')->name('admin.set-destacado');
        Route::post('/cursos-local/importar', 'App\Http\Controllers\admin\AdminLocalCursosController@importFromMoodle')->name('admin.cursos.importar');
        Route::get('/users', 'App\Http\Controllers\admin\AdminUsersController@index')->name('admin.user.index');
        Route::post('/users/change-role', 'App\Http\Controllers\admin\AdminUsersController@changeRole')->name('admin.user.change-role');
        Route::get('/users/get-user-role', 'App\Http\Controllers\admin\AdminUsersController@getUserRole')->name('admin.user.role.get');
        Route::get('/roles', 'App\Http\Controllers\admin\RolesController@index')->name('admin.user.roles');
        Route::post('/images/favicon', 'App\Http\Controllers\admin\AdminSiteImagesController@storeIcon')->name('admin.images.favicon');
        Route::post('/images', 'App\Http\Controllers\admin\AdminSiteImagesController@storeImage')->name('admin.images');
        Route::get('/site-config', 'App\Http\Controllers\admin\SiteConfigController@index')->name('admin.site.index');
        Route::post('/site-config', 'App\Http\Controllers\admin\SiteConfigController@update')->name('admin.site.update');
        Route::post('/site-config/update', 'App\Http\Controllers\admin\SiteConfigController@updateConfig')->name('admin.site.update-config');
        Route::get('/matriculas/pendientes', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@index')->name('admin.matricula-pendiente.index');
        Route::put('/matriculas/pendientes', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@updatePending')->name('admin.matricula-pendiente.update');
        Route::get('/matriculas/pendientes/imagen/{id}', 'App\Http\Controllers\PagoController@getImage')->name('admin.matricula.imagen');
        Route::get('/matriculas/usuario/{username}', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@indexByUser')->name('admin.matriculas.usuario.index');
        Route::put('/matriculas', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@update')->name('admin.matriculas.update');
        Route::get('/matriculas/estados', 'App\Http\Controllers\admin\AdminMatriculasPendientesController@getEstados')->name('admin.matriculas.estados');
        Route::apiResource('/testimonials', 'App\Http\Controllers\admin\AdminTestimonioController');
    });
    
    Route::get('/testimonials', 'App\Http\Controllers\TestimonioController@visibles')->name('testimonios.visibles');
    
    Route::get('categorias', 'App\Http\Controllers\CategoriaCursoController@index')->name('categorias');

    Route::get('cursos-local/destacados', 'App\Http\Controllers\CursosLocal@destacados')->name('cursos.destacados');

    Route::get('paypal-data', 'App\Http\Controllers\PaymentMethodsController@getPaypalData')->name('paypal-data');

    Route::get('/courses/search', 'App\Http\Controllers\Cursos@searchCourses')->name('curso.busqueda');

});

    