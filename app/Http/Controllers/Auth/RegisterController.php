<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
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
    protected static function setUsernameAttribute($name, $lastName)
    {
        $firstName = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE',strtolower($name) );
        $lastName = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE',strtolower($lastName) );
        $username = $firstName[0] . $lastName;
        $i = 0;
        while(User::whereUsername($username)->exists())
        {
            $i++;
            $username = $firstName[0] . $lastName . $i;
        }
        return $username;
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
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:16', 'alpha'],
            'last_name' => ['required', 'string', 'max:16','alpha'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed','max:24'],
            /*'country' => ['required', 'string', 'max:20'],
            'region' => ['required', 'string', 'max:64'],
            'phone_number'=>['nullable','string','size:8','regex:/[(0-9)]{8}/'],
            'birth_day'=>['nullable','date','before:today'],*/
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'last_name'=>$data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            /*'country'=> $data['country'],
            'region'=> $data['region'],*/
            'username'=> RegisterController::setUsernameAttribute($data['name'],$data['last_name']),
            /*'phone_number'=>$data['phone_number'],
            'birth_day'=>$data['birth_day']*/
        ])->assignRole('user');
        event(new Registered($data));
    }

    
}
