import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class ActPractica extends React.Component {
  render() {
    return (
      <div>
        <Link to="/niveles" class="btn">
          Volver
        </Link>
        <div className="container">
          <h1 className="titulonivel">Actividad de Práctica</h1>
          <p className="lead">
            <strong>
              Una vez que hayas terminado de ver los videos de cada nivel y te
              sientas preparado, grábate a ti mismo hablando de un tema y aplica
              lo aprendido sobre la expresión corporal.
              <br />
              <br />
              Cuando termines, mándale el video a tu profesor para que te
              califique.
            </strong>
          </p>

          <div clssName="row">
            <img
              className="col-md-2 offset-md-3"
              src="https://userscontent2.emaze.com/images/c946e393-d155-458e-9895-78e3055a6d69/50d60b0dccd86bfb597502eac92e3923.gif"
              alt=""
            />
            <img
              className="col-md-2 offset-md-1"
              src="https://1.bp.blogspot.com/-DLR3VBk7eFU/WqLV-j1kAFI/AAAAAAAAAMk/Jfl0vC-aTGIq_GqWFR4YWh789avncxUVwCLcBGAs/s1600/90220.gif"
              alt=""
            />
          </div>

          <br />
          <br />
          <div class="card-columns">
            <div class="card">
              <img
                src="https://t2.pb.ltmcdn.com/es/posts/4/0/4/tecnicas_para_hablar_en_publico_4404_600.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Útiliza tus manos</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://puntobiz.com.ar/data/img_cont/img_imagenes/img_gr/112695_73139.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Maneja el escenario</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <p>
                  Utiliza las siguientes recomendaciones para subir tu video y
                  enviarselo a tu docente.
                </p>
                <footer class="blockquote-footer text-white">
                  <small>
                    Correcta Expresión <br />
                    <cite title="Source Title">
                      Expresate de la mejor manera.
                    </cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card">
              <img
                src="https://psicologamadrid.es/wp-content/uploads/hablar-en-publico-1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Maneja un buen tono de voz</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://s1.eestatic.com/2019/02/04/como/Autoayuda-Conferencias-Aprendizaje-Psicologia-Como_hacer_373723767_113906202_1706x960.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Ten una postura recta</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://pasosparaserlider.files.wordpress.com/2010/11/hablar-en-publico.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Maten contacto visual</h5>
                <p class="card-text">
                  Demuestra que no estás intimidado y que te interesa tu público
                  para no perder la conexión.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">
              Choose file
            </label>
          </div>
        </div>
        <hr/>
<Footer />

      </div>
    );
  }
}

export default ActPractica;
