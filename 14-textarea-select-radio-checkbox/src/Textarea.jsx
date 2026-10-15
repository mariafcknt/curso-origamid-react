import React from 'react'

function Textarea() {
  const [textarea, setTextarea] = React.useState('')

  return (
    <>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      <p>{textarea}</p>
    </>
  )
}

export default Textarea
