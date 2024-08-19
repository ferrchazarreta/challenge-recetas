import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { RecetasContext } from '../context/RecetasContext'
import Recetas from '../components/Recetas'

function Detalle() {
    const { id } = useParams()
    const { recetas } = useContext(RecetasContext)
    const recetaSeleccionada = recetas.find(receta => receta.id === Number(id))
    console.log(recetas)
    if (!recetaSeleccionada) {
        return <p>Receta no encontrada</p>
    }
    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col items-center text-center w-full mb-32">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded" alt="hero" src='../public/receta_detalle.jpg'/>
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-10">Recetas Exquisitas</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{recetaSeleccionada.titulo}</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{recetaSeleccionada.descripcion}</p>
            </div>
            <h2 className='text-3xl font-bold text-center mb-5'>Descubre mas recetas</h2>
            <Recetas/>
        </div>
    </section>
    )
}

export default Detalle