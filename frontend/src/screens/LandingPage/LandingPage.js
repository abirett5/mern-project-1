import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './LandingPage.css'
import Button from 'react-bootstrap/Button';

const LandingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='intro-text'>
            <div>
              <h1 className='title'>Welcome to NoteKrator</h1>
              <p className='subtitle'>One safe place for all your notes.</p>
            </div>
            <div className='buttonContainer'>
              <a href='/login'>
                <Button className='loginButton'>Login</Button>
              </a>
              <a href='/register'>
                <Button className='registerButton' variant='outline-primary'>Signup</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage