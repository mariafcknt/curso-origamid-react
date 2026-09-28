import React from 'react'
import GlobalContext from './GlobalContext'

function Produto() {
  let global = React.useContext(GlobalContext)

  function fetchDados() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((dadosResponse) => dadosResponse.json())
      .then((dadosJSON) => {
        global.setDados(dadosJSON)
        console.log('API fetch')
      })
  }

  React.useEffect(() => {
    fetchDados()
  }, [])

  return (
    <div>
      <p>
        <b>Produtos:</b>
      </p>
      {global.dados
        ? global.dados.map((item) => {
            return <p key={item.id}>{item.nome}</p>
          })
        : null}
      <button onClick={global.dados ? global.limparDados : () => fetchDados()}>
        {global.dados ? 'Limpar Dados' : 'Carregar Dados'}
      </button>
    </div>
  )
}

export default Produto
