import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Registrar } from './pages/registrar'
import { LogIn } from './pages/login'
import { Opciones } from './pages/opciones'
import { MisReservas } from './pages/mis-reservas'
import { Reservar } from './pages/reservar'

export const Selector = () => {

    let { selector } = useContext(AppContext)
    
    switch(selector) {
        case 'LogIn':
            return <LogIn />
        
        case 'Mis':
            return <MisReservas />
                
        case 'Opciones':
            return <Opciones />
            
        case 'Registrar':
            return <Registrar />
        
        case 'Reservar':
            return <Reservar />
        
        default:
            return <LogIn />
    }
}