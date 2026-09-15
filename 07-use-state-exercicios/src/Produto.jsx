import React from 'react'

function Produto({ produtos }) {
  const { nome, preco, fotos } = produtos
  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
      {fotos.map((foto) => (
        <img key={foto.titulo} src={foto.src}></img>
      ))}
    </div>
  )
}

export default Produto
