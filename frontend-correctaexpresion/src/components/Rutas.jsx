import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Iniciosesion from "../pages/Iniciosesion";
import Registro from "../pages/Registro";
import SelecGrupo from "../pages/SelecGrupo";
import TipoCuenta from "../pages/TipoCuenta";
import Niveles from "../pages/Niveles";
import Cara from "../pages/Cara";
import Brazos from "../pages/Brazos";
import Cuerpo from "../pages/Cuerpo";
import Evaluacion from "../pages/Evaluacion";
import ActPractica from "../pages/ActPractica";
import DListaGrupos from "../pages/DListaGrupos";
import DGrupo9 from "../pages/DGrupo9";
import DGrupo10 from "../pages/DGrupo10";
import DGrupo11 from "../pages/DGrupo11";


function Rutas() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/iniciarsesion" component={Iniciosesion} />
          <Route exact path="/registro" component={Registro} />

          <Route exact path="/grupos" component={SelecGrupo} />
          <Route exact path="/tipocuenta" component={TipoCuenta} />

          <Route exact path="/niveles" component={Niveles} />
          <Route exact path="/cara" component={Cara} />
          <Route exact path="/brazos" component={Brazos} />
          <Route exact path="/cuerpo" component={Cuerpo} />

          <Route exact path="/evaluacion" component={Evaluacion} />
          <Route exact path="/actpractica" component={ActPractica} />

          {/*DOCENTE*/}
          <Route exact path="/DListaGrupos" component={DListaGrupos} />
          <Route exact path="/DGrupo9" component={DGrupo9} />
          <Route exact path="/DGrupo10" component={DGrupo10} />
          <Route exact path="/DGrupo11" component={DGrupo11} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Rutas;
