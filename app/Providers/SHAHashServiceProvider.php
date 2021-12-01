<?php

namespace App\Providers;

use Illuminate\Hashing\HashServiceProvider;
use App\Libraries\SHAHasher;

class SHAHashServiceProvider extends HashServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(){
        $this->app->bind('hash', function($app){
            return new SHAHasher();
        });
    }

    public function provides(){
        return array('hash');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}