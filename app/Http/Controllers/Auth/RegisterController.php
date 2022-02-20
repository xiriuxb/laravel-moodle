<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;
    //crea el username. Ejemplo: John Doe -> jdoe, si hay mas con ese nombre se crean como jdoe1, jdoe2, etc.
    protected static function setUsernameAttribute($name, $lastname)
    {
        $firstName = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE',strtolower($name) );
        $lastName = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE',strtolower($lastname) );
        $username =  iconv('ISO-8859-1','UTF-8', $firstName[0] . $lastName);
        $i = 0;
        while(User::whereUsername($username)->exists())
        {
            $i++;
            $username = $username . $i;
        }
        return$username;
    }

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(Request $request)
    {
        $request-> validate( [
            'name' => ['required', 'string', 'max:16', 'alpha'],
            'last_name' => ['required', 'string', 'max:16','alpha'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed','max:24'],
        ]);
        $user = User::create([
            'name' => $request->name,
            'last_name'=>$request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'username'=> RegisterController::setUsernameAttribute($request->name,$request->last_name),
        ])->assignRole('user');
        event(new Registered($user));
        $this->guard()->login($user);
        return route('verification.notice');
    }
}
