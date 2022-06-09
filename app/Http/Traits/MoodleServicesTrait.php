<?php
namespace App\Http\Traits;
trait MoodleServicesTrait {

    /**
     *
     * @param  string  $username
     * @return int
     */
    public function getUserId(string $userName, string $field = 'username'){
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', env('MOODLE_WS_URL'), [
            'query' => [
                'wstoken' => (string)env('MOODLE_WS_TOKEN'),
                'wsfunction' => 'core_user_get_users_by_field',
                'field' => $field,
                'values[0]' => $userName,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
        $jsonResponse = json_decode($res->getBody());
        if(!empty($jsonResponse)){
            return $jsonResponse[0]->id;
        }else{
            
        }
    }

    public function getCourseFromMoodle($shortname)
    {
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', env('MOODLE_WS_URL'), [
            'query' => [
                'wstoken' => env('MOODLE_WS_TOKEN'),
                'wsfunction' => 'core_course_get_courses_by_field',
                //Recive los datos del curso especificado desde la API de moodle
                'field' => 'shortname',
                'value' => $shortname,
                'moodlewsrestformat' => 'json',
            ],'verify'=> false
        ]);
        $json = json_decode($res->getBody());
            $curso_aux = $json->courses;
        if(empty($curso_aux)||!$curso_aux[0]->visible){
            return [];
        }else{
            return $curso_aux[0];
        }
        
    }
}