<?php

namespace App\Http\Controllers;

use App\Http\Traits\MoodleServicesTrait;
use App\Models\Matricula;
use App\Models\MoodleCurso;
use App\Models\User;
use App\Notifications\EmailUpdatedNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Notifications\PasswordChanged;
use Illuminate\Http\Request;
use Psy\Command\WhereamiCommand;

class UserController extends Controller
{
    use MoodleServicesTrait;
    public function __construct()
    {
        $this->middleware('can:user.updates',['except' => ['index','matriculas']]);
        $this->middleware('can:user.profiledata',['only' => ['index','matriculas']]);
    }
    /**
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    public function index()
    {
        return inertia('User/ProfileComponent',['user' => Auth::user()]);
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
        $request->user()->notify(new PasswordChanged($request->user()));
        try {
            $this->updateMoodlePassword($request->new_password,$request->user()->username);
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors(['new_password'=>'Ocurrió un error']);
        }
        return redirect()->back()->with('message', 'Contraseña cambiada correctamente');
    }

    protected function updateMoodlePassword(string $newPassword, string $username){
        $userID = $this->getMoodleUserId($username);
        $client = new \GuzzleHttp\Client();
        $request = $client->request('GET', config('app.moodle_ws_url'), [
            'query' => [
                'wstoken' => (string)config('app.moodle_ws_token'),
                'wsfunction' => 'core_user_update_users',
                'users[0][id]' => $userID,
                'users[0][password]'=>$newPassword,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
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
            return back()->withErrors(['context'=>'email','new_email'=>'El correo electrónico ya está en uso']);
        }
        $request->user()->update(['email' => $request->new_email]);
        try {
            $this->updateMoodleEmail($request->new_email,$request->user()->username);
        } catch (\Throwable $th) {
            return redirect()->back()->withErrors(['new_email'=>'Ocurrió un error']);
        }
        $request->user()->notify(new EmailUpdatedNotification($request->new_email));
        return redirect()->back()->with('message', 'Dirección de correo cambiado correctamente');
    }
    
    protected function updateMoodleEmail(string $newEmail, string $username){
        $userID = $this->getMoodleUserId($username);
        $client = new \GuzzleHttp\Client();
        $request = $client->request('POST', config('app.moodle_ws_url'), [
            'query' => [
                'wstoken' => (string)config('app.moodle_ws_token'),
                'wsfunction' => 'core_user_update_users',
                'users[0][id]' => $userID,
                'users[0][email]'=>$newEmail,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
    }

    public function matricula($curso)
    {
        //dd(User::find(Auth::user()->id)->matriculas()->where('curso_id',2)->get());
        //return response()->json(MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id);
        return response()->json(User::find(Auth::user()->id)->cursos()->where('curso_moodle_id',MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id)->exists());
        //return response()->json(Matricula::where([['usuario_id',Auth::user()->id],['curso_id',MoodleCurso::select('id')->where('shortname','=',$curso)->get()[0]->id]])->exists());
    }

    public function matriculas(Request $request){
        $userID = Auth::user()->id;
        $b = request('b');
        $matriculas = Matricula::wherehas('cursos',function($query) use ($b){
            $query->where('fullname','LIKE','%'.$b.'%');
        })->with('cursos:id,category,fullname,shortname')->where('usuario_id',$userID)->select('curso_id','estado_matricula_id','pago_id')->paginate(10);
        return inertia('User/CursosUserComponent',['data' => $matriculas]);
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

    public function deleteProfile(Request $request){
        $request -> validate([
            'password' => 'required|string|min:8',
        ]);
        if (! Hash::check($request->password, Auth::user()->password)) {
            return back()->withErrors(['password'=>'La contraseña no es correcta']);
        } else{
            try {
                $this->deleteUserFromMoodle($this->getMoodleSUserId($request->user()->username));
            } catch (\Throwable $th) {
            }
            $request->user()->update(['deleted' => true]);
                $request->user()->update(['email' => $request->user()->email.'_'.'deleted_'.time(),'password' => '$deleted_'.time()]);
                Auth::logout();
            return redirect()->route('home')->with('message','Su perfil se eliminó correctamente');
        }
    }

    private function deleteUserFromMoodle(int $userID){
        $client = new \GuzzleHttp\Client();
        $request = $client->request('GET', config('app.moodle_ws_url'), [
            'query' => [
                'wstoken' => (string)config('app.moodle_ws_token'),
                'wsfunction' => 'core_user_delete_users',
                'userids[0]' => $userID,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
    }
}
