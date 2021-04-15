import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import { Component } from './Component'

export const MisReservas = () => {

    const {buscarReservasPorUsuario, logOut, setSelector} = useContext(AppContext)
    
    let reservas = buscarReservasPorUsuario()

    return (
        <div className="form-group m-5">
            <h1>MIS RESERVAS</h1>
            {reservas.map(r => <Component key={r.id} reserva={r}/>)}
            <button className="btn btn-danger mt-5 mr-5" onClick={logOut}>Log Out</button>
            <button className="btn btn-warning mt-5" onClick={()=>setSelector('Opciones')}>Volver</button>
        </div> 
    )
}