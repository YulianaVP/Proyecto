import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Cuerpo extends React.Component {
  render() {
    return (
      <div>
        <Link to="/niveles" class="btn">
          Volver
        </Link>
        <h1 className="titulonivel">Cuerpo</h1>
        <p className="desc">
          Observa el video y luego contesta las preguntas que encontrarás debajo
          de este.
        </p>
        <div class="resp-container">
          <iframe
            title="video"
            class="resp-iframe"
            src="https://www.youtube.com/embed/12xmHxh-L7c"
          ></iframe>

          <br />
          <div className="container text-center">
            <div className="row justify-content-md-center">
              <div class="col col-lg-5">
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <h5 class="card-title">Responde la siguiente pregunta</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      ¿Es correcto quedarse en un solo sitio cuando expones un
                      tema?
                    </p>
                    <button type="button" class="btn btn-outline-secondary">
                      Si
                    </button>
                    &nbsp;
                    <button type="button" class="btn btn-outline-secondary">
                      No
                    </button>
                  </div>
                </div>
              </div>
              <div class="col col-lg-5">
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <h5 class="card-title">Responde la siguiente pregunta</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      ¿Está bien moverse con un propósito específico?
                    </p>
                    <br />
                    <button type="button" class="btn btn-outline-secondary">
                      Si
                    </button>
                    &nbsp;
                    <button type="button" class="btn btn-outline-secondary">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><hr/>
        <Footer/>      </div>
    );
  }
}

export default Cuerpo;
