import React from 'react'
import { useParams } from 'react-router-dom'

function Produto() {
  const { id } = useParams()
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/' + id)
      .then((response) => response.json())
      .then((produto) => {
        setProduto(produto)
        console.log(produto)
      })
  }, [id])

  if (produto === null) return <p>Carregando...</p>
  return (
    <div>
      <h3>{produto.nome}</h3>
    </div>
  )
}

export default Produto
