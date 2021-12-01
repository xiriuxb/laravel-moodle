<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Validator;

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
        $this->middleware('guest')->except('logout');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);
    }

    public function vuelogin(Request $request)
    {
        // if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
        //   $user = Auth::user();
        //   return response()->json([
        //     'status'   => 'success',
        //   ]); 
        // } else { 
        //   return response()->json([
        //     'status' => 'error',
        //     'user'   => response()
        //   ]); 
        // } 
        // return response()->json(
        //     $request -> email, 200
        // );
        $credentials = [
          'email' => $request->email,
          'password' => $request->password,
      ];

      if (Auth::attempt($credentials)) {
          $success = true;
          $message = 'User login successfully';
      } else {
          $success = false;
          $message = 'Unauthorised';
      }

      // response
      $response = [
          'success' => $success,
          'message' => $message,
      ];
      return response()->json($response);
    }
}
