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
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el título de la receta"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese la descripción de la receta"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                >Agregar Receta</button>
            </form>
        </div>
    )
}

export default AgregarReceta    