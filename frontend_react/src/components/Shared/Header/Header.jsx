import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header fixed-top shadow-sm">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center p-3">

                    <Link to="/" className="text-color fw-bold h2 mb-0 ms-3">
                        <img src="/assets/logo_2.png" alt="Logo" className="logo" />
                    </Link>
                    <nav>
                        <ul className="nav me-5">
                            <li className="nav-item me-3">
                                <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink to="/instalaciones" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
                                    Instalaciones
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink to="/servicios" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
                                    Servicios
                                </NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/entrenadores" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
                                    Entrenadores
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className={({ isActive }) => isActive ? activeStyleAuth : inactiveStyleAuth}>
                                    Unirse al club
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

const activeStyle = "nav-link text-black fw-bold fs-5 isActive";
const inactiveStyle = "nav-link text-color fw-bold fs-5";

const activeStyleAuth = "nav-link auth fw-bold fs-5 isActive";
const inactiveStyleAuth = "nav-link auth fw-bold fs-5";

export default Header;
