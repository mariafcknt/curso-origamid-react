function App() {
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({ nome: 'Ezio', idade: '24' })

  function handleClick() {
    setAtivo(!ativo)
    setDados({ ...dados, faculdade: 'Possui faculdade' })
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  )
}
