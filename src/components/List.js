import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Noticia } from './Noticia'

export class List extends Component {
    //Recibe una sola prop items que es el array con todas las noticias que se van a mostrar 
    static propTypes = {
        items: PropTypes.array
    }


render() {
    const { items } = this.props

    return (
        <div className='List'>
            {
                items.map((item, index) => {
                    return ( 
                        <div key={index} className='List-item'>
                             { 
                             /* Al no venir un campo id o similar en los item del rss, he tenido que crear un indice y añadirselo a cada noticia 
                                con el campo index
                             */
                             }
                            <Noticia 
                                 id={index}
                                 title={item.title}
                                 description={item.description}
                                 img={item.img}
                            />
                        </div>
                    )

                })
            }
        </div>
    )
  }
}

