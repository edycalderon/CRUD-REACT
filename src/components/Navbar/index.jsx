import { NavLink, useNavigate } from "react-router-dom"
import { EstudiantesContex } from "../../contex"
import { useContext } from "react"
const Navbar = () => {
    const { setErrorLogin } = useContext(EstudiantesContex)
    const navigate = useNavigate()

    const cerrarSession = () => {
        
            setErrorLogin(false)
            localStorage.removeItem('user'),
                navigate('/')
        
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/estudiantes'}>
                                Estudiantes
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">

                            <NavLink className="nav-link text-right" to={'/materias'}>
                                Materiales
                                
                            </NavLink>

                        </li>
                    </ul>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link text-right" onClick={() => cerrarSession()}>
                                Cerrar Seccion
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar