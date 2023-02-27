<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\MoodleServicesTrait;
use Illuminate\Http\Request;
use App\Models\Curso;
use App\Models\MoodleCurso;
use Carbon\Carbon;

class AdminLocalCursosController extends Controller
{
    use MoodleServicesTrait;
    public function __construct()
    {
        $this->middleware('can:cursoslocal.all');
    }

    public function index(Request $request)
    {
        return response()->json(
            Curso::where([
                ['fullname', 'LIKE', '%' . $request->search . '%']
            ])->select('shortname', 'fullname', 'category', 'destacado')->paginate(10),
            200
        );
    }

    public function importFromMoodle(Request $request)
    {
        $course = $this->getCourseFromMoodle($request->shortname);
        $curso = Curso::updateOrCreate(
            ['shortname' => $request->shortname],
            ['moodle_id' => $course->id, 'fullname' => $course->fullname, 'shortname' => $course->shortname, 'category' => $course->categoryname, 'destacado' => false]
        );
        return $curso->save();
    }

    public function setDestacado(Request $request)
    {
        $curso = Curso::where('shortname', $request->id)->first();
        $curso->destacado = $request->destacado;
        $curso->save();
        return response()->json(['status' => 'ok', 'data' => $curso], 200);
    }

    private function filtroListadoCurso($value = '', $id)
    {
        switch ($value) {
            case 'only_accepted':
                return [['shortname', $id], ['nombre', 'aprobada']];
                break;

            default:
                return [['shortname', $id]];
                break;
        }
    }

    private function filtroTime($value)
    {
        $dateS = Carbon::now()->startOfMonth()->subMonth($value);
        $dateE = Carbon::now()->startOfMonth();
        return [$dateS, $dateE];
    }

    public function listadoCurso(Request $request, $id)
    {
        return response()->json($this->getListadoCurso($request, $id));
    }

    public function generarReporte(Request $request, $shortname)
    {
        $users = $this->getListadoCurso($request, $shortname);
        if ($users["total_matriculas"] != 0) {
            $date = Carbon::now();
            $pdf = app('dompdf.wrapper');
            $pdf->loadView('PDF/cursopdf', ['users' => $users, 'date' => $date]);
            return $pdf->stream($shortname . '_' . $date . '.pdf', array("Attachment" => false));
        } else {
            return redirect()->route('admin.cursos');
        }
    }

    private function getListadoCurso(Request $request, $id)
    {
        $matriculas = Curso::select('fullname', 'name', 'last_name', 'deleted', 'nombre', 'amount', 'estado_matricula_id', 'mat.created_at as createdat')
            ->where($this->filtroListadoCurso($request->status_filter, $id))
            ->join('matricula as mat', 'mat.curso_id', '=', 'curso.id')
            ->join('users as user', 'user.id', '=', 'mat.usuario_id')
            ->join('estado_matricula as est_mat', 'est_mat.id', '=', 'mat.estado_matricula_id')
            ->leftJoin('pago as pago', 'pago.id', '=', 'mat.pago_id')
            ->orderBy($request->order_by, $request->asc_desc);
        if ($request->time_filter == 3 || $request->time_filter == 1) {
            $matriculas = $matriculas->whereBetween('mat.created_at', $this->filtroTime($request->time_filter));
        }
        $usuarios = $matriculas->get();
        $rechazados = $usuarios->where('estado_matricula_id', 2)->count();
        $aceptados = $usuarios->where('estado_matricula_id', 1)->count();
        $en_revision = $usuarios->where('estado_matricula_id', 3)->count();
        $cancelados = $usuarios->where('estado_matricula_id', 4)->count();
        $valor_total = $usuarios->where('estado_matricula_id', 1)->sum('amount');
        $profesores = $this->getEnrolledUsers($id);
        return [
            'matriculas' => $usuarios,
            'aceptados' => $aceptados,
            'rechazados' => $rechazados,
            'en_revision' => $en_revision,
            'cancelados' => $cancelados,
            'total_matriculas' => $aceptados + $rechazados + $en_revision + $cancelados,
            'valor_total' => $valor_total,
            'profesores' => $profesores,
        ];
    }

    private function getEnrolledUsers(string $shortname)
    {
        $courseid = $this->getCourseMoodleId($shortname);
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', config('app.moodle_ws_url'), [
            'query' => [
                'wstoken' => (string)config('app.moodle_ws_token'),
                'wsfunction' => 'core_enrol_get_enrolled_users',
                'courseid' => $courseid,
                'moodlewsrestformat' => 'json',
            ], 'verify' => false
        ]);
        $json = json_decode($res->getBody());
        $not_students = array_map(function ($user) {
            return [
                "fullname" => $user->fullname,
                "roles" => $user->roles
            ];
        }, array_filter($json, function ($user) {
            foreach ($user->roles as $role) {
                if ($role->shortname != 'student') {
                    return true;
                }
            }
        }));
        if (empty($not_students)) {
            return [];
        } else {
            return $not_students;
        }
    }

    private function getCourseMoodleId(string $shortname)
    {
        return MoodleCurso::where('shortname', $shortname)->select('shortname', 'id')->get()->first()['id'];
    }
}
