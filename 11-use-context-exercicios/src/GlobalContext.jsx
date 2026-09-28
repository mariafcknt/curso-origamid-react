import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null)

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
