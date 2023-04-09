import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container>
    <Row>
    
    <Col md={7} className='d-flex flex-direction-column align-items-center justify-content-center'>
    
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      login
    </Button>
    <div className='py-4'>
      <p className='text-center'>dont have an account <Link to='/signup'>signup</Link></p>
    </div>
  </Form>
    </Col>
    <Col md={5} className='signup_bg' >
    </Col>
    </Row>
  </Container>
  )
}

export default Signup
