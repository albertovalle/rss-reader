import React from 'react'


//componetne funcional puto y creamos funcion con arrow fuction, utilizar evaulaciones dentro del elemento el tittle lo recuparmos de las propos
//hacemos desestructiracion de forma que nuestro componetne quede mas legilebl
//usamos  prop especial children titulo sera lo que envolvamos en nuestro componente title
// se exporta constante con nombre Title y el valor es la arrow function que tenemos-
//usamos bulma para estilar estilos nuestros componentes
//componente de intercafe
//bulma lo usamos en el searhForm
export const Title= ({ children }) => (
    <h1 className="title">{children}</h1>
)