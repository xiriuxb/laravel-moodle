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

    private $ELEMENTS_PER_PAGE = 2;
    /**
     *
     * @param  array  $data
     * @return \App\Models\Comment
     */
    public function index($categoria = null,$page=1){
        if($categoria == null || $categoria == 'all'){
            $cursos = DB::connection('moodle')->select($this->getQuery($categoria,null,$page)); 
            return inertia('CursosComponent',['data'=>$cursos,'pages'=>$this->pages($categoria), 'currentPage'=>(int)$page, 'category'=>$categoria]);
        }
        elseif (CategoriaCurso::where('name', '=', $categoria)->exists()) {
            $cursos = DB::connection('moodle')->select($this->getQuery($categoria,null,$page)); 
            return inertia('CursosComponent',['data'=>$cursos,'pages'=>$this->pages($categoria),'currentPage'=>(int)$page, 'category'=>$categoria]);
        }else{
            return inertia('CursosComponent',['errors'=>['Categoria no encontrada']]);
        }
    }

    public function searchCourses(Request $request){
        $data = MoodleCurso::where([['fullname', 'LIKE','%'.$request->keyword.'%'],['category','<>',0],['visible',1]])->get();
        return response()->json($data);
    }

    private function getQuery($categoria = null,$curseid = null, $page=1){
        $courseIdFilter = $curseid == null ? "" : " AND shortname = '".$curseid."'";
        $categoryFilter = $categoria == null || $categoria == 'all'? '' : ' AND category = "'.$this->getCategoryId($categoria).'"';
        $categoryCFilter = $categoria == null || $categoria == 'all'? '' : ' where name = "'.$categoria.'"';
        $baseQuery = "SELECT  mdl_crse.id, mdl_cntxt.id AS 'context',filename, mdl_crse_cat.name as 'category',fullname,shortname,summary,precio,value, visible FROM
        (SELECT id, category, fullname, shortname, summary, visible FROM mdl_course Where visible = 1 AND id <> 1".$categoryFilter.$courseIdFilter." LIMIT ".$this->calcMin($page).",".$this->ELEMENTS_PER_PAGE.") mdl_crse
        INNER JOIN (SELECT id, name FROM mdl_course_categories" .$categoryCFilter.") mdl_crse_cat ON mdl_crse_cat.id = mdl_crse.category
        INNER JOIN ( SELECT instanceid, 
            MAX(CASe when (fieldid=3) THEN value end) as precio,
            MAX(CASE when (fieldid=4) then value end) as value
            from mdl_customfield_data GROUP BY instanceid) mdl_cstmfld_dta ON mdl_cstmfld_dta.instanceid = mdl_crse.id
        INNER JOIN (SELECT id,instanceid from mdl_context WHERE contextlevel = 50) mdl_cntxt ON mdl_cntxt.instanceid = mdl_crse.id
        INNER JOIN (SELECT contextid, filename from mdl_files where component = 'course' AND  filename <> '.') mdl_fls 
        ON mdl_fls.contextid = mdl_cntxt.id" ;

        return $baseQuery;
    }

    // public function show($id){
    //     $cursos = DB::connection('moodle')->select($this->getQuery(null,1,$id,1)); 
    //     return response()->json(['data'=>$cursos]);
    // }

    private function getCategoryId($categoria){
        $category = CategoriaCurso::where('name', $categoria)->first();
        return $category->id;
    }

    private function pages($categoria){
        $total = 0;
        if ($categoria==null || $categoria=='all') {
            $total = MoodleCurso::where('visible',1)->count()-1; //-1 porque no cuenta el curso de Moodle en sí
        }else{
            $total = MoodleCurso::where([['category','=',$this->getCategoryId($categoria)],['visible',1]])->count();
        }
        return ceil($total/$this->ELEMENTS_PER_PAGE);
    }

    
// //     SELECT * FROM
// // (SELECT contextid FROM mdl_files WHERE component='course' GROUP BY contextid) mdl_fls 
// // INNER JOIN mdl_context ON mdl_context.id = mdl_fls.contextid 
// // INNER JOIN (SELECT id, category, fullname, shortname, summary FROM mdl_course) mdl_crse ON mdl_crse.id = mdl_context.instanceid
// // INNER JOIN mdl_customfield_data ON mdl_customfield_data.instanceid = mdl_crse.id

// // SELECT instanceid, 
// // MAX(CASe when (fieldid=3) THEN value end) as precio,
// // MAX(CASE when (fieldid=4) then value end) as value
// // from mdl_customfield_data  
// // GROUP BY instanceid


    private function calcMin($page)
    {
        return ($page - 1) * $this->ELEMENTS_PER_PAGE;
    }
}
