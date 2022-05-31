<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */
    public function __construct()
    {
        $this->middleware('guest');
        $this->middleware('throttle:1,6')->only('sendResetLinkEmail');
    }

    use SendsPasswordResetEmails;

    function index()
    {
        return inertia('auth/ForgotPasswordComponent');
    }

    function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);
        $status = Password::sendResetLink(
            $request->only('email')
        );
        return $status === Password::RESET_LINK_SENT
            ? redirect()->back()->with('message', __($status))
            : redirect()->back()->withErrors(__($status));
    }
}
