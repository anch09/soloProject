// import { Router } from 'express';
import React, {Component} from 'react';
import { render } from 'react-dom';

import { Container } from 'react-bootstrap';
import Navbar from './drive/Navbar';
import AddFolder from './drive/AddFolder';
import Cards from './drive/Cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs : []
    }
  }

  tryGetReq = () => {
    console.log('Clicked');
    fetch('/client')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {

    return (
      <>
      <Navbar />
      <Container fluid>
        <AddFolder />
      </Container >
      <Container className='d-flex flex-wrap' fluid>
        <Cards />
      </Container>
      </>
    )
  }
}
{/* <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
      <div className='w-100' style={{maxWidth :'500px'}}>
        <Login getreq = {this.tryGetReq}/>
      </div>
      <Outlet />
    </Container> */}
export default App;
