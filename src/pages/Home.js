import React, { Component } from 'react'

import { Title } from '../components/Title'
import { SendForm } from '../components/SendForrms'
import { List } from '../components/List'

export class Home extends Component {
    //usedList state para controlar cuando hemos usado Selecciona RSS
    state = { usedList: false, results: [] }

    _handleResults = (results) => {
      this.setState({ results, usedList: true })
    }
  
    //Sino devuelve resultados muestra mensaje
     _renderResults (){
    return this.state.results.length === 0
      ? <p>No se han encontrado noticias para listar</p>
      : <List items ={this.state.results} />
     }
    
    render () {
        return (
            <div>
                <Title>LISTADO NOTICIAS RSS</Title>
                <div className='Form-wrapper'>
                    <SendForm onResults={this._handleResults} />
                </div>
                {this.state.usedList
                ? this._renderResults()
                : <small></small>
                } 
            </div>
        )
    }
}