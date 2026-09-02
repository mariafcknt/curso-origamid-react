import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

function App() {
  return (
    <div>
      <Titulo cor="red" texto="Título 1">
        Isso é o children
        <p>Teste</p>
      </Titulo>
      <Titulo cor="blue" texto="Título 2" />
      <Titulo texto="Título 3" />
    </div>
  );
}

export default App;
