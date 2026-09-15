import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

function App() {
  const [modal, setModal] = React.useState(true)
  let [items, setItems] = React.useState('teste')

  function handleClick() {
    setItems('outro')
  }
  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Items</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  )
}

export default App
