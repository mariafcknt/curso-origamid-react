import React from 'react'
import './style/Header.css'
import { NavLink } from 'react-router-dom'
import './style/Main.css'

function Header() {
  return (
    <nav>
      <NavLink className="link" to="/" end>
        Produtos
      </NavLink>
      <NavLink className="link" to="contato">
        Contato
      </NavLink>
    </nav>
  )
}

export default Header
