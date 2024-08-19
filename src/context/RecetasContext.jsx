import React, {createContext, useEffect, useState} from 'react'
import guardarRecetasLocalStorage from '../utils/guardarRecetasLocalStorage'
import obtenerRecetasLocalStorage from '../utils/obtenerRecetasLocalStorage'

export const RecetasContext = createContext()

export const RecetaProvider = ({children}) => {
    const [recetas, setReceta] = useState(obtenerRecetasLocalStorage('recetas'))
    
    useEffect(() => {
        guardarRecetasLocalStorage('recetas', recetas);
    }, [recetas]);

    const agregarReceta = (nuevaReceta) => {
        setReceta([...recetas, nuevaReceta])
    }

    const eliminarReceta = (id) =>{
        setReceta(recetas.filter((receta) => receta.id !== id))
    }

    return(
        <RecetasContext.Provider value={{recetas, agregarReceta, eliminarReceta}}>
            {children}
        </RecetasContext.Provider>
    )
}
