import React from "react";
import { Link } from "react-router-dom";

class Niveles extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Bienvenido a Correcta Expresión</h1>
          <h1>Selecciona un nivel</h1>
          <br />
          <br />
          <div className="container">
            <div className="container">
              <Link
                to="/cara"
                type="button"
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Expresión Facial
              </Link>
              <br />

              <Link
                to="/brazos"
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Brazos
              </Link>
              <br />

              <Link
                to="/cuerpo"
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Cuerpo Completo
              </Link>
              <br />
              <br />
              <br />

              <Link
                to="/evaluacion"
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Evaluación
              </Link>
              <br />

              <Link
                to="/actpractica"
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Actividad Práctica
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Niveles;
