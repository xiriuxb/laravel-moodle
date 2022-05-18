<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pago', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('metodo_pago_id');
            $table->float('amount');
            $table->string('currency');
            $table->string('payment_status')->nullable();
            $table->string('payment_id')->nullable();
            $table->string('payer_id')->nullable();
            $table->string('payer_email')->nullable();
            $table->string('payer_name')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string('file')->nullable();
            $table->foreign('metodo_pago_id')->references('id')->on('payment_method');
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
        Schema::dropIfExists('pago');
    }
}
