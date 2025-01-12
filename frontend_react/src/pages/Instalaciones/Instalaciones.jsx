import React, { useContext } from 'react';
import './Instalaciones.css';
import Context from '../../context/PistasContext';
import CardPista from '../../components/Shared/Cards/CardPista';

const InstalacionesPage = () => {
    const { pistas } = useContext(Context);
    console.log(pistas);

    if (!pistas || pistas.length === 0) return <p>Loading...</p>;

    return (
        <>
            <main>
                <section className="container">
                    <h1 className="text-center pt-5 pb-3">Nuestras Instalaciones</h1>
                    <div className="row g-4 justify-content-center">
                        {pistas.map((pista) => (
                            <div key={pista.id} className="col-md-4">
                                <CardPista pista={pista} />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default InstalacionesPage;