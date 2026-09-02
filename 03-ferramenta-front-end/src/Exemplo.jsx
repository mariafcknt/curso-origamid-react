const titulo = <h1>Título</h1>;

const App = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return "Leon " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const estiloP = {
    color: "blue",
    backgroundColor: "azure",
  };

  return (
    <>
      {titulo}
      {mostrarNome("Kennedy")}
      <p>{new Date().getFullYear()}</p>
      <p style={estiloP}>
        {carro.marca} {carro.rodas}
      </p>
      <p className={ativo ? "ativo" : "inativo"}>{random * 1000}</p>
    </>
  );
};