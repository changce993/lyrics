import React, { useState } from 'react'
import './header.css'

const Header = ({ setBusquedaLetra }) => {

    const [error, setError] = useState(false)
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const {artista, cancion} = busqueda

    const guardarBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true)
            return
        }

        setError(false)
        setBusquedaLetra(busqueda)
    }

    return (
        <header>
            <form className="flex justify-center container" onSubmit={handleSubmit}>
                <h1>Consigue la letra e informacion sobre el artista que quieras</h1>
                <input
                    name="artista"
                    placeholder="Que artista quieres buscar"
                    type="text" 
                    onChange={guardarBusqueda}
                    value={artista}
                />

                <input
                    name="cancion"
                    placeholder="Que canción quieres buscar"
                    type="text" 
                    onChange={guardarBusqueda}
                    value={cancion}
                />
                <button type="submit">Buscar</button>
                { error ? <h1>Todos los campos son obligatorios</h1> : null}
            </form>
        </header>
    )
}

export default Header
