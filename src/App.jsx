import { Router } from 'react-router-dom'
import Login from './components/Login'
import './js/main'
import { EstudiantesContex } from './contex'
import EstudiantesA from './components/Estudiantes'


function App() {
  return (
    <>

      <EstudiantesProvider>
        <Router/>
        
      </EstudiantesProvider>
      <Login></Login>
    </>
  )

}

export default App
