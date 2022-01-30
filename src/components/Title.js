import React from 'react'

//Hacemos desestructiracion de forma que nuestro componente quede mas legible usando la prop especial children, que será lo que envolvamos en nuestro componente title
// Se exporta la constante con nombre Title y el valor, es la arrow function que tenemos.
export const Title= ({ children }) => (
    <h1 className="title">{children}</h1>
)
