import React from 'react'

function App() {
  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(['Item 1'])

  function handleClick() {
    setItems((items) => [...items, 'Item' + (contar + 1)])
    setContar((contar) => {
      return contar + 1
    })
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
}

export default App
