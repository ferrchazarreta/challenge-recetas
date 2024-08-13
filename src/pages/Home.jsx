import React from 'react'
import AgregarReceta from '../components/AgregarReceta'
import ListaRecetas from '../components/ListaRecetas'
import { RecetaProvider } from '../hooks/RecetasContext'

function Home() {
    return (
        <RecetaProvider>
            <div className="container">
                <h1 className="text-center">Recetas</h1>
                <AgregarReceta />
                <ListaRecetas />
            </div>
        </RecetaProvider>
    )
}

export default Home