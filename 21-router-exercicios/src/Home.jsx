import React from 'react'
import './style/Home.css'
import './style/Main.css'
import { NavLink } from 'react-router-dom'

function Produtos() {
  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((produtos) => {
        setProdutos(produtos)
        document.title = 'Ranek'
      })
  }, [])

  if (produtos === null) return <p className="loading"></p>

  return (
    <div>
      <div className="produtos-container">
        {produtos.map((p) => (
          <NavLink key={p.id} className="produto-card" to={'produto/' + p.id}>
            {' '}
            <img className="produto-img" src={p.fotos[0].src} />
            <h3 className="produto-title">{p.nome}</h3>
          </NavLink>
        ))}
      </div>
      <p>Alguns direitos reservados</p>
    </div>
  )
}

export default Produtos
