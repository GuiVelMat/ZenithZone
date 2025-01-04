import React from 'react';
import './CardEntrenamiento.css';

const CardEntrenamiento = ({ entrenamiento }) => {
    return (
        <section className="mb-3">
            <div className="row g-3">
                <section className="col-md-12">
                    <div className="card card-entrenamiento">
                        <div className="card-body d-flex justify-content-between">
                            <div>
                                <p><strong>Nombre:</strong> {entrenamiento.nombre}</p>
                                <p><strong>Descripción:</strong> {entrenamiento.descripcion}</p>
                                <p><strong>Duración:</strong> {entrenamiento.duracion} minutos</p>
                                <p><strong>Plazas totales:</strong> {entrenamiento.maxPlazas}</p>
                                <p><strong>Precio:</strong> {entrenamiento.precio}€</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default CardEntrenamiento;


