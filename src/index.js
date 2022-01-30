import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';


ReactDOM.render(
    //Le indicamos a react-route que tiene que usar este tipo de enrutado cuando trabaje con rutas
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

