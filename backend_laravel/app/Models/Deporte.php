<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Deporte extends Model
{
    use HasFactory, SoftDeletes;

    protected $hidden = ['created_at', 'updated_at'];
    public $timestamps = true;
    protected $fillable = [
        'nombre',
        'slug',
    ];
    
    public function getRouteKeyName(): string
    {
        return 'slug';
    }
    public function setNombreAttribute(string $nombre): void
    {
        $this->attributes['nombre'] = $nombre;

        $this->attributes['slug'] = Str::slug($nombre);
    }

    public function pistas(): BelongsToMany
    {
        return $this->belongsToMany(Pista::class, 'deporte_pista');
    }

    public function pista_privadas(): BelongsToMany
    {
        return $this->belongsToMany(Pista_privada::class, 'deporte_pista_privada');
    }
    public function entrenamientos(): HasMany
    {
        return $this->hasMany(Entrenamiento::class);
    }

    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }
    public function entrenadores(): HasMany
    {
        return $this->hasMany(Entrenador::class, 'deporte_id');
    }
}