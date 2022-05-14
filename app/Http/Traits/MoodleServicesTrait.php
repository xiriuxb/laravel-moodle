<?php
namespace App\Http\Traits;
trait MoodleServicesTrait {

    /**
     *
     * @param  string  $username
     * @return int
     */
    private function getUserId(string $userName){
        $client = new \GuzzleHttp\Client();
        $res = $client->request('GET', env('MOODLE_WS_URL'), [
            'query' => [
                'wstoken' => (string)env('MOODLE_WS_TOKEN'),
                'wsfunction' => 'core_user_get_users_by_field',
                'field' => 'username',
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
}