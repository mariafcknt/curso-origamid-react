import React, { useEffect } from 'react'
import Radio from './Radio'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
]

function Perguntas() {
  const [current, setCurrent] = React.useState(0)
  const [option, setOption] = React.useState(null)
  const [points, setPoints] = React.useState(0)

  function handleClick(event) {
    event.preventDefault()
    if (current !== 4) {
      checkAnswer()
      setCurrent(current + 1)
    } else {
      setCurrent(4)
    }
  }

  function tryAgain() {
    setCurrent(0)
    setPoints(0)
  }

  function checkAnswer() {
    if (option === perguntas[current].resposta) {
      setPoints(points + 1)
    }
  }

  if (current !== 4) {
    return (
      <form>
        <h3>{perguntas[current].pergunta}</h3>
        <Radio
          options={perguntas[current].options}
          value={option}
          setValue={setOption}
        ></Radio>
        <button onClick={handleClick} style={{ marginTop: '1rem' }}>
          Próximo
        </button>
      </form>
    )
  } else {
    return (
      <>
        <p>Você acertou {points} de 4 perguntas</p>
        <button onClick={tryAgain}>Tentar novamente</button>
      </>
    )
  }
}

export default Perguntas
