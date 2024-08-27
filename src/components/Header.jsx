import React, {Fragment} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Header() {
    const { logout } = useAuth()
    const handleLogout = (usuarioData) => {
        logout(usuarioData)
    }
    const { usuario } = useAuth()
    console.log(usuario)
    
    return (
        <header class="bg-gray-100 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={`/`} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Recetas</span>
                </Link>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
                    <Link to={'/recetas'} class="mr-5 hover:text-gray-900">Lista</Link>
                    {usuario!==null || usuario?.length > 0 ? (
                        <Fragment>
                            <Link to={'/nueva-receta'} class="mr-5 hover:text-gray-900">Nueva Receta</Link>
                            <Link to={'/'} onClick={handleLogout} class="mr-5 hover:text-gray-900">
                                <button className="bg-sky-500 text-white font-bold py-1 px-2 rounded" >Cerrar Sesion</button>
                            </Link>
                        </Fragment>
                    ) :
                            <Link to={'/login'} class="mr-5 hover:text-gray-900">
                                <button className="bg-sky-500 text-white font-bold py-1 px-2 rounded" >Iniciar Sesion</button>
                            </Link>
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header   