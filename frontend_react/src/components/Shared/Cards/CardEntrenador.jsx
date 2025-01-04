import React from 'react';
import './CardEntrenador.css';

const CardEntrenador = ({ entrenador }) => {
    return (
        <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-12">
                <div className="card shadow-sm">
                    <div className="card-body text-center">
                        <img src={`/assets/entrenadores/${entrenador.images[0].imageUrl}`} alt="Perfil" className="img-fluid rounded-circle mb-3" style={{ maxHeight: '100px' }} />
                        <h1 className="card-title">{entrenador.nombre} {entrenador.apellidos}</h1>
                        <h4>{entrenador.edad} años</h4>
                        <h4 className="card-subtitle mb-3 text-muted">{entrenador.bio}</h4>
                        <p className="mt-2">
                            <strong>Email de contacto: </strong>{entrenador.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardEntrenador;