import axios from 'axios';

const Axios = (URL) => {
    const api = axios.create({
        baseURL: URL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
            'isSpringboot': 'true',
        },
    });

    // Interceptor para manejar respuestas
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            // Manejar errores globalmente
            console.error('API Error:', error);
            return Promise.reject(error);
        }
    );

    return api;
};

export default Axios;