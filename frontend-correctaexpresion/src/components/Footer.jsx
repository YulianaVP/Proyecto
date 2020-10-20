import React from "react";
import "../components/styles/Global.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <footer class="blog-footer">
          <p>
            Creado por <a href="#">CorrectaExpresión</a> by{" "}
            <a href="#">@DMY</a>.
          </p>
          <p>
            <a href="#">Volver a arriba</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
