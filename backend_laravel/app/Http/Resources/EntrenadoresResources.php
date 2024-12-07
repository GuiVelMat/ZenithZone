<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EntrenadoresResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'apellidos' => $this->apellidos,
            'DNI' => $this->DNI,
            'email' => $this->email,
            'deporte_id' => $this->deporte_id,
            'edad' => $this->edad,
            'imagenes' => $this->images
        ];
    }
}
