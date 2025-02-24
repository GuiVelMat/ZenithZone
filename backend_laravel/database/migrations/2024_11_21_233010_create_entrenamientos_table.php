<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('entrenamientos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('slug')->unique();
            $table->string('descripcion')->nullable();
            $table->string('dia');
            $table->integer('duracion');
            $table->integer('max_plazas');
            $table->integer('precio');
            $table->string('status');
            $table->foreignId('deporte_id')->constrained()->onDelete('cascade');
            $table->foreignId('horario_id')->constrained()->onDelete('cascade');
            $table->foreignId('pista_privada_id')->constrained()->onDelete('cascade');
            $table->unsignedBigInteger('entrenador_id');
            $table->foreign('entrenador_id')->references('id')->on('entrenadores')->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entrenamientos');
    }
};
