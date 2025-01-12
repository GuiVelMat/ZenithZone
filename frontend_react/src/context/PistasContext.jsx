import React, { useEffect, useState } from "react";
import PistasService from "../services/Client/pistas.service";

const Context = React.createContext({})

export const PistaContextProvider = ({ children }) => {
    const [pistas, setPistas] = useState([]);

    useEffect(() => {
        PistasService.GetPistas()
            .then(({ data }) => {
                setPistas(data.pistas);
                // console.log(data);
            })
            .catch(e => console.error(e));
    }, [setPistas]);

    return <Context.Provider value={{ pistas, setPistas }}>
        {children}
    </Context.Provider>
}

export default Context