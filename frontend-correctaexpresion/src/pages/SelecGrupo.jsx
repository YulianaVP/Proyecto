import React from "react";
import "../components/styles/Iniciosesion.css";
import "../components/styles/Global.css";
import { Link } from "react-router-dom";

class SelecGrupo extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Grupos">Selecciona el grupo al que perteneces</h1>
        <div class="ingresar-card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <Link to="/niveles" className="ingresar btn btn-light">
                9
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/niveles" className="ingresar btn btn-light">
                10
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/niveles" className="ingresar btn btn-light">
                11
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SelecGrupo;
