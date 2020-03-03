import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const App= () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg" alt="banner"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Mi banner</p>
          <p>Los mejores estilos</p>
          <a href="https://ed.team" className="button">Suscribete</a>
        </div>
      </div>
      </div>
    </div>
    <div class="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
);

export default App;
