import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');
//const elemento = React.createElement(componente, propiedades, hijos);
//const elemento = React.createElement('h1', {className: 'saludo'}, 'Hello world');//como se puede tener varias propiedades se pone como objeto js
//const elemento = <h1>Hola mundo</h1>;// uso de JSX
//ReactDOM.render(elemento, root);//elemento es el elemento a renderizar en el segundo parametro
//ReactDOM.render(elemento, root);
//ReactDOM.render(<h1 className="saludos">Hola mundo</h1>, root);// uso directo de JSX, se usa className
ReactDOM.render(<App />, root);