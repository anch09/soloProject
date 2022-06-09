import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';


export default function AddFolder() {

  return (
      <Form method='POST' action='/images/upload' encType='multipart/form-data'>
        <Form.Control type='file' name='image' className='w-70 m-2'/>
        <Button type='submit' variant='outline-warning' size='md' className='m-2' >
          Add File
        </Button>
      </Form>
  )
}
{/* <Modal onShow={open} size="lg">
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Label>
                Folder Name
              </Form.Label>
              <Form.Control 
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="seconday" onClick={closeModal}> Close </Button>
            <Button variant="primary" type={closeModal}> Create Folder </Button>
          </Modal.Footer>
        </Form>
      </Modal> */}
