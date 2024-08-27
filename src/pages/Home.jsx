import React from 'react'
import Header from '../components/Header'
import { RecetaProvider } from "../context/RecetasContext";
import { AuthProvider } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <RecetaProvider>
            <Header />
            <div class="bg-gray-100 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Recetas exquisitas para cocinar</h1>
                        <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, molestias labore porro nam aperiam ratione veritatis voluptate aspernatur, maxime in vitae quidem provident necessitatibus itaque ut et temporibus a voluptates.</p>
                        <div class="flex justify-center">
                            <Link to={'/recetas'}>
                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ver Recetas</button>
                            </Link>
                            <Link to={'/nueva-receta'}>
                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Tu Propia Receta</button>
                            </Link>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="../public/receta_detalle.jpg" />
                    </div>
                </div>
            </div>
        </RecetaProvider>
    )
}

export default Home