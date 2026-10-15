import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'

function App() {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
      <br></br>
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
    </form>
  )
}

export default App
