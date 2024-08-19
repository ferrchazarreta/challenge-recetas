import React from 'react'
import { RecetaProvider } from '../context/RecetasContext'
import Recetas from '../components/Recetas'
import Header from '../components/Header'

function ListaRecetas() {
    return (
        <RecetaProvider>
            <Header />
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center my-10">Lista de Recetas</h1>
                    <Recetas />
                </div>
            </div>
        </RecetaProvider>
    )
}

export default ListaRecetas     