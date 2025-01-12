import React from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <>
            <section className="container py-5">
                <div className='row justify-content-center'>
                    <div className='col-md-6 col-lg-4'>
                        <div className="text-center mb-4">
                            <h1 className="h3 mb-3 fw-normal">Register</h1>
                            <p className="text-muted">
                                Have an account?{" "}
                                <span>
                                    <a href="" className="text-primary" onClick={handleLoginClick}>
                                        Sign in
                                    </a>
                                </span>
                            </p>
                        </div>
                        <form className="needs-validation">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    className="form-control"
                                    placeholder="Nombre"
                                    required
                                />
                                <label htmlFor="nombre">Nombre</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="apellidos"
                                    id="apellidos"
                                    className="form-control"
                                    placeholder="Apellidos"
                                    required
                                />
                                <label htmlFor="apellidos">Apellidos</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    required
                                />
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    className="form-control"
                                    placeholder="Repeat Password"
                                    required
                                />
                                <label htmlFor="password2">Repeat Password</label>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );

};

export default Register;