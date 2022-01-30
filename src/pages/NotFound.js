import React from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

/* He creado este componente para que desde http://localhost:3000/ si se añade una ruta que no existe devuelva un error 404 */
export const NotFound = () => (
    <div>
        <h1 className='title'>404!</h1>
        <h2>No existe la página</h2>
        <ButtonBackToHome />
    </div>
)