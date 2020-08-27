import React from 'react'

const Main = ({ letra, busquedaLetra, info }) => {

    const {artista, cancion} = busquedaLetra
    const {strBiographyES, strGenre, strWebsite, strArtistThumb} = info
    return (
        <main className="container flex">
            <div className="left">

            {letra.length === 0 ? null : <> <img src={strArtistThumb} alt={artista} />
                <p><strong>Genero: </strong>{strGenre}</p>
                <span>Sitio web: <a href={strWebsite}>{strWebsite}</a> </span>
                <h2>Biografia</h2><p>{strBiographyES}</p>
                </> } 
            </div>



            <div className="right">
            {letra.length === 0 ? null : <h2>{artista} - {cancion}</h2>}
                
                <p>{letra}</p>
            </div>
        </main>
    )
}

export default Main
