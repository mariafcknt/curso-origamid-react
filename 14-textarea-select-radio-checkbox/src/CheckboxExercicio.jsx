import React from 'react'

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

function CheckboxExercicio() {
  const [cores, setCores] = React.useState(['azul'])
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            onChange={handleChange}
            checked={cores.includes(cor)}
          />
          {cor}
          {/* {cor.charAt(0).toUpperCase() + cor.slice(1)} deixa a primeira letra uppercase */}
        </label>
      ))}
      {console.log(cores)}
    </form>
  )
}

export default CheckboxExercicio
