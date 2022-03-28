<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Inertia\Inertia;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    // public function render($request, Throwable $e)
    // {
    //     $response = parent::render($request, $e);

    //    if ($response->getStatusCode() === 419) {
    //         return back()->with([
    //             'message' => 'The page expired, please try again.',
    //         ]);
    //     } else if ($response->getStatusCode() === 401) {
    //         return redirect('/ingresar')->withErrors([
    //             'message' => 'Loggeese You are not authorized to access this page.',
    //         ]);
    //     } else if ($response->getStatusCode() === 403) {
    //         return redirect('/')->withErrors([
    //             'message' => 'You are not authorized to access this page.',
    //         ]);
    //     } else if ($response->getStatusCode() === 404) {
    //         return redirect('/not-found')->withErrors([
    //             'message' => 'The page you are looking for could not be found.',
    //         ]);
    //     } else if ($response->getStatusCode() === 500) {
    //         return redirect('/')->withErrors([
    //             'message' => 'Something went wrong on the server.',
    //         ]);
    //     } else if ($response->getStatusCode() ===429){
    //         return back()->withErrors([
    //             'message' => 'Demasiados intentos, por favor intente más tarde.',
    //         ]);
    //     } else if ($response->getStatusCode() ===500) {
    //         return back()->withErrors([
    //             'message' => 'Ocurrió un error inesperado.',
    //         ]);
    //     }

    //     return $response;
    // }
}
