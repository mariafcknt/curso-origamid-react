import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/sobre')
  }

  return <button onClick={handleClick}>Login</button>
}

export default Login
