import React from "react";
import "../components/styles/Iniciosesion.css";
import "../components/styles/Global.css";
import { Link } from "react-router-dom";

class TipoCuenta extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Grupos">Selecciona el tipo de cuenta</h1>
        <div class="ingresar-card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <Link to="/grupos" className="ingresar btn btn-light">
                Estudiante
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/dlistagrupos" className="ingresar btn btn-light">
                Docente
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TipoCuenta;
