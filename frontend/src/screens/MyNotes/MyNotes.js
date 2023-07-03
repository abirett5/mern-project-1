import React, { useEffect } from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import notes from "../../data/notes";
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import axios from 'axios';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('Note Opened!'),
  );

  return (
    <button
      style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const MyNotes = () => {
  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")) {

    }
  }

  const fetchNotes = async() => {
    const { data } = await axios.get('/api/notes');
    console.log(data);
  }

  useEffect(() => {
    fetchNotes();
  }, [])
  

  return (
    <MainScreen title='Welcome back Ashfaque Hossain Abir...'>
      <Link to='createnote'>
        <Button style={{marginLeft:10, marginBottom:6}} size='lg'>Create New Note</Button>
      </Link>
        {
          notes.map(note => (
          <Accordion>
            <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span style={{ 
                color: "black",
                textDecoration: "none",
                flex: 1,
                alignSelf: "center",
                fontSize: 18,
              }}
              ><CustomToggle as={Card.Text} variant='link' eventKey='0'>{note.title}</CustomToggle>
              </span>
              
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
            <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <h4>
                <Badge style={{backgroundColor: "#28a745", color: "white"}}>Category - {note.category}</Badge>
              </h4>

              <blockquote className="blockquote mb-0">
                <p>
                  {note.content}
                </p>
                <footer className="blockquote-footer">Created On - date</footer>
              </blockquote>
            </Card.Body>
            </Accordion.Collapse>
            </Card>
          </Accordion>
          ))
        }
    </MainScreen>
  )
}

export default MyNotes