import React, { useContext } from 'react';
import './Entrenadores.css';
import Context from '../../context/EntrenadoresContext';
import CardEntrenador from '../../components/Shared/Cards/CardEntrenador';

const EntrenadoresPage = () => {
    const { entrenadores } = useContext(Context);
    console.log(entrenadores);

    if (!entrenadores || entrenadores.length === 0) return <p>Loading...</p>;


    return (
        <>
            <main>
                <section className="container">
                    <h1 className="text-center pt-5 pb-3">Conoce a nuestro equipo</h1>
                    <div className="row g-3 justify-content-center">
                        {entrenadores.map((entrenador) => (
                            <div key={entrenador.id} className="col-md-6 g-3">
                                <CardEntrenador entrenador={entrenador} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default EntrenadoresPage;