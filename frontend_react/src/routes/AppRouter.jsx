import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Instalaciones = React.lazy(() => import('../pages/Instalaciones/Instalaciones'));
const Servicios = React.lazy(() => import('../pages/Servicios/Servicios'));
const Entrenadores = React.lazy(() => import('../pages/Entrenadores/Entrenadores'));
const Auth = React.lazy(() => import('../pages/Auth/Login'));

function AppRouter() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/instalaciones" element={<Instalaciones />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/entrenadores" element={<Entrenadores />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Suspense>
    );
}

export default AppRouter;