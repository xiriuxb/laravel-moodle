<?php

namespace App\Http\Controllers;

use App\Http\Traits\MoodleServicesTrait;
use App\Models\CategoriaCurso;
use App\Models\MoodleCurso;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Cursos extends Controller
{
    use MoodleServicesTrait;
    public function __construct()
    {
    }

    private $ELEMENTS_PER_PAGE = 6;
    private $ORDER_BY=['precio_asc'=> 'ORDER BY precio ASC',
    'precio_desc'=>'ORDER BY precio DESC',
    'fecha_asc'=>'ORDER BY timecreated ASC',
    'fecha_desc'=>'ORDER BY timecreated DESC',
    'defecto'=>''
    ];
    /**
     *
     * @param  array  $data
     * @return \App\Models\Comment
     */
    public function index($categoria = null, $order_by = 'defecto', $page = 1)
    {
        if(!in_array($order_by,array_keys($this->ORDER_BY))){
            return redirect()->route('cursos', ['categoria' => $categoria,'order_by'=>'defecto','page'=>$page]);
        }
        if ($categoria == null || $categoria == 'all') {
            $cursos = DB::connection('moodle')->select($this->getQuery($categoria, $order_by, $page));
            return inertia('CursosComponent', ['data' => $cursos, 'pages' => $this->pages($categoria), 'currentPage' => (int)$page, 'category' => $categoria, 'orderBy' => $order_by]);
        } elseif (CategoriaCurso::where('name', '=', $categoria)->exists()) {
            $cursos = DB::connection('moodle')->select($this->getQuery($categoria, $order_by, $page));
            return inertia('CursosComponent', ['data' => $cursos, 'pages' => $this->pages($categoria), 'currentPage' => (int)$page, 'category' => $categoria, 'orderBy' => $order_by]);
        } else {
            return inertia('CursosComponent', ['errors' => ['Categoria no encontrada']]);
        }
    }

    public function searchCourses(Request $request)
    {
        $data = MoodleCurso::where([['fullname', 'LIKE', '%' . $request->keyword . '%'], ['category', '<>', 0], ['visible', 1]])->get();
        return response()->json($data);
    }

    private function getQuery($categoria, $order_by, $page)
    {
        $order_by =$this->ORDER_BY[$order_by];
        $categoryFilter = $categoria == null || $categoria == 'all' ? '' : ' AND category = "' . $this->getCategoryId($categoria) . '"';
        $categoryCFilter = $categoria == null || $categoria == 'all' ? '' : ' where name = "' . $categoria . '"';
        $baseQuery = "SELECT  mdl_crse.id, mdl_cntxt.id AS 'context',filename, mdl_crse_cat.name as 'category',fullname,shortname,summary,precio,value, visible, mdl_crse.timecreated FROM
        (SELECT id, category, fullname, shortname, summary, visible, timecreated FROM mdl_course Where visible = 1 AND id <> 1" . $categoryFilter . ") mdl_crse
        INNER JOIN (SELECT id, name FROM mdl_course_categories" . $categoryCFilter . ") mdl_crse_cat ON mdl_crse_cat.id = mdl_crse.category
        INNER JOIN ( SELECT instanceid, MAX(CASe when (shortname='precio') THEN value end)+0.0 as precio, MAX(CASE when (shortname='aprendera') then value end) as value
            FROM mdl_customfield_field mdl_cf_fld INNER JOIN ( SELECT instanceid, fieldid, value from mdl_customfield_data) mdl_cf_dta ON mdl_cf_fld.id = mdl_cf_dta.fieldid GROUP BY instanceid) mdl_cstmfld_dta ON mdl_cstmfld_dta.instanceid = mdl_crse.id
        LEFT JOIN (SELECT id,instanceid from mdl_context WHERE contextlevel = 50) mdl_cntxt ON mdl_cntxt.instanceid = mdl_crse.id
        LEFT JOIN (SELECT contextid, filename from mdl_files where component = 'course' AND  filename <> '.') mdl_fls 
        ON mdl_fls.contextid = mdl_cntxt.id " . $order_by . " LIMIT " . $this->calcMin($page) . "," . $this->ELEMENTS_PER_PAGE;
        return $baseQuery;
    }

    // public function show($id){
    //     $cursos = DB::connection('moodle')->select($this->getQuery(null,1,$id,1)); 
    //     return response()->json(['data'=>$cursos]);
    // }

    private function getCategoryId($categoria)
    {
        $category = CategoriaCurso::where('name', $categoria)->first();
        return $category->id;
    }

    private function pages($categoria)
    {
        $total = 0;
        if ($categoria == null || $categoria == 'all') {
            $total = MoodleCurso::where('visible', 1)->count() - 1; //-1 porque no cuenta el curso de Moodle en sí
        } else {
            $total = MoodleCurso::where([['category', '=', $this->getCategoryId($categoria)], ['visible', 1]])->count();
        }
        return ceil($total / $this->ELEMENTS_PER_PAGE);
    }

    private function calcMin($page)
    {
        return (intval($page) - 1) * $this->ELEMENTS_PER_PAGE;
    }
}
