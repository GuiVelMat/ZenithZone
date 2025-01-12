import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Instalaciones = React.lazy(() => import('../pages/Instalaciones/Instalaciones'));
const Servicios = React.lazy(() => import('../pages/Servicios/Servicios'));
const Entrenadores = React.lazy(() => import('../pages/Entrenadores/Entrenadores'));
const Login = React.lazy(() => import('../pages/Auth/Login'));
const Register = React.lazy(() => import('../pages/Auth/Register'));

function AppRouter() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/instalaciones" element={<Instalaciones />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/entrenadores" element={<Entrenadores />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Suspense>
    );
}

export default AppRouter;