import React, { createContext, useContext, useState } from 'react'
import obtenerRecetasLocalStorage from '../utils/obtenerRecetasLocalStorage'
import guardarRecetassLocalStorage from '../utils/guardarRecetasLocalStorage'

import { Navigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(obtenerRecetasLocalStorage('usuarioActual'))

    const login = (usuarioData) => {
        setUsuario(usuarioData)
        guardarRecetassLocalStorage('usuarioActual', usuarioData)
    }

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem('usuarioActual')
    }
    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)


/* Intentar hacer un context processor para proteger rutas */
export const RutaProtegida = ({ children }) => {
    const { usuario } = useAuth()
    console.log(usuario)
    if (!usuario || usuario.length===0) {
        return <Navigate to='/login'/>
    }
    return children
}