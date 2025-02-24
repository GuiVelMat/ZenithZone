<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PistasResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'pistas_id' => $this->id,
            'nombre' => $this->nombre,
            'slug' => $this->slug,
            'images' => $this->images,
            'deportes' => $this->deportes,
        ];
    }
}
