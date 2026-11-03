import React from 'react'
import { CardBody } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function App() {
  return (
    <>
      {/* <div className="card text-white m-5" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <h5 className="card-title">R$ 2500</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div> */}

      <Card bg="dark" text="white" className="m-5">
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default App
