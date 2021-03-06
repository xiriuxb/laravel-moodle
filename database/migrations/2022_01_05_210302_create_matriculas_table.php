<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMatriculasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matricula', function (Blueprint $table) {
            $table->id();
            $table->BigInteger('curso_id')->unsigned();
            $table->bigInteger('usuario_id')->unsigned();
            $table->string('username')->nullable();
            $table->bigInteger('curso_moodle_id')->unsigned();
            $table->bigInteger('estado_matricula_id')->unsigned();
            $table->bigInteger('pago_id')->unsigned()->nullable();
            $table->foreign('pago_id')->references('id')->on('pago');
            $table->foreign('curso_id')->references('id')->on('curso');
            $table->foreign('usuario_id')->references('id')->on('users');
            $table->foreign('estado_matricula_id')->references('id')->on('estado_matricula');
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
        Schema::dropIfExists('matricula');
    }
}
