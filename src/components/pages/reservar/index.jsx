import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import { Disponible } from './Disponible'
import { Ocupado } from './Ocupado'

export const Reservar = () => {

    const { buscarReservasPorDia, formulario, logOut, setSelector } = useContext(AppContext)
    
    const { fecha, sala } = formulario

    if(sala !== 'Aula' && sala !== 'Reuniones' && sala !== 'Conferencias'){
        alert('Tipo de sala incorrecta')
        setSelector('Opciones')
    }
    
    const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    const reservas = buscarReservasPorDia(fecha, sala)
    
    return (
        <div className="form-group m-1">
            <button className="btn btn-info btn-block mb-2">{`Elija horario para reservar la sala ${sala}`}</button>
            {
                horarios.map(h => reservas.includes(h)? <Ocupado hora={h} /> : <Disponible hora={h} />)
            }
            <button className="btn btn-danger mt-3 mr-3" onClick={logOut}>Log Out</button>
            <button className="btn btn-warning mt-3" onClick={()=>setSelector('Opciones')}>Volver</button>
        </div> 
    )
}