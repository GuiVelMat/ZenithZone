import React, { useContext } from 'react';
import './Servicios.css';
import Context from '../../context/EntrenamientosContext';
import CardEntrenamiento from '../../components/Shared/Cards/CardEntrenamiento';

const ServiciosPage = () => {
    const { entrenamientos } = useContext(Context);
    console.log(entrenamientos);

    if (!entrenamientos || entrenamientos.length === 0) return <p>Loading...</p>;


    return (
        <>
            <main>
                <section className="container">
                    <div className="row g-3 justify-content-center">
                        {entrenamientos.map((entrenamiento) => (
                            <div key={entrenamiento.id} className="col-md-6 g-3">
                                <CardEntrenamiento entrenamiento={entrenamiento} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default ServiciosPage;