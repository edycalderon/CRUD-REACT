import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './scss/styles.scss'
//import { Router, RouterProvider } from 'react-router-dom'
import Router from './routes'
import { EstudiantesContex } from './contex/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <EstudiantesContex></EstudiantesContex>
    </Router>
  </StrictMode>,
)
