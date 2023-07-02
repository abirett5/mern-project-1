import React from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")) {

    }
  }

  return (
    <MainScreen title='Welcome back Ashfaque Hossain Abir...'>
      <Link to='createnote'>
        <Button style={{marginLeft:10, marginBottom:6}} size='lg'>Create New Note</Button>
        {
          notes.map(note => (
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
              >{note.title}</span>
              
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button variant='danger' 
                className='mx-2' 
                onClick={() => 
                deleteHandler(note._id)
                }>Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
              </blockquote>
            </Card.Body>
            </Card>
          ))
        }
      </Link>
    </MainScreen>
  )
}

export default MyNotes