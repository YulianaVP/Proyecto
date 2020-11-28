import React from "react";
import { Link } from "react-router-dom";
import {BACKEND_CE} from './../constantes'

class InsigniaFormulario extends React.Component {

  constructor(){
        super()
        console.log(BACKEND_CE)
        this.state = {
            cargando : false,
            Correo : null,
            Contrasena : null
        }
    }
      cambioEntradaCampo = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });        
    }

    iniciarsesion = (event) =>{
      if(document.querySelector("#formlogin").reportValidity()){
        fetch(`${BACKEND_CE}api/usuarios/iniciarsesion`,{
          method : "POST",
          body : JSON.stringify({
            "Correo" : this.state.Correo,
            "Contrasena" : this.state.Contrasena
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
            .then(respuesta => respuesta.json())
            .then(data => {
              if(data.login){
                  this.props.history.push('/tipocuenta')
              }else{
                alert("Error al iniciar sesión")
              }
            })

      }
    }

  render() {
        return (

              <div>
                <form id= "formlogin">
                  <div className="form-group">
                    <h2 className="campologin">Nombre de usuario:</h2>
                    <input
                      type="name"
                      name="Nombre"
                      id="nombre"
                      className="form-control"
                      onChange={this.cambioEntradaCampo}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <h2 className="campologin">Correo:</h2>
                    <input
                      type="name"
                      name="Nombre"
                      id="nombre"
                      className="form-control"
                      onChange={this.cambioEntradaCampo}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <h2 className="campologin">Contraseña:</h2>
                    <input
                      type="password"
                      name="Contrasena"
                      id="inputPassword"
                      className="form-control"
                      onChange={this.cambioEntradaCampo}
                      required
                    />
                  </div>
                  <Link onClick={this.iniciarsesion} button className=" btn btn-orange btn btn-info btn-block" type="submit">
                    <strong>Continuar</strong>
                  </Link>
                </form>
              </div>

          
        );
      }
    }
      
export default InsigniaFormulario;