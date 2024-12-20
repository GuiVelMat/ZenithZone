<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            // $table->unsignedBigInteger('usuario_id');
            $table->id();
            $table->string('numerosocio')->unique();
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('bio')->nullable();
            $table->string('image');
            $table->integer('edad')->nullable();
            $table->timestamps();
            $table->foreign('id')->references('id')->on('usuarios')->onDelete('cascade');
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
