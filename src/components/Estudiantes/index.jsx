import MyModal from '../MyModal'
import { useContext, useEffect } from 'react'
import { EstudiantesContex } from '../../contex'
import { PencilIcon, ScissorsIcon } from '@heroicons/react/24/solid'
function EstudiantesA() {

  const { form, handleForm, estudiantes, handeleEdit, 
     value, setValue, datos, susccessCreateSuser, isModalOpen, updateUser,
    setModalEliminar, deleteUsuarios, handeleDelete, modalEliminar, id, saveUser, setIsModalOpen, next, back, users
  } = useContext(EstudiantesContex)

  useEffect(() => {
    datos()
  }, []);


  const estudiantesFilter = estudiantes.filter(elemet => elemet.name.includes(value))

  return (

    <>

      {isModalOpen && <MyModal tille={'crear Usuario'} cerrarModal={setIsModalOpen} aceptarCambios={saveUser} >
        <form className='opacity-50 text-light '>
          <div className="mb-3 ">
            <label className="form-label"><span>Nombre de usuario</span></label>
            <input type="text" name='name' className="form-control" id="exampleFormControlInput1"
              value={form.name}
              onChange={(event) => handleForm(event)}
              placeholder="Nombre de usuario" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email de usuario</label>
            <input type="text" name='email' className="form-control" id="exampleFormControlInput1"
              value={form.email}
              onChange={(event) => handleForm(event)}
              placeholder="Email de usuario" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password de usuario</label>
            <input type="text" name='password' className="form-control" id="exampleFormControlInput1"
              value={form.password}
              onChange={(event) => handleForm(event)}
              placeholder="Password de usuario" />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Avatar de usuaro</label>
            <input type="text" name='avatar' className="form-control" id="exampleFormControlInput1"
              value={form.avatar}
              onChange={(event) => handleForm(event)}
              placeholder="Avatar de usuaro" />
          </div>
        </form>
      </MyModal>}

      {modalEliminar && <MyModal tille={'Desear Eliminar Al Usuario'} cerrarModal={setModalEliminar} aceptarCambios={deleteUsuarios} textButtonSucces={'Eliminae'}>

        <h1> are you sure?</h1>
        <div className='gap-4'>
          <div>
            {/* <button className='btn btn-danger bg-dark text-light ' onClick={() => deleteUsuarios()}> si </button>
            <button className='btn btn-danger bg-dark text-light' onClick={() => setModalEliminar(false)}> no </button> */}
          </div>

        </div>


      </MyModal>}



      <div className='container text-center container-fluid '>
        <div className='d-flex justify-conted-end pt-4 '>
          <button
            onClick={() => setIsModalOpen(true)}
            type="button" className="btn btn-danger bg-dark text-light" >
            <PencilIcon height={40} /> Crear Usuario
          </button>
        </div>

        <div className="rounded">
          <label className="form-label">Buscar</label>
          <input type="text" name='nombre' className="form-control shadow-lg p-3 mb-5 bg-white border border-danger" id="exampleFormControlInput1"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Nombre" />


        </div>





        <div className={susccessCreateSuser || updateUser ? 'alert alert-success' : 'hidden'} role="alert">
          {updateUser && <p>'se a actualizado correctamente'</p>}
          {susccessCreateSuser && <p>'se a guardado correctamente'</p>}



        </div>


        <table className="table table-striped ">
          <thead className='border border-secondary'>
            <tr className='text-center'>
              <th>Id</th>
              <th>Email</th>
              <th>Password</th>
              <th>Name</th>
              <th>Role</th>
              <th>Foto</th>
              <th>Opciones</th>
            </tr>

          </thead>
          <tbody className='border border-danger'>
            {
              estudiantesFilter.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <th> <img className='rounded-circle' height='90' width='90' src={item.avatar}></img></th>

                  <td>
                    <button className='btn btn-danger bg-dark text-light me-md-2'
                      onClick={() => handeleEdit(item.id)}
                    > <PencilIcon width={15} height={15} /> Editar</button>
                    <button onClick={() => handeleDelete(item.id)} className='btn btn-danger bg-dark text-light'>
                      <ScissorsIcon width={15} height={15} />Eliminar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
          <button className='btn btn-danger bg-dark text-light' onClick={back}>Previous</button>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <button className='btn btn-danger bg-dark text-light' onClick={next}>Siguiente</button>
          </ul>
        </nav>
      </div>

    </>


  )

}

export default EstudiantesA
