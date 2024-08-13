import React from 'react'
import AgregarReceta from '../components/AgregarReceta'
import ListaRecetas from '../components/ListaRecetas'
import { RecetaProvider } from '../hooks/RecetasContext'

function Home() {
    return (
        <RecetaProvider>
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Recetas</h1>
                    <AgregarReceta />
                    <ListaRecetas />
                </div>
            </div>
        </RecetaProvider>
    )
}

export default Home