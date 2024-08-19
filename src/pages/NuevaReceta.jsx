import React from 'react'
import { RecetaProvider } from '../context/RecetasContext'
import Header from '../components/Header'
import AgregarReceta from '../components/AgregarReceta'


function NuevaReceta() {
  return (
    <RecetaProvider>
            <Header />
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center my-10">Nueva Receta</h1>
                    <AgregarReceta />
                </div>
            </div>
        </RecetaProvider>
  )
}

export default NuevaReceta  