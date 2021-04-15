import React, { useContext } from 'react'
import { Component } from './Component'
import { AppContext } from '../../../context/AppContext'

export const Registrar = () => {
    
    const { addUsuario } = useContext(AppContext)

    const registrar = async (data)=>{
        
        const usuario = {
            nombre: data.nombre,
            password: data.password
        }
        
        await addUsuario(usuario)
    }
    
    return (
        <div className="card card-body p-5">
            <Component registrar={registrar} />
        </div>
    )
}