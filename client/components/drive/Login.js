import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function Login(props) {

  return (
      <Card>
        <Card.Body>
          <h2 className='text-center mb-2'>Welcome</h2>
            <Button className='w-100 m-2' as={Link} to={'/parent'}>
              Log In as Parent
            </Button>
          <Button className='w-100 m-2'>
            Log In as Child
          </Button>
        </Card.Body>
      </Card>
  )
}
