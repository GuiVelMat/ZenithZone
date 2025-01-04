import React, { useContext } from 'react';
import CardDeportes from '../Cards/CardDeportes';
import Context from '../../../context/DeportesContext';
import './ListDeportesHome.css';

const ListDeportesHome = () => {
    const { deportes } = useContext(Context);

    if (!deportes || deportes.length === 0) return <p>Loading...</p>;

    return (
        <div className="body-deportes-home">
            <div className="test">
                <div className="test-2">
                    <p className="text-center text-white text-deportes fst-italic mb-0">
                        LOS DEPORTES DE LA ÉLITE
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                {deportes.deportes.slice(0, 8).map((deporte) => (
                    <CardDeportes key={deporte.id} deporte={deporte} />
                ))}
            </div>
        </div>
    );
};

export default ListDeportesHome;
