<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:admrole.getroles', ['only' => ['index']]);
    }

    public function index(Request $request)
    {
        if (auth()->user()['roles'][0]['name']=='su_admin') {
            return response()->json(Role::select('id','name')->get(), 200);
        } else {
            return response()->json(Role::where([['id','<>',1],['id','<>',2]])->select('id','name')->get(), 200);
        }
    }
}
