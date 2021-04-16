import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppContext'

export const Component = (props) => {

    const { setSelector } = useContext(AppContext)

    const formClearn = {
        nombre: '',
        password: ''
    }

    const [values, setValues] = useState(formClearn)
    
    const handleImputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        if(values.nombre !== '' && values.password !== '') props.loguear(values)
    }

    return (
        <div className="form-group">
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Nombre de usuario"
                        onChange={handleImputChange}
                        value={values.nombre}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        onChange={handleImputChange}
                        value={values.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <button className="btn btn-success mt-4" onClick={()=>setSelector('Registrar')}>Registrarse</button>
        </div> 
    )
}