import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context/AppContext'

export const Component = (props) => {

    const { setSelector } = useContext(AppContext)

    const formClearn = {
        nombre: '',
        password: '',
        repetir: ''
    }

    const [values, setValues] = useState(formClearn)
    
    const handleImputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        
        if(values.password === '' || values.nombre === '') {
            alert('Debe completar todos los campos')
        }else{
            if(values.password === values.repetir) {
                props.registrar(values)
            }else{
                alert('contraseñas no coinciden')
            }
        }
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
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        onChange={handleImputChange}
                        value={values.password}
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="password"
                        className="form-control"
                        name="repetir"
                        placeholder="Ingrese nuevamente su contraseña"
                        onChange={handleImputChange}
                        value={values.repetir}
                    />
                </div>
                <button type="submit"className="btn btn-success btn-block">Registrarse</button>
            </form>
            <button className="btn btn-primary mt-4" onClick={()=>setSelector('LogIn')}>Loguearse</button>
        </div> 
    )
}