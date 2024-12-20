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
        Schema::create('follows', function (Blueprint $table) {
            $table->foreignId('follower_id')->constrained('usuarios')->onDelete('cascade'); // ID del seguidor
            $table->foreignId('followed_id')->constrained('usuarios')->onDelete('cascade'); // ID del seguido
            $table->timestamps();

            // Asegurarse de que un usuario no pueda seguir al mismo usuario dos veces
            $table->unique(['follower_id', 'followed_id']);
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('follows');
    }
};
