<?php
namespace App\Http\Controllers;

use App\Http\Resources\EntrenamientoResource;
use App\Models\Clase;
use App\Models\Deporte;
use App\Models\Entrenamiento;
use App\Models\Entrenador;  
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Policies\EntrenamientoPolicy;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreEntrenamientoRequest; 
use App\Http\Requests\UpdateEntrenamientoRequest; 

class EntrenamientoController extends Controller
{
    // Obtener todas las clases
    public function index()
    {
        $entrenamientos = Entrenamiento::with('profiles')->get();
    return EntrenamientoResource::collection($entrenamientos);
    }

    // Obtener una clase específica por su ID
    public function show($slug)
    {
        $entrenamiento = Entrenamiento::where('slug', $slug)->firstOrFail();
        if (!$entrenamiento) {
            return response()->json(['error' => 'Entrenamiento no encontrado'], 404);
        }
        return response()->json($entrenamiento);
    }

    // Crear una nueva clase
    public function store(StoreEntrenamientoRequest $request)
    {
        $entrenador = auth('entrenador')->user();
        
        if (!$entrenador) {
            return response()->json(['error' => 'No autenticado'], 401);
        }

        $entrenamiento = Entrenamiento::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'duracion' => $request->duracion,
            'max_plazas' => $request->max_plazas,
            'precio' => $request->precio,
            'deporte_id' => $request->deporte_id,
            'entrenador_id'=>$entrenador->id,
        ]);

        return response()->json($entrenamiento, 201);
    }

    // Actualizar una clase existente
    public function update(UpdateEntrenamientoRequest $request, $slug)
    {  
        // Log::debug('Token recibido: ' . request()->bearerToken());
        $entrenador = auth('entrenador')->user();
        $entrenamiento = Entrenamiento::where('slug', $slug)->firstOrFail();
        if (!$entrenamiento) {
            // Log::debug('entrenamiento no encontrado');
            return response()->json(['error' => 'entrenamiento no encontrado'], 404);
        }
        if (!$entrenador->can('update', $entrenamiento)) {
            // Log::debug('no autorizado');
            return response()->json(['error' => 'No autorizado'], 403);
        }
        // Log::debug('llegue aqui');
        
        // Log::debug('llegue aqui tambien');
        $entrenamiento->update($request->all());
        return response()->json($entrenamiento);
    }

    // Eliminar una clase
    public function destroy($slug)
    {
        $entrenador = auth('entrenador')->user();
        $entrenamiento = Entrenamiento::where('slug', $slug)->firstOrFail();
        if (!$entrenamiento) {
            return response()->json(['error' => 'Clase no encontrada'], 404);
        }
        if (!$entrenador->can('delete', $entrenamiento)) {
            return response()->json(['error' => 'No autorizado'], 403);
        }
        $entrenamiento->delete();
        return response()->json(['message' => 'Clase eliminada']);
    }

    public function getEntrenamientosByEntrenador(Request $request,$DNI)
    {
        $entrenador = Entrenador::where('DNI', $DNI)->first();

        
        if (!$entrenador) {
            return response()->json(['error' => 'Entrenador no encontrado'], 404);
        }



        // $entrenadorId = auth()->user()->id; 

        
        $entrenamientos = Entrenamiento::where('entrenador_id', $entrenador->id)
                                    ->with('usuarios')  
                                    ->get();

    
        if ($entrenamientos->isEmpty()) {
            return response()->json(['error' => 'No tienes entrenamientos asignados.'], 404);
        }

    
        return EntrenamientoResource::collection($entrenamientos);
    }

}
