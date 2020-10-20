import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Rutas from "./components/Rutas";

//import App from './App';
const container = document.getElementById("root");

ReactDOM.render(
  <>
    <Rutas />,
  </>,
  container
);
//CODIGO JSX

/* const jsx = <h1>hola, estudiantes de la media</h1>

const container = document.getElementById('root');

ReactDOM.render(
  jsx,
  container
) */

// ALTERNATIVA REACT JS
/*
const elemento = React.createElement('h1', {}, 'hola, estudiantes de la media');
const container = document.getElementById('root');

ReactDOM.render(
  elemento,
  container
) */

/* const elemento = React.createElement('a', {href:'https://github.com/derlyvivianamurcia'}, 'Github');
const container = document.getElementById('root');

ReactDOM.render(
  elemento,
  container
)
 */

// JSX
/*  const name = 'Viviana'
 const jsx = <h1>Hola, soy {name}</h1>
 const container = document.getElementById('root');

 ReactDOM.render(
   jsx,
   container
 ) */

/* const name = 'Viviana'
const elemento = React.createElement('h1', {}, `hola soy ${name}`);
const container = document.getElementById('root')

ReactDOM.render(
  elemento,
  container
) */

//JSX
/* const jsx = <h1>hola, el resultado de la suma es: {2+2}</h1>
const container = document.getElementById('root');
ReactDOM.render(
  jsx,
  container
) */

/* const suma = () => 3+2
const jsx = <h1>hola, el resultado de la suma es: {suma()}</h1>
const container = document.getElementById('root');

ReactDOM.render(
  jsx,
  container
) */

/* const jsx = <div>
  <h1>
    hola mundo
  </h1>
  <p>
    Soy desarrolladora FrontEnd
  </p>
</div>

const container = document.getElementById('root');

ReactDOM.render(
  jsx,
  container
)
 */
/* const elemento = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola mundo'),
  React.createElement('p', {}, 'Soy dearrolladora FrontEnd')
)
const container = document.getElementById('root')
ReactDOM.render(
  elemento,
  container
)  */
