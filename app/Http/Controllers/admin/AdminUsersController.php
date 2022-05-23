<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Traits\MoodleServicesTrait;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use phpDocumentor\Reflection\Types\Boolean;

class AdminUsersController extends Controller
{
    use MoodleServicesTrait;
    private $su_admin_name='su_admin';
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:admuser.getuserrole', ['only' => ['getUserRole']]);
        $this->middleware('can:admuser.suspend', ['only' => ['setUserSuspended']]);
        $this->middleware('can:admuser.unsuspend', ['only' => ['setUserUnsuspended']]);
        $this->middleware('can:admuser.changerole', ['only' => ['changeRole']]);
        $this->middleware('can:admuser.getusers', ['only' => ['index']]);
    }

    public function index(Request $request)
    {
        $role = $this->idToRole($request->role);
        $deleted = $request->deleted=='true'?true:false;
        return response()->json(
            
            User::whereHas('roles',function ($query) use ($role) {
                //filtro solo por el rol que selecciono
                if(auth()->user()['roles'][0]['name']!=$this->su_admin_name)
                    $query->where([['name','<>',$this->su_admin_name]]);
                if($role)
                    $query->where('name','=',$role);
                }
            )->orderBy('name')->where([[function($query) use ($request) {
                $query->where('name', 'LIKE', '%' . $request->keyword . '%')
                    ->orWhere('last_name', 'LIKE', '%' . $request->keyword . '%')
                    ->orWhere('email', 'LIKE', '%' . $request->keyword . '%');
                }
            ],['deleted',$deleted]])
            ->paginate(10), 200);
    }

    private function idToRole($role)
    {
        switch ($role) {
            case 0 :
                return 'su_admin';
            case 2:
                return 'admin';
            case 3:
                return 'user';
            case 4:
                return 'suspended';	
            default:
                return null;
        }
    }

    public function changeRole(Request $request){
        if (! Hash::check(request('password'), $request->user()->password)) {
            return response( ['message' => 'La informacion es inválida'], 422);
        }
        if(request('role')== ''){
            return response( ['message' => 'La informacion es inválida'], 422);
        }

        $user = User::where('username','=',request('id'))->firstOrFail();
        if(($user->email_verified_at == null) && (request('role') != 'suspended' and $user->getRoleNames()[0] !='suspended')){
                return response()->json(['message' => ' El usuario debe verificar su email primero'], 422);
        }
        if($user->getRoleNames()[0] =='admin' && User::role('admin')->count() == 1){
            return response()->json(['message' => 'No puede quedarse sin administradores'], 422);
        }
        if($user->id == $request->user()->id){
            return response()->json(['message' => ' No puedes cambiar tu propio rol'], 422);
        }
        if(request('role') == $user->getRoleNames()[0]){
            return response()->json(['message' => ' El usuario ya tiene ese rol'], 422);
        }
        try {
            if(request('role') == 'suspended'){
                $this->suspendOnMoodle($user->username,1);
            }elseif(request('role') != 'suspended' && $user->getRoleNames()[0] == 'suspended'){
                $this->suspendOnMoodle($user->username,0);
            }
            $user->syncRoles(request('role'));
            return response()->json(['message' => 'Se ha cambiado el rol del usuario', 'status' => 200]);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Ocurrió un error. Rol no definido'], 422);
        }
    }

    public function getUserRole( ){
        $user = User::where('username','=',request('id'))->firstOrFail();
        return response()->json(['role' => $user->roles->first()->name, 'status' => 200]);
    }
    
    public function suspendOnMoodle(string $userName, int $suspended ){
        $userMoodleId = $this->getUserId($userName);
        
        $client = new \GuzzleHttp\Client();
        try {
            $res = $client->request('GET', env('MOODLE_WS_URL'), [
                'query' => [
                    'wstoken' => (string)env('MOODLE_WS_TOKEN'),
                    'wsfunction' => 'core_user_update_users',
                    'users[0][id]' => $userMoodleId,
                    'users[0][suspended]' => $suspended,
                    'moodlewsrestformat' => 'json',
                ],'verify'=> false
            ]);
            $jsonResponse = json_decode($res->getBody());
            //dd('Entramos porque es suspended'.$userMoodleId.' '.$suspended.' '.$jsonResponse);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Ocurrió un error. No se pudo verificar el usuario'], 200);
        }
        return response()->json(['message' => 'El usuario ha sido suspendido', 'status' => 200]);
    }
    
}
