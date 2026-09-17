import React from 'react'
import Produto from './Produto'

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

function App() {
  const [dados, setDados] = React.useState(null)
  const produto = localStorage.getItem('produto')

  function fetchDados(produto) {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${produto.toLowerCase()}`

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setDados(json)
        localStorage.setItem('produto', json.nome.toLowerCase())
      })
  }

  React.useEffect(() => {
    if (produto) {
      fetchDados(localStorage.getItem('produto'))
    }
  }, [produto])

  return (
    <div>
      {produto ? <h1>Preferência: {localStorage.getItem('produto')}</h1> : null}
      <button
        style={{ marginRight: '1rem' }}
        onClick={(event) => fetchDados(event.target.innerText)}
      >
        Notebook
      </button>
      <button onClick={(event) => fetchDados(event.target.innerText)}>
        Smartphone
      </button>
      {dados && <Produto dados={dados} />}
    </div>
  )
}

export default App
