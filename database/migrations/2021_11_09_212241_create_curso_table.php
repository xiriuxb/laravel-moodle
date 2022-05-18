<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curso', function (Blueprint $table) {
            $table->id();
            $table->integer('moodle_id')->unsigned()->unique();
            $table->string('fullname',255);
            $table->string('shortname',128);
            $table->string('category',128);
            $table->boolean('destacado')->default(false);
            // $table->string('image',255);
            // $table->double('price', 8, 2);
            // $table->float('destacado')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('curso');
    }
}
