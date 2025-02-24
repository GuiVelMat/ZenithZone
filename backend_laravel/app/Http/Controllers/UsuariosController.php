<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use App\Http\Resources\UsuariosResource;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    public function index()
    {
        return UsuariosResource::collection(Usuario::with('profile')->get());
    }
    // public function store(Request $request)
    // {
        
    //     $request->validate([
    //         'nombre' => 'required|string|max:255',
    //         'apellidos' => 'required|string|max:255',
    //         'email' => 'required|email|unique:usuarios,email',
    //         'telefono' => 'required|string|max:15',
    //         'password' => 'required|string|min:8', 
    //     ]);

        
    //     $usuario = Usuario::create([
    //         'nombre' => $request->nombre,
    //         'apellidos' => $request->apellidos,
    //         'email' => $request->email,
    //         'telefono' => $request->telefono,
    //         'password' => Hash::make($request->password), 
    //     ]);

       
    //     return new UsuariosResource($usuario);

    // }


    public function show($email)
    {
        $usuario = Usuario::where('email', $email)->firstOrFail();

        return new UsuariosResource($usuario);
    }

    public function update(Request $request, $slug)
    {
       
        
        return "update";
    }
    public function destroy($DNI)
    {
        $usuario = Usuario::where('DNI', $DNI)->firstOrFail();
       
        $usuario->delete();
        return response()->json(['message' => 'usuario eliminado correctamente.']);
    }

   
    public function restore($slug)
{
    
    

    return "restaurado";
}
}
