<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Traits\MoodleServicesTrait;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */
    use MoodleServicesTrait;

    public function __construct()
    {
        $this->middleware('guest');
    }

    function index($token, Request $request) {
        return inertia('auth/ResetPasswordComponent', ['tokenRecive' => $token, 'emailRecive' => $request->only('email')['email']]);
    }

    public function resetPassword(Request $request)
    {
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
        if(Password::PASSWORD_RESET) {
            $userid= $this->getMoodleUserId($request->only('email')['email'],'email');
            $this->updateMoodlePassword($request->only('password')['password'], $userid);
        }
    
        return $status === Password::PASSWORD_RESET
                    ? redirect()->back()->with('message', __($status))
                    : redirect()->back()->withErrors(['email'=>__($status)]);
    }   

    private function updateMoodlePassword(string $newPassword, string $username){
        $client = new \GuzzleHttp\Client();
        $request = $client->request('GET', config('app.moodle_ws_url'), [
            'query' => [
                'wstoken' => (string)config('app.moodle_ws_token'),
                'wsfunction' => 'core_user_update_users',
                'users[0][id]' => $username,
                'users[0][password]'=>$newPassword,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
    }
}
