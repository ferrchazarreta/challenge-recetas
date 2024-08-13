import React, { useContext } from 'react';
import { RecetasContext } from '../hooks/RecetasContext';

function ListaRecetas() {
    const { recetas } = useContext(RecetasContext)
    const {eliminarReceta} = useContext(RecetasContext)
    if (!recetas) {
        return <p>No hay recetas disponibles.</p>;
    }
    return (
        <div className="container">
            <h1 className="text-center my-5">Lista de Recetas</h1>
            <div className="row">
                {recetas.map(receta => (
                    <div key={receta.id} className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{receta.titulo}</h5>
                                <p className="card-text">{receta.descripcion}</p>
                                <button onClick={() => eliminarReceta(receta.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
        )   
}
export default ListaRecetas 