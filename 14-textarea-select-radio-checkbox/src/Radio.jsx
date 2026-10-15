import React from 'react'

function Radio() {
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')

  function handleChange({ target }) {
    setProduto(target.value)
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="smartphone"
          name="produto"
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="notebook"
          name="produto"
          onChange={handleChange}
        />
        Notebook
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          value="violeta"
          checked={cor === 'violeta'}
          onChange={({ target }) => setCor(target.value)}
        />
        Violeta
      </label>
      <label>
        <input
          type="radio"
          value="rosa"
          checked={cor === 'rosa'}
          onChange={({ target }) => setCor(target.value)}
        />
        Rosa
      </label>
      {produto} {cor}
    </form>
  )
}

export default Radio
