import React from 'react'
import Produto from './Produto'
import './App.css'

function App() {
  const [ativar, setAtivar] = React.useState(false)
  return (
    <>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </>
  )
}

export default App
