import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const EstudiantesContex = createContext()


export const EstudiantesProvider = ({ children }) => {
    //para hacer el local estorage es creara un estado que sea un objeto vacio que este seria  const [estudiantes, setEstudiantes] = useState([])
    const [estudiantes, setEstudiantes] = useState([])
    console.log(estudiantes)
    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = useState(false)
    const [updateUser, setUpdateUser] = useState(false)
    const [id, setId] = useState(0)
    const [susccessCreateSuser, setSusccessCreateSuser] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [errorLoanding, setErrorLoanding] = useState(false)
    const [errores, setErrores] = useState([])
    const [users, setUsers] = useState([])
    const [modalEliminar, setModalEliminar] = useState(false)
    const [form, setForm] = useState(
        { name: '', email: '', password: '', avatar: '' }
    )
    const [itemsByPage, setItemsByPage] = useState(10)

    const handleForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    //esta funcion nos ayuda para poder editar la informacion de un estudiante
    const handeleEdit = async (id) => {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`)
        setForm(response.data)
        setIsModalOpen(true)
        setIsEdit(true)
        setId(id)
        setErrores([])
    }


    // const obtenerUsuario  = async () =>{
    //     const user
    // }


    // const updateEstudent = async (id, data) => {
    //     try {
    //         await axios.put(`https://api.escuelajs.co/api/v1/users/${id}`, data)
    //         setErrores([])
    //         setIsModalOpen(false)
    //         setUpdateUser(true)
    //         setSusccessCreateSuser(false)
    //         setErrorLogin(false)
    //     } catch (error) {
    //         if (error.status != 400) {
    //             setErrores(['ocurrio un error en el servidor, intenta de nuevo'])
    //             setErrorLogin(true)
    //         } else {
    //             setErrores(error.response.data.message)
    //             setErrorLogin(true)
    //         }
    //     }
    // }

    //para setiar  el formulario
    const resetForm = () => {
        setIsEdit(false)
        setErrorLogin(false)
        setErrores([])
        
        setForm({ name: '', email: '', password: '', avatar: '' })
    }







    //saveEstudent es la funcion que se va a activar cada ves que le demos click al boton aguardar
    const saveUser = async () => {
        try {
            if (isEdit) {
                try {
                    await axios.put(`https://api.escuelajs.co/api/v1/users/${id}`, data)
                    setErrores([])
                    setIsModalOpen(false)
                    setUpdateUser(true)
                    setSusccessCreateSuser(false)
                    setErrorLogin(false)
                } catch (err) {
                    if (err.status != 400) {
                        setErrores(['ocurrio un error en el servidor, intenta de nuevo'])
                        setErrorLogin(true)
                    } else {
                        setErrores(err.response.data.message)
                        setErrorLogin(true)
                    }
                }

            } else 
            {
                await axios.post('https://api.escuelajs.co/api/v1/users/', form)
                setSusccessCreateSuser(true)
                setIsModalOpen(false)
                setErrorLogin(false)
                setUpdateUser(false)
                setErrores([])
            }
        } catch (err) {
            setSusccessCreateSuser(false)
            setIsModalOpen(true)
            setErrorLogin(true)
            setErrores(err.response.data.message)
        }
    }


    const login = async (event, email, password) => {
        event.preventDefault()
        try {
            const user = await axios.post('https://api.escuelajs.co/api/v1/auth/login',
                { email, password },

            );
            if (user.status === 201) {
                navigate('/estudiantes')
                localStorage.setItem('user', JSON.stringify(user.data))
            }
        } catch (error) {
            setErrorLogin(true)
        }
    }

    const datos = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/users',);
            setEstudiantes(response.data.slice(0, itemsByPage ))
            setUsers(response.data)
        } catch (error) {
            setSusccessCreateSuser(true)
            setErrorLogin(true)
            setErrorLoanding(true)
        }
    }

    const next = () => {
        setItemsByPage(itemsByPage + 10)
        setEstudiantes(users.slice(itemsByPage , itemsByPage + 10))

    }
    const back = () => {
            setItemsByPage(itemsByPage - 10)
            setEstudiantes(users.slice(itemsByPage - 20 , itemsByPage - 10 ))
        


    }

    const handeleDelete = (id) => {
        
        setModalEliminar(true)
        setId(id)
    }

    const deleteUsuarios = async () => {

        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/users/${id}`,)
            setId(null)
            setModalEliminar(false)
        } catch (error) {

        }
    }


    return (
        <EstudiantesContex.Provider value={{
            back,
            setErrorLogin,
            handeleDelete,
            deleteUsuarios,
            modalEliminar, setModalEliminar,
            updateUser, setUpdateUser,
            setIsModalOpen,
            errores,
            errorLoanding,
            isModalOpen,
            susccessCreateSuser, setSusccessCreateSuser,
            saveUser,
            susccessCreateSuser,
            susccessCreateSuser,
            datos,
            datos,
            errorLogin,
            login,
            value, setValue,
            form,
            handleForm,
            estudiantes,
            setEstudiantes,
            handeleEdit,
            resetForm,
            isEdit,
            next,
            id,
            users,
        }}>
            {children}
        </EstudiantesContex.Provider>
    );
}