import estilos from './Lista.module.css'
import { useState, useEffect } from 'react'
import {Filme} from '../componentes/Filme'

export function Lista(){

    const [filmes, setFilmes] = useState([])

    const apiKey = "1383b7fe1786f8e95fd643dab0de58f7"

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&language=pt-BR`)
        .then( resposta => resposta.json() )
        .then( dados => setFilmes(dados.results) )

    }, [])

    return(
        <main className={estilos.conteiner}>
            
            { filmes.map( umFilme => <Filme propsFilme={umFilme} /> ) }
            
        </main>        
    )
}
