import React from 'react'
import { Link } from 'react-router-dom'

/* Boton para volver a la portada desde el detalle de una noticia o desde un error 404*/
export const ButtonBackToHome = () => (
    <Link
        className='button is-info'
        to='/'>
        Volver a la portada
    </Link> 
)