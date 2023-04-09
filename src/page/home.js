import React from 'react'

import { Row,Col ,Botton} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
  return (
    <Row>
      <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
        <div>
          <h1>share the world with the friend</h1>
          <p>chat app that lets you connect to the world</p>
          <LinkContainer>
          <Botton>
            Get started
          </Botton>
          </LinkContainer>
        </div>
      </Col>
    </Row>
  )
}

export default Home
