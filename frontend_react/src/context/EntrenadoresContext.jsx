import React, { useEffect, useState } from "react";
import EntrenadoresService from "../services/Client/entrenador.service";

const Context = React.createContext({})

export const EntrenadorContextProvider = ({ children }) => {
    const [Entrenadores, setEntrenadores] = useState([]);

    useEffect(() => {
        EntrenadoresService.GetEntrenadores()
            .then(({ data }) => {
                setEntrenadores(data);
                // console.log(data);
            })
            .catch(e => console.error(e));
    }, [setEntrenadores]);

    return <Context.Provider value={{ Entrenadores, setEntrenadores }}>
        {children}
    </Context.Provider>
}

export default Context