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
        <Card>
          <Card.Header>
            <span>Title</span>
          </Card.Header>
          <div>
            <Button>Edit</Button>
            <Button variant='danger' className='mx-2'>Delete</Button>
          </div>
        </Card>
      </Link>
    </MainScreen>
  )
}

export default MyNotes