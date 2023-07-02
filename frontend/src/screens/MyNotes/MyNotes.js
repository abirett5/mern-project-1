import React from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';

const MyNotes = () => {
  return (
    <MainScreen title='Welcome back Ashfaque Hossain Abir...'>
      <Link to='createnote'>
        <Button style={{marginLeft:10, marginBottom:6}} size='lg'>Create New Note</Button>
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span style={{ 
              color: "black",
              textDecoration: "none",
              flex: 1,
              cursor: "pointer",
              alignSelf: "center",
              fontSize: 18,
              }}
            >Title</span>
            
            <div>
              <Button>Edit</Button>
              <Button variant='danger' className='mx-2'>Delete</Button>
            </div>
          </Card.Header>
        </Card>
      </Link>
    </MainScreen>
  )
}

export default MyNotes