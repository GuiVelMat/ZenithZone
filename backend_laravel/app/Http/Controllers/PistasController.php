<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pista;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\PistasResource;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Http\Requests\StorePistaRequest;
use App\Http\Requests\UpdatePistaRequest;

class PistasController extends Controller
{
    public function index()
    {
        return PistasResource::collection(Pista::all());
    }

    public function store(StorePistaRequest $request)
    {
        $admin = auth('admin')->user();

        if (!$admin) {
            return response()->json(['error' => 'Admin no encontrado'], 404);
        }
        
        $validatedData = $request->validated();
    
        try {
           
            $pistas = Pista::create([
                'nombre' => $validatedData['nombre'],
            ]);
    
            if ($request->has('imagenes')) {
                foreach ($request->input('imagenes') as $imageUrl) {
                   
                    $pistas->images()->create([
                        'image_url' => $imageUrl, 
                    ]);
                }
            }
               
            $pistas->deportes()->attach($validatedData['deportes']);
           
            return new PistasResource($pistas);
    
        } catch (\Exception $e) {
            
            Log::error('Error al crear la pista: ' . $e->getMessage(), [
                'trace' => $e->getTraceAsString(),
                'request_data' => $request->all()  
            ]);
    
           
            return response()->json([
                'error' => 'Error al crear la pista',
                'message' => $e->getMessage(),  
                'trace' => config('app.debug') ? $e->getTrace() : null 
            ], 500);
        }
    }
    public function show($slug)
    {
        $pista = Pista::where('slug', $slug)->firstOrFail();
        return new PistasResource($pista);
    }

    public function update(UpdatePistaRequest $request, $slug)
{
    $admin = auth('admin')->user();
        if (!$admin) {
            return response()->json(['error' => 'Admin no encontrado'], 404);
        }
    // Validar los datos de la solicitud
    $validatedData = $request->validated();

    try {
        // Buscar la pista por el slug
        $pista = Pista::where('slug', $slug)->firstOrFail();

        
        if (isset($validatedData['nombre'])) {
            $pista->update([
                'nombre' => $validatedData['nombre'],
            ]);
        }
       
        if (isset($validatedData['deportes'])) {
            $pista->deportes()->sync($validatedData['deportes']); 
        }

        
        if ($request->has('imagenes')) {
            foreach ($validatedData['imagenes'] as $imageUrl) {
                // Agregar cada nueva imagen a la pista
                $pista->images()->create([
                    'image_url' => $imageUrl,
                ]);
            }
        }

        // Devolver la pista actualizada
        return new PistasResource($pista);

    } catch (\Exception $e) {
       
        Log::error('Error al actualizar la pista: ' . $e->getMessage());
        return response()->json(['error' => 'Error al actualizar la pista'], 500);
    }
}

    public function destroy($slug)
    {
        $admin = auth('admin')->user();
        if (!$admin) {
            return response()->json(['error' => 'Admin no encontrado'], 404);
        }
        try {
            $pista = Pista::where('slug', $slug)->firstOrFail();
            $pista->images()->delete();
            $pista->deportes()->detach();
            $pista->delete();

            return response()->json(['message' => 'Pista eliminada correctamente.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al eliminar la pista'], 500);
        }
    }

    public function destroyImage(Request $request, $slug)
{
    // Validar la URL de la imagen
    $validatedData = $request->validate([
        'image_url' => 'required|string|max:255',
    ]);

    try {
        
        $pista = Pista::where('slug', $slug)->firstOrFail();

       
        $image = $pista->images()->where('image_url', $validatedData['image_url'])->first();

        if (!$image) {
            return response()->json(['error' => 'Imagen no encontrada.'], 404);
        }

        
        $image->delete();

        return response()->json(['message' => 'Imagen eliminada correctamente.']);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Error al eliminar la imagen'], 500);
    }
}

}
