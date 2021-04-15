import React from 'react'

export const Ocupado = (props) => {

    const hora = props.hora

    return <button
        className="btn btn-secondary btn-block mb-2"
        >{`${hora}:00 || RESERVADO`}</button>
}