import React from 'react'
import './App.css'
import foto from './img/foto.jpg'
import Dog from './img/dog.svg?react'
import DogSvg from './DogSvg'

function App() {
  const [olho, setOlho] = React.useState(0)

  function handleClick() {
    for (let i = 0; i < 6; i++)
      [
        setTimeout(() => {
          setOlho(i)
        }, 100 * i),
      ]
  }

  return (
    <>
      <p className="fundo" onClick={handleClick}></p>
      <Dog />
      <DogSvg color="#84e" olho={olho} />
      <img src={foto} alt="Cachorro" />
    </>
  )
}

export default App
