import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'

import axios from 'axios'

function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;

    const consultaApiLetra = async () => {
      const {artista, cancion} = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, info] = await Promise.all([
        axios(url),
        axios(url2)
      ])
      
      setLetra(letra.data.lyrics)
      setInfo(info.data.artists[0])
      console.log(info.data.artists[0])
    }

    consultaApiLetra()

  }, [busquedaLetra])
  return (
    <div>
      <Header setBusquedaLetra={setBusquedaLetra}/>
      <Main info={info} letra={letra} busquedaLetra={busquedaLetra}/>
    </div>
  );
}

export default App;
