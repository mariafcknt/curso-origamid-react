import React from 'react'

function Checkbox() {
  const [termos, setTermos] = React.useState(false)
  const [cores, setCores] = React.useState(['azul'])

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  return (
    <form>
      <label>
        {' '}
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos.
      </label>
      {termos && <p>Aceitou os termos</p>}
      <br></br>
      {/* <label>
        {' '}
        <input
          type="checkbox"
          value="azul"
          onChange={handleChange}
          checked={cores.includes('azul')}
        />
        Azul
      </label>
      <label>
        {' '}
        <input
          type="checkbox"
          value="vermelho"
          onChange={handleChange}
          checked={cores.includes('vermelho')}
        />
        Vermelho
      </label> */}
    </form>
  )
}

export default Checkbox
