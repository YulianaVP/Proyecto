import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


class Instrucciones extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Text>

                            <h1 className = "text-center">Instrucciones</h1>
                            <h2 class="text-muted text-center">¡Bienvenidos!</h2>
                            <p class="lead">En esta aplicación te enseñaremos a mejorar tu expresión corporal al hablar ante un público.</p>
                            <p class="lead">Luego de registrarte e ingresar con tu cuenta podrás elegir entre entre los tres niveles que son:</p>
                            <ul class="lead">
                                <li>
                                    Expresión facial
                                </li>
                                <li>
                                    Brazos
                                </li>
                                <li>
                                    Cuerpo completo
                                </li>
                            </ul>
                            <p class="lead">En cada nivel se te explicará como debes moverte, tomarás ejemplos y practicas para expresarte bien al momento de exponer ante un público. Luego podrás grabar un video por el cual el docente del area correspondiente te evaluará. De allí serás evaluado con una serie de preguntas, mostrándote al final tu puntaje.</p>



                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="https://imagenes.universia.net/gc/net/images/consejos-profesionales/p/pe/per/perder-miedo-hablar-publico.jpg" />
                </Card>
            </Container>
        )
    }
}

export default Instrucciones;