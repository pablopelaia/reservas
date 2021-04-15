import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'

export const Disponible = (props) => {

    const { actualUsuario, addReserva, formulario } = useContext(AppContext)

    const { fecha, sala } = formulario
    const reserva = {fecha: fecha, hora: props.hora, sala: sala, usuario: actualUsuario}
    const hora = `${props.hora}:00`
    
    const handleClick = ()=>{
        
        if(window.confirm('Quiere realizar la reserva de la sala')) {
            addReserva(reserva)
            alert('Reserva confirmada')
        }
    }

    return <button
        className="btn btn-outline-success btn-block mb-2"
        onClick={handleClick}
    >{`${hora} || DISPONIBLE`}</button>
}