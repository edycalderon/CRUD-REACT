import { useContext } from "react"
import { EstudiantesContex } from "../../contex"
import { XMarkIcon, ScissorsIcon} from '@heroicons/react/24/solid'

const MyModal = ({ children , cerrarModal, tille, aceptarCambios, textButtonSucces}) => {
    const { saveUser, isEdit, updateEstudent, id, form, errores, errorLoanding,
        setIsModalOpen, errorLogin, modalEliminar, 
    } = useContext(EstudiantesContex)
    return (
        <>


            <div className='d-flex justify-content-center align-items-center '
                style={{
                    zIndex: 1, position: 'fixed', left: 0, top: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(34,34,34,0.90)'
                }}
            >

                <div className="p-2 bg-info w-50 bg-dark" style={{ zIndex: 1, position: "absolute" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header d-flex justify-content-lg-between">
                                <h1 className="modal-tile fs-5  text-light" id="exampleModalLabel" > {tille}  {isEdit ? 'Editar estudiante' : 'Crear Usuario'} </h1>
                                <XMarkIcon className="btn btn-danger bg-dark text-light" height={50} width={50} onClick={() => cerrarModal(false)} />

                            </div>


                            <div className={errorLogin ? 'alert alert-danger' : 'hidden'} role="alert">
                                <ul>
                                    {
                                        errores.map(error => (
                                            <li key={error}>{error}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="modal-body">
                                {children}
                            </div>

                            
                                <div className="modal-footer gap-4">
                                    <button onClick={() => cerrarModal(false)} type="button" className="btn btn-danger bg-dark text-light" >
                                        cerrar</button>

                                    <button onClick={aceptarCambios}
                                        //() => isEdit ? updateEstudent(id, form) : saveUser()
                                        type="button"
                                        className="btn btn-danger bg-dark text-light" >  
                                        {textButtonSucces}
                                        {textButtonSucces ? '' : isEdit ? 'Actualizar' : 'Crear'}</button>
                                </div>


                            


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyModal