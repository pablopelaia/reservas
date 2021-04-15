import React, { useEffect, useState } from 'react'
import { db } from '../connection/firebase'

let AppContext = React.createContext()
let { Provider, Consumer } = AppContext


function AppProvider({ children }) {
    
    const [selector, setSelector] = useState('Inicio')
    const [actualUsuario, setActualUsuario] = useState('')
    const [usuarios, setUsuarios] = useState([])
    const [reservas, setReservas] = useState([])
    const [salas, setSalas] = useState([])
    const [formulario, setFormulario] = useState([])
    
    useEffect(() => {
        getReservas()
        getSalas()
        getUsuarios()
    }, [])

    async function getUsuarios (){

        db.collection('Usuarios').onSnapshot((querySnapshot)=> {
            let arreglo = []
            querySnapshot.forEach(doc => {
                arreglo.push({...doc.data(), id: doc.id})
            })
            setUsuarios(arreglo)
        })
    }

    async function addUsuario(data) {
        
        let exist = false
        
        usuarios.map(u => {
            if (u.nombre === data.nombre) exist = true
        })

        if(exist) {
            alert('el nombre de usuario ya existe')
        } else {
            await db.collection('Usuarios').doc().set(data)
            alert('Usuario agregado')
            setSelector('LogIn')
            await getUsuarios()
        }
    }

    async function logIn(data){
   
        let conectar = false

        usuarios.map(u => {
            if (u.nombre === data.nombre && u.password === data.password) conectar = true
        })

        if(conectar){
            setActualUsuario(data.nombre)
            alert('conectado')
            setSelector('Opciones')
        }else{
            alert('Usuario o contraseña incorrecta')
        }
    }

    function logOut(){
        setActualUsuario('')
        setSelector('LogIn')
    }

    async function getReservas (){

        db.collection('Reservas').onSnapshot((querySnapshot)=> {
            let arreglo = []
            querySnapshot.forEach(doc => {
                arreglo.push({...doc.data(), id: doc.id})
            })
            setReservas(arreglo)
        })    
    }

    async function addReserva(data)  {
        
        await db.collection('Reservas').doc().set(data)
        await getReservas()
    }

    function buscarReservasPorDia(fecha, sala) {

        let arreglo = []

        reservas.map(r =>{
            if (r.fecha === fecha && r.sala === sala) arreglo.push(r.hora)
        })

        return arreglo
    }

    function buscarReservasPorUsuario(){

        let arreglo = []

        reservas.map(r =>{
            if (r.usuario === actualUsuario) arreglo.push(r)
        })

        return arreglo
    }

    async function eliminarReserva(id){

        if(window.confirm('está seguro que quiere eliminar la reserva')) {
            await db.collection('Reservas').doc(id).delete()
            alert('Reserva eliminada')
        }
    }

    async function getSalas (){
        
        db.collection('Salas').onSnapshot((querySnapshot)=> {
            let arreglo = []
            querySnapshot.forEach(doc => {
                arreglo.push({...doc.data(), id: doc.id})
            })
            setSalas(arreglo)
        })
    }

    async function addSala(data)  {
        
        await db.collection('Salas').doc().set(data)
        await getSalas()
    }

    return (
        <Provider value={{
            actualUsuario,
            formulario,
            reservas,
            salas,
            selector,
            usuarios,
            addReserva,
            addSala,
            addUsuario,
            buscarReservasPorDia,
            buscarReservasPorUsuario,
            eliminarReserva,
            getReservas,
            getSalas,
            getUsuarios,
            logIn,
            logOut,
            setFormulario,
            setSelector
        }}>
            {children}
        </Provider>
    )
}

export { AppProvider, Consumer as AppConsumer, AppContext }