import React from "react";
import "../components/styles/Iniciosesion.css";
import "../components/styles/Global.css";
import { Link } from "react-router-dom";

class DListaGrupos extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Grupos">Bienvenido profesor</h1>
        <h2 className="Grupos">Seleccione el grupo que desee ver</h2>
        <div class="ingresar-card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <Link to="/DGrupo9" className="ingresar btn btn-light">
                9
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/DGrupo10" className="ingresar btn btn-light">
                10
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/DGrupo11" className="ingresar btn btn-light">
                11
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DListaGrupos;
