import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                &nbsp;<img src="https://lh3.googleusercontent.com/-tL9XLSUNcOs/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmy2tW8RPYjON9jMiovfN53FC5L2g/s48-c/photo.jpg" width="30" height="35" className="d-inline-block align-top" alt="" /> &nbsp;
                    Correcta Expresión</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Instrucciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button type="button" className="btn btn-outline-secondary">Iniciar Sesión</button> &nbsp;
                        <button type="button" className="btn btn-outline-secondary">Registrarse</button>
                        
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navigation;