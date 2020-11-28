import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import header from "../images/header.png";


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container"></div>
          </div>
        </div>
        <h1 className="maintitle">Correcta Expresión</h1>
        <div class="with-bg-size"></div>
        <div class="ingresar-card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <Link to="/iniciarsesion" className="ingresar btn btn-light">
                Iniciar sesión
              </Link>
            </li>
            <li class="list-group-item">
              <Link to="/registro" className="ingresar btn btn-light">
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
        <div class="card-deck">
          <div class="card">
            <img
              src="https://globisinsights.com/wp-content/uploads/2019/04/iStock-528067094-Aleutie-2052-1024x683.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Situación del problema</h5>
              <p class="card-text">
                El pánico escénico es un problema que presentan muchísimas
                personas, de cualquier género, lugar o edad. La persona no
                consigue expresarse bien porque hay un miedo que le frena. Uno
                de los principales motivos es que la persona se siente evaluada
                por el público, tiene miedo al rechazo y por ello siente la
                responsabilidad de gustar y estar al nivel que los asistentes
                esperan.
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://myofficein.ph/wp-content/uploads/2018/10/Killer-Moves-to-Boost-Confidence-and-Success-at-Work.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Objetivo</h5>
              <p class="card-text">
                El objetivo es que por medio de la aplicación, los estudiantes
                de grados 9°, 10° y 11° de la Institución Educativa que
                presentan esta dificultad, reciban recomendaciones y aprendan a
                controlar los nervios y expresarse mucho mejor corporalmente al
                exponer una idea o un tema cualquiera frente a un público.
              </p>
            </div>
          </div>
        </div>
        <div class="card-deck card text-center">
          <div class="card-body">
            <h5 class="card-title">Sobre nosotros</h5>
            <p class="card-text">
              El objetivo es que por medio de la aplicación, los estudiantes de
              grados 9°, 10° y 11° de la Institución Educativa que presentan
              esta dificultad, reciban recomendaciones y aprendan a controlar
              los nervios y expresarse mucho mejor corporalmente al exponer una
              idea o un tema cualquiera frente a un público.
            </p>
          </div>
        </div>{" "}
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
