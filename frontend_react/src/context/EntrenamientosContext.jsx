import React, { useEffect, useState } from "react";
import EntrenamientosService from "../services/Client/entrenamientos.service";

const Context = React.createContext({})

export const EntrenamientoContextProvider = ({ children }) => {
    const [entrenamientos, setEntrenamientos] = useState([]);

    useEffect(() => {
        EntrenamientosService.GetEntrenamientosNoFilters()
            .then(({ data }) => {
                setEntrenamientos(data.entrenamientos);
                // console.log(data.entrenamientos);
            })
            .catch(e => console.error(e));
    }, [setEntrenamientos]);

    return <Context.Provider value={{ entrenamientos, setEntrenamientos }}>
        {children}
    </Context.Provider>
}

export default Context