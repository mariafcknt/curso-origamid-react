import React from 'react'
import UserContext from './UserContext'

function Produto() {
  const dados = React.useContext(UserContext)
  console.log(dados)
  return <div>Produto {dados.nome}</div>
}

export default Produto
