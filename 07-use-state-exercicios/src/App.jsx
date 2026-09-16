import React from 'react'
import Produto from './Produto'

function App() {
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClick(event) {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    setLoading(true)
    const dadosResponse = await fetch(url)
    const json = await dadosResponse.json()
    setDados(json)
    setLoading(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
      </div>
      {loading && <p>Carregando...</p>}
      {dados && !loading && <Produto dados={dados} setDados={setDados} />}
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
