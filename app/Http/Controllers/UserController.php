<?php

namespace App\Http\Controllers;

use App\Models\Matricula;
use App\Models\MoodleCurso;
use App\Models\User;
use App\Notifications\EmailUpdatedNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Notifications\PasswordChanged;

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
        return inertia('User/ProfileComponent',['user' => User::all()]);
    }

    public function changePassword(Request $request)
    {
        if (! Hash::check($request->passwordActual, $request->user()->password)) {
            return back()->withErrors(['new_password'=>'La contraseña actual no es correcta']);
        }
        $request-> validate( [
            'new_password' => ['required', 'string', 'min:8', 'confirmed','max:24'],
        ]);
        if(strcmp($request->passwordActual, $request->new_password) == 0){
            // Current password and new password same
            return back()->withErrors(['new_password'=>'La contraseña no puede ser igual a la anterior']);
        }
        $request->user()->update(['password' => Hash::make($request->new_password)]);
        //$request->user()->notify(new PasswordChanged($request->user()));
        return redirect()->back()->with('message', 'Contraseña cambiada correctamente');
    }

    public function changeEmail(Request $request)
    {
        if (! Hash::check($request->password, Auth::user()->password)) {
            return back()->withErrors(['context'=>'email','new_email'=>'La contraseña actual no es correcta']);
        }
        
        $is_valid = $request->validate([
            'new_email' => 'required|unique:users,email|string|email',
        ]);
        if(!$is_valid){
            return back()->withErrors(['context'=>'email','new-email'=>'El correo electrónico ya está en uso']);
        }
        $request->user()->update(['email' => $request->new_email]);
        $request->user()->notify(new EmailUpdatedNotification($request->new_email));
        return redirect()->back()->with('message', 'Dirección de correo cambiado correctamente');
    }

    public function matricula($curso)
    {
        //dd(User::find(Auth::user()->id)->matriculas()->where('curso_id',2)->get());
        //return response()->json(MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id);
        return response()->json(User::find(Auth::user()->id)->cursos()->where('curso_moodle_id',MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id)->exists());
        //return response()->json(Matricula::where([['usuario_id',Auth::user()->id],['curso_id',MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id]])->exists());
    }

    public function matriculas(){
        $userID = Auth::user()->id;
        return inertia('User/CursosUserComponent',['data' => User::find($userID)->cursos()->get()]);
    }

    public function update(Request $request)
    {
        // Get current user
        $userId = Auth::id();
        $user = User::findOrFail($userId);

        // Validate the data submitted by user
        $request->validate([
            'country' => 'nullable|string|max:20',
            'region' => 'nullable|string|max:64',
            'birth_day'=> 'nullable|date|before:today',
        ]);
        
        // Fill user model
        $user->fill([
            'country' => $request->country,
            'region' => $request->region,
            'birth_day'=> $request->birth_day,
        ]);

        // Save user to database
        $user->save();
        return redirect()->back()->with('message','Su información se actualizó correctamente');
    }
}
