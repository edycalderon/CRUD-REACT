import { Route, Routes } from "react-router-dom"
import Navbar from "../Navbar"
import EstudiantesA from "../Estudiantes"
import Materia from "../Materias"
import Auth from "../Auth"

const Layout = () => {
    return(
        <>
        <Auth>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="/estudiantes" element={<EstudiantesA/>}/>
                <Route path="/Materias" element={<Materia/>}/>
            </Routes>
            
        </div>
        </Auth>
        
        </>
    )
}

export default Layout