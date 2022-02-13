<?php

namespace App\Http\Controllers;

use App\Models\Matricula;
use App\Models\MoodleCurso;
use App\Models\User;
use App\Notifications\EmailUpdatedNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Notifications\PasswordChanged;
use Illuminate\Database\Eloquent\Model;


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
        return response()->json(['status' => 'ok', 'data' => User::with('matriculas')->get()], 200);
    }

    public function changePassword(Request $request)
    {
        if (! Hash::check($request->passwordActual, $request->user()->password)) {
            return response( ['message' => 'La informacion es inválida', 
            'errors' => ['new_password'=>['La contraseña actual no es correcta']]], 422);
        }
        $request-> validate( [
            'new_password' => ['required', 'string', 'min:8', 'confirmed','max:24'],
        ]);
        if(strcmp($request->passwordActual, $request->new_password) == 0){
            // Current password and new password same
            return response( ['message' => 'La informacion es inválida', 
            'errors' => ['new_password'=>['La contraseña no puede ser igual a la anterior']]], 422);
        }
        $request->user()->update(['password' => Hash::make($request->new_password)]);
        $request->user()->notify(new PasswordChanged($request->user()));
        return response( ['message' => 'Su contraseña ha sido actualizada'], 200);
    }

    public function changeEmail(Request $request)
    {
        if (! Hash::check($request->password, Auth::user()->password)) {
            return response( ['message' => 'La informacion es inválida', 
            'errors' => ['new_email'=>['La contraseña actual no es correcta']]], 422);
        }
        
        $request->validate([
            'new_email' => 'required|unique:users,email|string|email',
        ]);
        $request->user()->notify(new EmailUpdatedNotification($request->new_email));
        $request->user()->update(['email' => $request->new_email]);
        $request->user()->notify(new EmailUpdatedNotification($request->new_email));
        return response( ['message' => 'Emial actualizado'], 200);
    }

    public function matriculas($curso)
    {
        //dd(User::find(Auth::user()->id)->matriculas()->where('curso_id',2)->get());
        //return response()->json(MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id);
        return response()->json(User::find(Auth::user()->id)->matriculas()->where('curso_id',MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id)->exists());
        //return response()->json(Matricula::where([['usuario_id',Auth::user()->id],['curso_id',MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id]])->exists());
    }

    public function matricula($curso){
        return response()->json(['status' => 'ok', 'data' => Auth::user()->matriculas], 200);
    }
}
