import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppContext'

export const Opciones = () => {

    const { actualUsuario, logOut, setFormulario, setSelector } = useContext(AppContext)
    
    const formClearn = {
        usuario: actualUsuario,
        fecha: '',
        sala: ''
    }

    const [values, setValues] = useState(formClearn)
    
    const handleImputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleClick = (clik)=>{
        setFormulario({...values})
        setSelector(clik)
    }

    return (
        <div className="form-group m-5">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="usuario"
                    value={values.usuario}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="fecha"
                    placeholder="Fecha a buscar dd/mm/aa"
                    onChange={handleImputChange}
                    value={values.fecha}
                />
            </div>
            <div className="mb-5">
                <input
                    type="text"
                    className="form-control"
                    name="sala"
                    placeholder="Selecione tipo de sala: Aula, Reuniones o Conferencias"
                    onChange={handleImputChange}
                    value={values.sala}
                />
            </div>
            <button className="btn btn-secondary btn-block mb-3" onClick={()=>handleClick('Mis')}>Mis Reservas</button>
            <button className="btn btn-success btn-block mb-5" onClick={()=>handleClick('Reservar')}>Reservar</button>
            <button className="btn btn-danger" onClick={logOut}>Log Out</button>
        </div> 
    )
}