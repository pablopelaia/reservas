import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'

export const Component = (props) => {

    const {eliminarReserva} = useContext(AppContext)

    const { reserva } = props
    const fecha = reserva.fecha
    const hora = reserva.hora
    const id = reserva.id
    const sala = reserva.sala
    const texto = `Fecha: ${fecha} || Hora: ${hora}:00 || lugar: ${sala}`
    const handleClick = ()=>{
        eliminarReserva(id)
    }

    return <button
            className="btn btn-outline-dark btn-block mb-2"
            onClick={handleClick}
            >{texto}</button>
}