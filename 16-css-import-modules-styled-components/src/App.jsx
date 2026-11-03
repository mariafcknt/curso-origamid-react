import React from 'react'
import styled from 'styled-components'

const ProdutosContainer = styled.div`
  display: flex;
`

const Produto = styled.div`
  flex: 1;
`

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`
const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`

function App() {
  return (
    <div>
      <ProdutosContainer>
        <Produto>
          {' '}
          <Titulo>Tablet</Titulo>
          <Paragrafo>Loren</Paragrafo>
          <Preco cor="#84e">R$ 2000</Preco>
        </Produto>
        <Produto>
          {' '}
          <Titulo>Notebook</Titulo>
          <Paragrafo>Loren</Paragrafo>
          <Preco cor="green">R$ 1000</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  )
}

export default App
