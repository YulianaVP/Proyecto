import React from "react";
import "../components/styles/Iniciosesion.css";
import "../components/styles/Global.css";
import Lista from "../components/Lista";
import boy1 from "../images/avatars/boy1.png";
import boy2 from "../images/avatars/boy2.png";
import boy3 from "../images/avatars/boy3.png";
import girl1 from "../images/avatars/girl1.png";
import girl2 from "../images/avatars/girl2.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


class DGrupo9 extends React.Component {
  render() {
    return (
      <div>
        <Link to="/dlistagrupos" class="btn">
          Volver
        </Link>
        <h1 className="Grupos">Grupo 9</h1>
        <h2 className="Grupos2">Alumnos:</h2>

        <Lista
        nombre="ALVAREZ OCAMPO MIGUEL ANGEL"
        img={boy1}
        questionsefc="1"
        questionseff="1"
        questionsbc="2"
        questionsbf="0"
        questionsccc="2"
        questionsccf="0"
        evaluacionc="4"
        evaluacionf="1"/>

<Lista
        nombre="ARCILA OSPINA ISABELLA"
        img={girl1}
        questionsefc="1"
        questionseff="1"
        questionsbc="2"
        questionsbf="0"
        questionsccc="2"
        questionsccf="0"
        evaluacionc="4"
        evaluacionf="1"/>

<Lista
        nombre="CASTRO OSORIO JULIAN"
        img={boy2}
        questionsefc="1"
        questionseff="1"
        questionsbc="2"
        questionsbf="0"
        questionsccc="2"
        questionsccf="0"
        evaluacionc="4"
        evaluacionf="1"/>

<Lista
        nombre="LOPEZ SANCHEZ ISABELLA"
        img={girl2}
        questionsefc="1"
        questionseff="1"
        questionsbc="2"
        questionsbf="0"
        questionsccc="2"
        questionsccf="0"
        evaluacionc="4"
        evaluacionf="1"/>

<Lista
        nombre="GRANADA RAMIREZ JUAN SEBASTIAN"
        img={boy3}
        questionsefc="1"
        questionseff="1"
        questionsbc="2"
        questionsbf="0"
        questionsccc="2"
        questionsccf="0"
        evaluacionc="4"
        evaluacionf="1"/>

        <hr/>
        <Footer/>     
        </div>


    );
  }
}

export default DGrupo9;
