import React from 'react'
import './style/Main.css'
import './style/Contato.css'

function Contato() {
  return (
    <div className="animeLeft">
      <title>Ranek | Contato</title>
      <div className="main-content">
        <img className="foto" src="src\img\contato.jpg" alt="" />
        <div>
          <h3>Entre em contato.</h3>
          <ul className="info-list">
            <li>maria@email.com</li>
            <li>(99) 99999-9999</li>
            <li>Rua Baker, 221B</li>
          </ul>
        </div>
      </div>
      <p className="footer">Alguns direitos reservados.</p>
    </div>
  )
}

export default Contato
