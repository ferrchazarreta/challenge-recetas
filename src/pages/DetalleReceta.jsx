import React from 'react'
import { RecetaProvider } from '../context/RecetasContext'
import Detalle from '../components/Detalle'
import Header from '../components/Header'


function DetalleReceta() {
    return (
        <RecetaProvider>
            <Header/>
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <Detalle/>
                </div>
            </div>
        </RecetaProvider>
    )
}

export default DetalleReceta