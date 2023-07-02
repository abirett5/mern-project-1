import React from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import notes from "../../data/notes";
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';

const MyNotes = () => {
  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")) {

    }
  }

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
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
              ><AccordionHeader as={Card.Text} variant='link' eventKey='0'>{note.title}</AccordionHeader>
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
            <AccordionCollapse eventKey='0'>
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
            </AccordionCollapse>
            </Card>
          </Accordion>
          ))
        }
    </MainScreen>
  )
}

export default MyNotes