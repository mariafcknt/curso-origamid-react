import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null)

  // na resolução do exercício o Origamid colocou o fetch dos dados aqui

  function limparDados() {
    setDados(null)
  }

  return (
    <GlobalContext.Provider value={{ dados, setDados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
