import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';


export default function Cards() {

  const [imgs, setImgs] = useState([]);

  const fetches = [];

  const deleteCard = e => {
    const id = e.target.id;
    fetch(`/images/delete/${id}`,{
      method: 'DELETE',
    })
      .then()
  }

  imgs.forEach(element => {
    fetches.push(
      <Card className='m-2' style={{ width: '18rem' }} >
        <Card.Img variant="top" src={element.imageRoute} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button id={element._id} onClick={deleteCard} size='sm' variant="outline-danger">Delete</Button>
        </Card.Body>
      </Card>
    )
  })

  useEffect(() => {
    fetch('/images')
    .then(response => response.json())
    .then(data => {
      setImgs(data)
    })
    .catch(err => console.log(err))
  })
  

  return (
    [fetches]
  )
}
