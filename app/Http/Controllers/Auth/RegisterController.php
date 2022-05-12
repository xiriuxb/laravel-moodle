<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use GuzzleHttp\Psr7\Request as Psr7Request;
use Psr\Http\Message\ResponseInterface;
use GuzzleHttp\Exception\RequestException;

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
    protected function setUsernameAttribute($name, $lastname)
    {
        $firstName = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE',strtolower($name) );
        $lastName = iconv('UTF-8', 'ISO-8859-1//TRANSLIT//IGNORE',strtolower($lastname) );
        $username =  iconv('ISO-8859-1','UTF-8', $firstName[0] . $lastName);
        $users_same_username = User::where('username','LIKE',$username.'%')->count();
        if($users_same_username==0){
            return $username;
        }
        return $username.$users_same_username;
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
        $username = $this->setUsernameAttribute($request->name,$request->last_name);
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
            'username'=> $username,
        ])->assignRole('user');
        event(new Registered($user));
        $this->guard()->login($user);
        $this->createMoodleUser($request,$username);
        return Redirect::route('verification.notice');
    }

    private function createMoodleUser(Request $request, string $username){
        $client = new \GuzzleHttp\Client();
        $guzzleRequest = $client->request('GET', env('MOODLE_WS_URL'), [
            'query' => [
                'wstoken' => (string)env('MOODLE_WS_TOKEN'),
                'wsfunction' => 'core_user_create_users',
                'users[0][username]'=>$username,
                'users[0][password]'=> $request->password,
                'users[0][firstname]'=>$request->name,
                'users[0][lastname]'=>$request->last_name,
                'users[0][email]'=> $request->email,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
    }
}
