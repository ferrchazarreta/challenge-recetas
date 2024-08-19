import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import DetalleReceta from './pages/DetalleReceta'
import ListaRecetas from './pages/ListaRecetas'
import NuevaReceta from './pages/NuevaReceta'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/recetas",
    element: <ListaRecetas />
  },
  {
    path: "/nueva-receta",
    element: <NuevaReceta />
  },
  {
    path: "/recetas/:id",
    element: <DetalleReceta />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
