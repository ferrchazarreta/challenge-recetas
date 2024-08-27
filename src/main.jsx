import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home'
import DetalleReceta from './pages/DetalleReceta'
import ListaRecetas from './pages/ListaRecetas'
import NuevaReceta from './pages/NuevaReceta'
import Login from './pages/Login'
import Register from './pages/Register'


import { AuthProvider, RutaProtegida } from './context/AuthContext'

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
    element: (
      <RutaProtegida>
        <NuevaReceta />
      </RutaProtegida>
    )
  },
  {
    path: "/recetas/:id",
    element: <DetalleReceta />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
