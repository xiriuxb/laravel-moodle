<?php

namespace App\Models;


class MoodleCurso
{
    //se usa solo para los que se obtiene desde moodle
    //en el controlador en las func index y show
    public function __construct()
    {
        $arguments = func_get_args();
        $numberOfArguments = func_num_args();
        //dd($numberOfArguments);
        if (method_exists($this, $function = '__construct'.$numberOfArguments)||
        method_exists($this, $function = '__construct'.$numberOfArguments-1)) {
            call_user_func_array(array($this, $function), $arguments);
        }
    }
    
    public function __construct5(
        string $moodle_id, string $fullname, 
        string $shortname, string $category,
        bool $destacado=false)
    {
        $this->moodle_id = $moodle_id;
        $this->fullname = $fullname;
        $this->shortname = $shortname;
        $this->category = $category;
        $this->destacado = $destacado;
    }

    public function __construct7(
        string $moodle_id, string $fullname, 
        string $shortname, string $summary, 
        string $price, string $category,
        ?string $image=null,
        ?string $ex_description=null)
    {
        $this->moodle_id = $moodle_id;
        $this->fullname = $fullname;
        $this->shortname = $shortname;
        $this->summary = $summary;
        $this->price = $price;
        $this->category = $category;
        $this->image = $image;
        $this->ex_description = $ex_description;
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */     
    //se anade category porque moodle trabaja con ese campo cuando
    //la matricula se maneja con una base de datos externa
}