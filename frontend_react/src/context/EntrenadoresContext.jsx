import React, { useEffect, useState } from "react";
import EntrenadoresService from "../services/Client/entrenador.service";

const Context = React.createContext({})

export const EntrenadorContextProvider = ({ children }) => {
    const [entrenadores, setEntrenadores] = useState([]);

    useEffect(() => {
        EntrenadoresService.GetEntrenadores()
            .then(({ data }) => {
                setEntrenadores(data.entrenadores);
                // console.log(data.entrenadores);
            })
            .catch(e => console.error(e));
    }, [setEntrenadores]);

    return <Context.Provider value={{ entrenadores, setEntrenadores }}>
        {children}
    </Context.Provider>
}

export default Context