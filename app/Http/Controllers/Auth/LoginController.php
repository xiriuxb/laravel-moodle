<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest',['except'=>['logout']]);
        $this->middleware('throttle:5,3')->only('vuelogin');
    }

    public function index()
    {
        return inertia('views/LoginView');
    }

    public function vuelogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($credentials, $request->remember)) {
            //$request->session()->regenerate();
            return redirect()->intended('/');
        } else {
            $message = 'Email o password incorrecto(s)';
            return back()->withErrors([
                'message' => $message,
            ]);
        }

    }

    public function logout(Request $request)
    {
        Auth::logout();
        //$request->session()->invalidate();
        //$request->session()->regenerateToken();
        return redirect('/');
    }
}
