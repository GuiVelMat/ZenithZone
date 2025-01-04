import React, { useEffect, useState } from "react";
import deportesService from "../services/Client/deportes.service";

const Context = React.createContext({})

export const DeporteContextProvider = ({ children }) => {
    const [deportes, setDeportes] = useState([]);

    useEffect(() => {
        deportesService.GetDeportes()
            .then(({ data }) => {
                setDeportes(data.deportes);
                // console.log(data);
            })
            .catch(e => console.error(e));
    }, [setDeportes]);

    return <Context.Provider value={{ deportes, setDeportes }}>
        {children}
    </Context.Provider>
}

export default Context