import React from 'react';
import './CardPista.css';

const CardPista = ({ pista }) => {
    return (
        <section className='card-pista'>
            <div className="card mb-4">
                <img src="/assets/placeholder.png" alt="" className="card-img-top" />
                <div className="card-img-overlay d-flex align-items-end justify-content-center text-white">
                    <div className="pista-name">
                        <h3>{pista.nombre}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardPista;