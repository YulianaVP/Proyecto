import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Evaluacion extends React.Component {
  render() {
    return (
      <div>
        <Link to="/niveles" class="btn">
          Volver
        </Link>
        <div className="container text-center">
          <br />
          <h1>RESPONDE SI ES "FALSO" O "VERDADERO"</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  src="https://2.bp.blogspot.com/-Fneq1u7Elqg/WQtomTONAJI/AAAAAAAABts/kq3T6BCGoM8ts-u50lZJXQchrfbzHr8mACLcB/s1600/microphone-1804148_1920.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Apartar la vista del público les dará a entender que te
                    sientes condiado y con interes.
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">
                      Falso
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Verdadero
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img
                  src="https://www.bloguismo.com/wp-content/uploads/2014/06/C%C3%B3mo-disfrutar-al-hablar-en-p%C3%BAblico.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Esconder las manos transmite falta de honestidad.
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">
                      Falso
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Verdadero
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  src="https://us.123rf.com/450wm/melnyk58/melnyk581701/melnyk58170100981/70228447-ponente-en-la-reuni%C3%B3n-de-negocios-en-la-sala-de-conferencias-.jpg?ver=6"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Señalar o apuntar con un dedo a alguien es un gesto muy
                    amigable.
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">
                      Falso
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Verdadero
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img
                  src="https://www.lapatilla.com/wp-content/uploads/2019/10/Drew-Scanlon.jpg?w=640&resize=640%2C360"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Parpadear demaciadas veces en poco tiempo demuestra
                    nerviosismo.
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">
                      Falso
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Verdadero
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <img
                  src="https://i0.wp.com/virtualuagrm.com/wp-content/uploads/2020/03/Estudiante-hablando-en-p%C3%BAblico.jpeg?fit=800%2C492&ssl=1"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    No es necesaria una correcta respiración al hablar.
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-secondary">
                      Falso
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Verdadero
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <button type="button" class="btn btn-outline-secondary btn-lg btn-block">Enviar y ver evaluación</button>
        
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><h4>Este es tu progreso en la evaluación</h4>
      <ProgressBar animated now={45} />
      <p className="lead">45%</p></Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>

        </div>
        <hr/>
        <Footer/>   
        </div>
    );
  }
}
export default Evaluacion;
