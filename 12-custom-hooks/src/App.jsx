import React from 'react'
import useLocalStorage from './useLocalStorage'
import useFetch from './useFetch'

function App() {
  // cria o produto no localStorage com o valor inicial vazio
  const [produto, setProduto] = useLocalStorage('produto', '')
  const { request, data, loading, error } = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      )
      console.log(response, json)
    }
    fetchData()
  }, [request])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  if (error) return <p>{error}</p>
  if (loading) return <p>Carregando...</p>
  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {data
        ? data.map((produto) => (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
            </div>
          ))
        : null}
    </div>
  )
}

export default App
