import React from 'react'
import Produto from './Produto'

function App() {
  const [produtos, setProdutos] = React.useState(null)
  const [status, setStatus] = React.useState(null)

  async function fetchProduto(produtoUrl) {
    setStatus('loading')
    const dadosResponse = await fetch(produtoUrl)
    const dadosJSON = await dadosResponse.json()
    setProdutos(dadosJSON)
    setStatus('done')
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() =>
            fetchProduto(
              'https://ranekapi.origamid.dev/json/api/produto/notebook'
            )
          }
        >
          notebook
        </button>
        <button
          onClick={() =>
            fetchProduto(
              'https://ranekapi.origamid.dev/json/api/produto/smartphone'
            )
          }
        >
          smartphone
        </button>
        <button
          onClick={() =>
            fetchProduto(
              'https://ranekapi.origamid.dev/json/api/produto/tablet'
            )
          }
        >
          tablet
        </button>
      </div>
      {produtos ? (
        <Produto produtos={produtos} setProdutos={setProdutos} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )
}

export default App

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
