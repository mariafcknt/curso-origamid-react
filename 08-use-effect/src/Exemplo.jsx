import React from 'react'

function App() {
  const [contar, setContar] = React.useState(0)
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json))
  }, [])

  // React.useEffect(() => {
  //   console.log('Executou')
  // }, [])

  // const titulo = 'Total '

  // React.useEffect(() => {
  //   document.title = titulo + contar
  // }, [contar])

  // Usar arrow function quando é preciso passar argumentos (que não sejam eventos) para a função executada pelo onClick
  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default App
