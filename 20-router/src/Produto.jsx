import React from 'react'
import {
  Route,
  Routes,
  useLocation,
  useParams,
  NavLink,
  Outlet,
} from 'react-router-dom'

function Produto() {
  const params = useParams()
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  // console.log(search.get('cor'))

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>{' '}
        <NavLink to="avaliacao">Avaliação</NavLink>{' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
      {/* <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes> */}
    </div>
  )
}

export default Produto
