<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profile extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];
    public $timestamps = true;

    protected $fillable = [
        'usuario_id',
        'numerosocio',
        'nombre',
        'apellidos',
        'edad',
        'telefono',
    ];

    // Relación con el usuario
    public function usuario(): BelongsTo
    {
        return $this->belongsTo(Usuario::class, 'profile_id', 'usuario_id');
    }

    public function reservas()
    {
        return $this->hasMany(Reserva::class, 'profile_id');
    }
    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }
    public function entrenamientos()
    {
        return $this->belongsToMany(Entrenamiento::class, 'entrenamiento_profile', 'profile_id', 'entrenamiento_id');
    }
    

}
