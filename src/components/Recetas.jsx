import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';
import { Link } from 'react-router-dom';

function ListaRecetas() {
    const { recetas } = useContext(RecetasContext)
    const { eliminarReceta } = useContext(RecetasContext)

    if (!recetas) {
        return <p className="text-center text-gray-500 mt-5">No hay recetas disponibles.</p>;
    }
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recetas.map(receta => (
                    <div key={receta.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-5">
                            <h5 className="text-xl font-semibold mb-2">{receta.titulo}</h5>
                            <p className="text-gray-700 mb-4">{receta.descripcion}</p>
                            <Link to={`/recetas/${receta.id}`} key={receta.id}>
                                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold mx-1 py-2 px-4 rounded">
                                    Ver Receta
                                </button>
                            </Link>
                            <button
                                onClick={() => eliminarReceta(receta.id)}
                                className="bg-red-500 text-white font-bold mx-1 py-2 px-4 rounded"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ListaRecetas 