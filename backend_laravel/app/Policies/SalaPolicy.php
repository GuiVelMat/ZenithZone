<?php

namespace App\Policies;

use App\Models\Sala;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SalaPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Sala $sala): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(Entrenador $entrenador, Sala $sala): bool
    {
        return $entrenador->id === $sala->entrenador_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(Entrenador $entrenador, Sala $sala): bool
    {
        return $entrenador->id === $sala->entrenador_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Sala $sala): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Sala $sala): bool
    {
        //
    }
}
