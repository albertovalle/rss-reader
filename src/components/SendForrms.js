import React, { Component } from 'react'

export class SendForm extends Component {
    /* En inputRss iria lo que le quiero enviar por elemento onChange de un input, que tal y como lo he dejado no voy a usarlo
       pasandole metodo(_handleChange) que se ejecuta cada vez que hay un cambio de opción
    */
    /*  state = {
            inputRss: ''
        }
    */
    //Se usa para guardar en el state del componente el texto que queremos enviar por el input
    /*
    _handleChange= (e) => {
        this.setState({ 
            inputRss: e.target.value
        })
    }
    */ 
    /*
        Quería haber añadido la funcionalidad de poder insertar por pantalla la url de rss y luego poder listarlo, seleccionando entre varios
        rss pero no me ha dado tiempo.
        Lo he dejado con un rss a fuego, aunque he visto que no todos los rss son iguales y la forma de extraer la imagen no es igual para todos.  
    */  
    _handleSubmit = async e => {
        //evitar que se ejecute el evento nativo que hace el navegador al enviar el formulario
        e.preventDefault();
        //const { inputRss  } = "inputRss"
        const inputRss  = "https://as.com/rss/tags/ultimas_noticias.xml"
        //Uso api.allorigins para extraer el contenido sin problemas
        const res = await fetch(`https://api.allorigins.win/get?url=${inputRss}`)
        //const res = await fetch(`https://api.allorigins.win/get?url=https://as.com/rss/tags/ultimas_noticias.xml`)   
        const { contents } = await res.json()  
        //Hemos recuperado el contenido del xml
        //console.log(contents) 
        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        const items = feed.querySelectorAll("item");

        console.log("Tenemos el Nodelist con los item de cada noticia"); 
        console.log(items); 
         
        //Recorro el Nodelist para extraer los campos que me hacen falta para mostrar por pantalla
        const feedItems = [...items].map
        ((el) => ({  
                // Elimino de titulo y noticia para extraer lo que hay dentro de CDATA limpio
                title: el.querySelector("title").innerHTML.slice(9,-3), 
                description: el.querySelector("description").innerHTML.slice(9,-3), 
                img: el.querySelector("enclosure").getAttribute('url')
            }));
            
        console.log('En el array están los campos con la información que voy a listar por pantalla de cada registro')
        console.log(feedItems);
        this.props.onResults(feedItems)
    }

    render () {
        return (           
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="">
                        { /* Estaba pensado para poder escoger los rss de cada noticia si me daba tiempo a implementarlo
                        <select className="input" value={this.state.inputRss} onChange={this._handleChange}></select>*/}
                        <select className="input">
                            <option value="AS">AS</option>
                        </select>
                    </div>                 
                    <div className="control"> 
                        <button className="button is-info">
                        Selecciona RSS
                        </button>
                    </div>
                </div>
            </form>
        )    
    } 
}
