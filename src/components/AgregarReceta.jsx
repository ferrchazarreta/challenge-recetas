import React, { useState, useContext } from 'react'
import { RecetasContext } from '../hooks/RecetasContext'

function AgregarReceta() {
    const { agregarReceta } = useContext(RecetasContext)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const nuevaReceta = {
            id: Date.now(),
            titulo,
            descripcion,
        }
        agregarReceta(nuevaReceta)
        setTitulo('')
        setDescripcion('')
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingrese el título de la receta"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingrese la descripción de la receta"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    Agregar Receta
                </button>
            </form>
        </div>
    )
}

export default AgregarReceta    