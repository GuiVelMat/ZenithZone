import React, { useEffect, useState } from "react";
import EntrenamientosService from "../services/Client/entrenamientos.service";

const Context = React.createContext({})

export const EntrenamientoContextProvider = ({ children }) => {
    const [Entrenamientos, setEntrenamientos] = useState([]);

    useEffect(() => {
        EntrenamientosService.GetEntrenamientosData()
            .then(({ data }) => {
                setEntrenamientos(data);
                // console.log(data);
            })
            .catch(e => console.error(e));
    }, [setEntrenamientos]);

    return <Context.Provider value={{ Entrenamientos, setEntrenamientos }}>
        {children}
    </Context.Provider>
}

export default Context