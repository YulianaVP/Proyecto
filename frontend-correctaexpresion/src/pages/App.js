import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Instrucciones from '../components/Instrucciones';
import SobreNosotros from '../components/SobreNosotros';
import Footer from '../components/Footer';

function App() {

  return (
    <div className="">
      <Navigation />
      <Header />
      <br />
      <br />
      <br />
      <Instrucciones />
      <br />
      <SobreNosotros />
      <br />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
