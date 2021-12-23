<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        
    }
    /**
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    public function index()
    {
        // if(Auth::user()){
        //     return response()->json(['status' => 'ok'], 200);
        // }else{
        //     return response()->json(['status' => 'no']);
        // }
    }
}
