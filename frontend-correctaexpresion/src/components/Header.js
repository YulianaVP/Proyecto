import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <img src="https://amorsintemblor.com/wp-content/uploads/2019/12/190129_3872754_Como_convertirte_en_un_gran_orador.jpg" className="img-fluid" alt="Responsive image" />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        )
    }
}

export default Header;