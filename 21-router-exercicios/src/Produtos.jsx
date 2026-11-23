import React from 'react'
import './Produtos.css'
import Header from './Header'

function Produtos() {
  const [produtos, setProdutos] = React.useState()

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((produtos) => {
        setProdutos(produtos)
      })
  }, [])

  return (
    <div>
      <Header />
      <div className="produtos-container">
        {produtos.map((p) => (
          <div className="produto-card">
            {' '}
            <h3 className="produto-title">{p.nome}</h3>
            <img className="produto-img" src={p.fotos[0].src} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Produtos
