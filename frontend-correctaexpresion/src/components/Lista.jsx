import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import poster from "../images/poster.jpg";
import "../components/styles/Global.css";
class Lista extends React.Component {
  render() {
    return (
      <div className="container">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                className="nombre"
                as={Button}
                variant="link"
                eventKey="0"
              >
                {this.props.nombre}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="row">
                  <div className="col-md-3">
                    <img src={this.props.img} alt="" className="avatar" />
                  </div>
                  <div className="col-md-9">
                    <h3 className="nombrealumno">{this.props.nombre}</h3>
                  </div>
                </div>
                <hr />
                <h4 className="text-center">Progreso del estudiante</h4>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <p className="lead">Questionario Expresión Facial</p>
                  </div>
                  <div className="col-md-6">
                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Respuestas Correctas</th>
                          <th scope="col">Respuestas Fallidas</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span class="badge badge-pill badge-light">
                              {this.props.questionsefc}
                            </span>
                          </td>
                          <td>
                            <span class="badge badge-pill badge-light">
                              {this.props.questionseff}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <p className="lead">Questionario Brazos</p>
                  </div>
                  <div className="col-md-6">
                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Respuestas Correctas</th>
                          <th scope="col">Respuestas Fallidas</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span class="badge badge-pill badge-light">
                              {this.props.questionsbc}
                            </span>
                          </td>
                          <td>
                            <span class="badge badge-pill badge-light">
                              {this.props.questionsbf}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <p className="lead">Questionario Cuerpo Completo</p>
                  </div>
                  <div className="col-md-6">
                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">Respuestas Correctas</th>
                          <th scope="col">Respuestas Fallidas</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span class="badge badge-pill badge-light">
                              {this.props.questionsccc}
                            </span>
                          </td>
                          <td>
                            <span class="badge badge-pill badge-light">
                              {this.props.questionsccf}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
                <h4 className="text-center">Evaluación</h4>
                <br />
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Respuestas Correctas</th>
                      <th scope="col">Respuestas Fallidas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span class="badge badge-pill badge-light">
                          {this.props.evaluacionc}
                        </span>
                      </td>
                      <td>
                        <span class="badge badge-pill badge-light">
                          {this.props.evaluacionf}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <h4 className="text-center">Vídeo enviado por el estudiante</h4>
                <br />
                <video
                  className="col align-self-center"
                  src=""
                  width="700"
                  height="400"
                  controls
                  poster={poster}
                >
                  Lo sentimos. Este vídeo no puede ser reproducido en tu
                  navegador.
                  <br />
                  La versión descargable está disponible en{" "}
                  <a href="URL">Enlace</a>.
                </video>
                <hr />
                <h4 className="text-center">Observaciones y nota</h4>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <textarea
                      class="form-control"
                      placeholder="Escribe alguna observación"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                      Preference
                    </label>
                    <select
                      class="custom-select mr-sm-2"
                      id="inlineFormCustomSelect"
                    >
                      <option selected>
                        Selecciona una nota para tu estudiante...
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <br />
                <button
                  type="button"
                  class="btn btn-secondary btn-lg btn-block"
                >
                  Enviar
                </button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Lista;
