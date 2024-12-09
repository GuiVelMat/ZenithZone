<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sala;
use App\Http\Resources\SalasResources;

class SalasController extends Controller
{
    
    public function index()
    {
        return SalasResources::collection(Sala::all());
    }
    public function store(Request $request)
    {
        
        $request->validate([
            'nombre' => 'required|string|max:255',
            'tamaño' => 'required|string|max:255',
            'ubicacion' => 'required|string|max:255',
            'entrenador_id' => 'required|exists:entrenadores,id|unique:salas',
            'imagenes' => 'nullable|array',
            'imagenes.*' => 'string|max:255',
        ]);
    
       
        $sala = Sala::create([
            'nombre' => $request->nombre,
            'tamaño' => $request->tamaño,
            'ubicacion' => $request->ubicacion,
            'entrenador_id' => $request->entrenador_id,
        ]);
        if ($request->has('imagenes')) {
            foreach ($request->input('imagenes') as $imageUrl) {
               
                $sala->images()->create([
                    'image_url' => $imageUrl, 
                ]);
            }
        }
    
        
        return new SalasResources($sala);

    }


    public function show($slug)
    {

        $sala = Sala::where('slug', $slug)->firstOrFail();
        if (!$sala) {
            return response()->json(['error' => 'sala no encontrada'], 404);
        }

        return new SalasResources($sala);
    }

    public function update(Request $request, $slug)
    {
        
    $request->validate([
        'nombre' => 'nullable|string|max:255',     
        'tamaño' => 'nullable|string|max:255',
        'ubicacion' => 'nullable|string|max:255',
        'entrenador_id' => 'nullable|exists:entrenadores,id',
        'imagenes' => 'nullable|array',
        'imagenes.*' => 'string|max:255', 
    ]);

    
    $sala = Sala::where('slug', $slug)->firstOrFail();

    // Actualizar solo los campos presentes en la solicitud
    $sala->update(
        $request->only(['nombre', 'tamaño', 'ubicacion', 'entrenador_id'])
    );
    if ($request->has('imagenes')) {
           
        // $deporte->images()->delete();

        foreach ($request->input('imagenes') as $imageUrl) {
            
            $sala->images()->create([
                'image_url' => $imageUrl,
            ]);
        }
    }

    // Devolver la sala actualizada
    return new SalasResources($sala);
        
        
    }
    public function destroy($slug)
    {
        $sala = Sala::where('slug', $slug)->firstOrFail();
       
        $sala->delete();
        return response()->json(['message' => 'sala eliminado correctamente.']);
    }

   
    public function restore($slug)
{
    
    $sala = Sala::onlyTrashed()->where('slug', $slug)->first();

    if (!$sala) {
        return response()->json(['error' => 'Sala no encontrada o no está eliminada.'], 404);
    }

    $sala->restore();
    return new SalasResources($sala);
}
}
