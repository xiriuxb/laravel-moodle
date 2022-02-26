<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class AdminUsersController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }

    public function index(Request $request)
    {
        $role = $this->idToRole($request->role);
        return response()->json( 
            User::whereHas('roles',function ($query) use ($role) {
                if($role)
                    $query->where('name',$role);
            })->orderBy('name')->where(function($query) use ($request) {
                $query->where('name', 'LIKE', '%' . $request->keyword . '%')
                    ->orWhere('last_name', 'LIKE', '%' . $request->keyword . '%');
            })
            ->paginate(10), 200);
    }

    private function idToRole($role)
    {
        switch ($role) {
            case 0 :
                return null;
            case 2:
                return 'admin';
            case 3:
                return 'user';	
            default:
                return 'user';
        }
    }

    private function roleToId($role)
    {
        switch ($role) {
            case 'admin':
                return 2;
            case 'user':
                return 3;
            default:
                return 0;
        }
    }

    public function changeRole(Request $request){

        if (! Hash::check($request->password, $request->user()->password)) {
            return response( ['message' => 'La informacion es inválida'], 422);
        }
        if($this->idToRole($request->role)== null){
            return response( ['message' => 'La informacion es inválida'], 422);
        }
        $user = User::where('username','=',request('id'))->firstOrFail();
        if($user->email_verified_at == null){
                return response()->json(['message' => ' El usuario debe verificar su email primero'], 422);
            }
        if($user->getRoleNames()[0] =='admin' && User::role('admin')->count() == 1){
            return response()->json(['message' => 'No puede quedarse sin administradores'], 422);
        }
        if($user->id == $request->user()->id){
            return response()->json(['message' => ' No puedes cambiar tu propio rol'], 422);
        }
        if($request->role == $this->roleToId($user->getRoleNames()[0])){
            return response()->json(['message' => ' El usuario ya tiene ese rol'], 422);
        }
        $user->syncRoles([$this->idToRole($request->role)]);
        return response()->json(['message' => 'Se ha cambiado el rol del usuario', 'status' => 200]);
    }

    public function getUserRole( ){
        $user = User::where('username','=',request('id'))->firstOrFail();
        return response()->json(['role' => $this->roleToId($user->roles->first()->name), 'status' => 200]);
    }
}
