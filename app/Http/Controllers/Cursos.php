<?php

namespace App\Http\Controllers;

use App\Models\CategoriaCurso;
use App\Models\MoodleCurso;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Cursos extends Controller
{
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
        // $categoryFilter = $categoria == null || $categoria == 'all'? '' : ' AND mdl_crs_cat.name = "'.$categoria.'"';
        if($categoria == null || $categoria == 'all'){
            $cursos = DB::connection('moodle')->select($this->getQuery($categoria,null,$page)); 
            return inertia('views/Cursos',['data'=>$cursos,'pages'=>$this->pages($categoria), 'currentPage'=>(int)$page, 'category'=>$categoria]);
        }
        elseif (CategoriaCurso::where('name', '=', $categoria)->exists()) {
            $cursos = DB::connection('moodle')->select($this->getQuery($categoria,null,$page)); 
            return inertia('views/Cursos',['data'=>$cursos,'pages'=>$this->pages($categoria),'currentPage'=>(int)$page, 'category'=>$categoria]);
        }else{
            return response()->json(['message'=>'Categoria no encontrada'],404);
        }
    }

    public function searchCourses(Request $request){
        $data = MoodleCurso::where('fullname', 'LIKE','%'.$request->keyword.'%')->get();
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

    public function index2($categoria=null,$page=1)
    {
        $SLICE_SIZE = 6;
        $DEFAULT_CATEGORY = 'all';
        $cursos = [];
        //dd($categoria);
        //Recive todos los cursos desde la API de moodle
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://moodle.xiriuxb.org/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '9b2f731935a54e126809b497bd231bd8',
                'wsfunction' => 'core_course_get_courses_by_field',
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
        //dd($categoria);
        $json = json_decode($res->getBody());
        if (empty($json->courses) ) {
            return response()->json(['status' => 'error', 'message' => 'No existen cursos'], 404);
        }else{
            foreach ($json->courses as $cursoj) {
            //filter data by category
                if ($cursoj->id != 1 && $cursoj->visible) { //Si el curso no es moodle y esta visible
                    $curso = new MoodleCurso(
                        $cursoj->id,
                        $cursoj->fullname,
                        $cursoj->shortname,
                        $cursoj->summary,
                        $cursoj->customfields[1]->value,
                        $cursoj->categoryname,
                        str_replace('/webservice', '', $cursoj->overviewfiles[0]->fileurl), //remove /webservice string,
                    );
                    if($categoria!= $DEFAULT_CATEGORY && $curso->category == $categoria){
                        //dd($categoria);
                        $cursos[] = $curso;
                    }
                    elseif($categoria == $DEFAULT_CATEGORY){
                        $cursos[] = $curso;
                    }
                }
                unset($curso);
            }
            if(empty($cursos)){
                return response()->json(['status' => 'error', 'message' => 'No existen cursos de esta categoría'], 404);
            }else{
                $arr = array_slice($cursos,$this->calcMin($page,$SLICE_SIZE),($SLICE_SIZE*$page));
                return response()->json(['status' => 'ok', 
                'data' => $arr
            ,'pages'=>ceil(sizeof($cursos)/$SLICE_SIZE) ], 200);
            }
        }
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
    public function show($curso_id, $field = 'shortname')
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', 'https://moodle.xiriuxb.org/webservice/rest/server.php', [
            'query' => [
                'wstoken' => '9b2f731935a54e126809b497bd231bd8',
                'wsfunction' => 'core_course_get_courses_by_field',
                //Recive los datos del curso especificado desde la API de moodle
                'field' => $field,
                'value' => $curso_id,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
        $json = json_decode($res->getBody());
        if (empty($json->courses) ) {
            return redirect('/not-found')->withErrors(['message' => 'No existe el curso']);
        } elseif(!$json->courses[0]->visible){
            return response()->json(['status' => 'error', 'message' => 'No existe el curso'], 404);
        } else {
            $curso_aux = $json->courses[0];
            //dd($curso_aux);
            $curso = new MoodleCurso(
                $curso_aux->id,
                $curso_aux->fullname,
                $curso_aux->shortname,
                $curso_aux->summary,
                $curso_aux->customfields[1]->value,
                $curso_aux->categoryname,
                str_replace('/webservice', '', $curso_aux->overviewfiles[0]->fileurl), //remove /webservice string,
                $curso_aux->customfields[2]->value,
                //'destacado' => $json->courses[0]->customfields[3]->value,
            );
            return inertia('views/Curso',['status' => 'ok', 'curso' => $curso], 200);	
        }
    }

//     public function search()
//     {
//         $client = new \GuzzleHttp\Client();
//         $res = $client->request('GET', 'https://moodle.xiriuxb.org/webservice/rest/server.php', [
//             'query' => [
//                 'wstoken' => '9b2f731935a54e126809b497bd231bd8',
//                 'wsfunction' => 'core_course_get_courses_by_field',
//                 'moodlewsrestformat' => 'json',
//             ],'verify'=> false
//         ]);
//         $json = json_decode($res->getBody());
//         if (empty($json->courses) ) {
//             return response()->json(['status' => 'error', 'message' => 'No existe el curso'], 404);
//         } else {
//             foreach ($json->courses as $cursoj) {

//                 if ($cursoj->id != 1 && $cursoj->visible) {
//                     $curso = new MoodleCurso(
//                         $cursoj->id,
//                         $cursoj->fullname,
//                         $cursoj->shortname,
//                         $cursoj->categoryname,
//                         false,
//                     );
//                     $cursos[] = $curso;
//                 }
//                 unset($cursoj);
//             }
//             return response()->json(['status' => 'ok', 'data' => $cursos], 200);	
//         }
//     }

    private function calcMin($page)
    {
        return ($page - 1) * $this->ELEMENTS_PER_PAGE;
    }
}
