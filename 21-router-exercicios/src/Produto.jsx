import React from 'react'
import { useParams } from 'react-router-dom'
import './style/Produto.css'
import './style/Main.css'

function Produto() {
  const { id } = useParams()
  const [produto, setProduto] = React.useState(null)
  const [fotos, setFotos] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/' + id)
      .then((response) => response.json())
      .then((produto) => {
        setProduto(produto)
        setFotos(produto.fotos)
        document.title = 'Ranek | ' + produto.nome
      })
  }, [id])

  if (produto === null) return <p className="loading"></p>
  return (
    <div>
      <div className="main-content">
        <div className="fotos-container">
          {fotos !== null
            ? fotos.map((f) => <img className="foto" src={f.src}></img>)
            : null}
        </div>
        <div className="produto-descricao">
          <h3 className="titulo">{produto.nome}</h3>
          <div className="preco">
            {Number(produto.preco).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
          <p>{produto.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default Produto
