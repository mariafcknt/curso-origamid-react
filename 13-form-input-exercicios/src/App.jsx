import React from 'react'

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

function App() {
  const [form, setForm] = React.useState({})

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }

  function handleChange({ target }) {
    const { id, value } = target
    console.log(form)
    setForm({ ...form, [id]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        type="password"
        name="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">CEP</label>
      <input
        id="cep"
        type="number"
        name="cep"
        value={form.cep}
        onChange={handleChange}
      />
      <label htmlFor="rua">Rua</label>
      <input
        id="rua"
        type="text"
        name="rua"
        value={form.rua}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        id="bairro"
        type="text"
        name="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        id="cidade"
        type="text"
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        type="text"
        name="estado"
        value={form.estado}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
