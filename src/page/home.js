import React from 'react'
import { Row,Col ,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './home.css'
const Home = () => {
  return (
    <Row>
      <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
        <div>
          <h1>share the world with the friend</h1>
          <p>chat app that lets you connect to the world</p>
          <LinkContainer to={"/chat"}>
          <Button variant="success">
            Get started <i className='fas fa-comment home-message-icon'></i>
          </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg">
      </Col>
    </Row>
  )
}

export default Home
