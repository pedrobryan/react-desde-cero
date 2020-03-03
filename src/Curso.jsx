import React from 'react';

const Curso = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://res.cloudinary.com/edteam/image/upload/v1581345777/courses/Go_desde_cero-v3.png" alt="poster de curso"/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        Programación orientada a objetos con Go
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg" alt="foto del profe"/>
            </div>
          </div>
          <span className="small">Alexys Lozada</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">$ 20USD</a>
      </div>
    </div>
  </article>
);

export default Curso