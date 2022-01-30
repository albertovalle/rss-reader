import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

//Inicializo componente extendiendo de Component añadiendo una Propiedad estatica propTypes para indicarle que props usa el componente
export class Noticia extends Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        img: PropTypes.string
    }

    render () {
        //props extraidas guardadas en const
        const { id, title, description, img } = this.props

        return (
            /* Tendremos la caja div para cada que cada noticia tenga un enlace
               Con el componente Link de react-router-dom se hacen las navegaciones usando el enrutado indicado.           
            */
            <Link to={
            {
                pathname: `/detalle/${id}`,
                state: [{id , title, description, img }]
              }
                } className="card">
                 <div key={id} className="card">
                    <div className="card-image">
                        <figure className="image">
                        <img src={img} alt={title}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="module line-clamp">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>            
            </Link>
        )
        
    }
}


