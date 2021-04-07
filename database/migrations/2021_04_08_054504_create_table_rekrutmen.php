<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableRekrutmen extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rekrutmen', function (Blueprint $table) {
            $table->id();
            $table->string('process_instance_id');
            $table->string('current_task');
            $table->string('status');

            $table->text('nama')->nullable();
            $table->text('email')->nullable();
            $table->text('nomor_handphone')->nullable();
            $table->text('domisili')->nullable();
            $table->text('dokumen_pendukung')->nullable();
            $table->text('status_administrasi')->nullable();
            $table->text('komentar_administrasi')->nullable();
            $table->text('lulus_wawancara')->nullable();
            $table->text('komentar_wawancara')->nullable();

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
        Schema::dropIfExists('rekrutmen');
    }
}
