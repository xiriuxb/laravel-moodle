<?php

namespace App\Http\Controllers;
use App\Models\User;


use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    public function index()
    {
        return response()->json(['status' => 'ok', 'data' => 
            User::select('id','name','last_name','email','username','email_verified_at')->get()], 200);
    }
}
