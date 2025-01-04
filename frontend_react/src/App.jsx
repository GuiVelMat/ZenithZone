import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { DeporteContextProvider } from './context/DeportesContext';
import { PistaContextProvider } from './context/PistasContext';
import { EntrenamientoContextProvider } from './context/EntrenamientosContext';

import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import AppRouter from './routes/AppRouter';
import { EntrenadorContextProvider } from './context/EntrenadoresContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <DeporteContextProvider>
          <PistaContextProvider>
            <EntrenamientoContextProvider>
              <EntrenadorContextProvider>
                <Header />
                <AppRouter />
                <Footer />
              </EntrenadorContextProvider>
            </EntrenamientoContextProvider>
          </PistaContextProvider>
        </DeporteContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;