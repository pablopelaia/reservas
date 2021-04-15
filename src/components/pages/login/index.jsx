import React, { useContext } from 'react'
import { Component } from './Component'
import { AppContext } from '../../../context/AppContext'

export const LogIn = () => {
    
    const { logIn } = useContext(AppContext)

    const loguear = async (usuario)=> await logIn(usuario)
    
    return (
        <div className="card card-body p-5">
            <Component loguear={loguear} />
        </div>
    )
}