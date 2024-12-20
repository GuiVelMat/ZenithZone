<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEntrenamientoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string|max:500',
            'duracion' => 'required|integer|min:1',
            'max_plazas' => 'required|integer|min:1',
            'precio' => 'required|numeric|min:0',
            'deporte_id' => 'required|exists:deportes,id',
        ];
    }
}
