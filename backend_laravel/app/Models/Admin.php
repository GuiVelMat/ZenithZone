<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Foundation\Auth\Access\Authorizable;

class Admin extends Model  implements AuthenticatableContract, JWTSubject
{
    use HasFactory, SoftDeletes, Authorizable;
    protected $hidden = ['created_at', 'updated_at'];
    public $timestamps = true;
    
    protected $fillable = [
        'nombre',
        'email',
        'numeroAdmin',
        'password'
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    /**
     * Obtén el nombre del identificador de usuario.
     *
     * @return string
     */
   public function getAuthIdentifierName()
   {
       return 'id'; // o el nombre de la columna de tu tabla que sea el identificador
   }

   /**
    * Obtén el identificador único para el usuario.
    *
    * @return mixed
    */
   public function getAuthIdentifier()
   {
       return $this->getKey(); // generalmente 'id'
   }

   /**
    * Obtén la contraseña del usuario.
    *
    * @return string
    */
   public function getAuthPassword()
   {
       return $this->password;
   }
   public function getAuthPasswordName()
    {
        return 'password'; // El nombre del campo que almacena la contraseña
    }

   /**
    * Obtén la "sal" para el usuario.
    *
    * @return string
    */
   public function getRememberToken()
   {
       return $this->remember_token;
   }

   /**
    * Establece la "sal" para el usuario.
    *
    * @param string $value
    * @return void
    */
   public function setRememberToken($value)
   {
       $this->remember_token = $value;
   }

   /**
    * Obtén el nombre de la "sal" para el usuario.
    *
    * @return string
    */
   public function getRememberTokenName()
   {
       return 'remember_token';
   }


}
