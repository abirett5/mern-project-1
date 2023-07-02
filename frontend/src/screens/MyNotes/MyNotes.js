import React from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const MyNotes = () => {
  return (
    <MainScreen title='Welcome back Ashfaque Hossain Abir...'>
      <Link to='createnote'>
        <Button style={{marginLeft:10, marginBottom:6}} size='lg'>Create New Note</Button>
      </Link>
    </MainScreen>
  )
}

export default MyNotes