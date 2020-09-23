import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'


class SobreNosotros extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Text>

                            <h1 className = "text-center">Sobre Nosotros</h1>
                            <p class="lead">Este es un proyecto de PPI desarrollado por los estudiantes David Diosa Álvarez, Manuela Martínez Chaverra y Yuliana Vargas de grado 11 de la I.E. Santos Ángeles Custodios.</p>



                        </Card.Text>
                    </Card.Body>
                    <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://avatars1.githubusercontent.com/u/66045953?s=400&u=bc6254cd50647d97fd78584867aa286c98e3a5ff&v=4" />
    <Card.Body>
      <Card.Title>Yuliana Vargas Perez</Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/66033496?s=460&u=1671f9c533364750a2a6d99aa4bc8d7631161a91&v=4" />
    <Card.Body>
      <Card.Title>David Diosa Alvarez</Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/66377419?s=400&u=3dcfc2b6b03248f92ef5ebc59bc9aca621e40c16&v=4" />
    <Card.Body>
      <Card.Title>Manuela Martinez Chaverra</Card.Title>
    </Card.Body>
  </Card>
</CardDeck>
                </Card>
            </Container>
        )
    }
}

export default SobreNosotros;