import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../components/Login"
import { EstudiantesProvider } from "../contex"
import Layout from "../components/Layout"


const Router = () => {
   
    return (
        <BrowserRouter>
            <EstudiantesProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    
                    <Route path="/*" element={<Layout />} />

                    
                </Routes>
            </EstudiantesProvider>


        </BrowserRouter>
    )
}

export default Router


