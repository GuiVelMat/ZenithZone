import React from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <>
            <section className="container py-5">
                <div className='row justify-content-center'>
                    <div className='col-md-6 col-lg-4'>
                        <div className="text-center mb-4">
                            <h1 className="h3 mb-3 fw-normal">Login</h1>
                            <p className="text-muted">
                                New user? {" "}
                                <span>
                                    <a href="" className="text-primary" onClick={handleRegisterClick}>
                                        Create an account
                                    </a>
                                </span>
                            </p>
                        </div>
                        <form className="needs-validation">
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
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );

};

export default Login;