import React from 'react'
import FormLogin from '../components/FormLogin'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const handleLogin = (usuarioData) => {
        login(usuarioData)
        navigate('/')
    }
    return (
        <FormLogin onSubmit={handleLogin} />
    )
}
export default Login