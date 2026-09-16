import React from 'react'

function Produto({ dados }) {
  const { nome, preco, fotos } = dados
  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
      <img alt={fotos[0].titulo} src={fotos[0].src}></img>
    </div>
  )
}

export default Produto
