import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
      {/* <Head title="Home" description="Descrição da Home" /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" description="Descrição 2 da Home" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home.</p>
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  )
}

export default Home
