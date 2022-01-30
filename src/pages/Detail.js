import React, { Component } from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      noticia: this.props.location.state
  }
}

componentDidMount(){
  console.log("componentDidMount: ")
  console.log(this.props)
 
  this.setState({
    noticia: this.props.location.state
  },
  )
}
  render () { 
    console.log("Campos de la noticia en el siguiente array")
    console.log(this.props.location.state)
    return (
      <div className="card">
        <div><ButtonBackToHome />
        </div>
          <div className="card-image">
              <figure className="image-detail">
              <img className="img-center" src={this.state.noticia[0].img} alt={this.state.noticia[0].title} />
              </figure>
          </div>
          <div className="card-content">
              <div className="media">
                  <div className="media-content">
                      <p className="title is-4">{this.state.noticia[0].title}</p>
                      <p >{this.state.noticia[0].description}</p>
                  </div>
              </div>
          </div>    
      </div>
    )
  }
  
};
