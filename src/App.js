import React, { Component } from 'react';

import Home from './components/Home'
import Dash01 from './components/Dash01';
import Dash02 from './components/Dash02';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="App">
        <Container fluid>
          <BrowserRouter>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top" label="Toggle navigation" >
              <Container fluid>
                <Link to="/">
                  <img alt="" src="/assets/power-bi.svg" width="40" height="40" className="d-inline-block align-top" style={{ marginRight: '10px' }} />
                </Link>{' '}
                <Navbar.Brand href="/">Dashboard Embedded</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                    <Nav.Link href="/" className="text-light">Página inicial</Nav.Link>

                    <NavDropdown title="Dashboards" id="nav-dropdown-dark-example" menuVariant="dark">
                      <NavDropdown.Item as={Link} to="/Dash01">Dashboard 01</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/Dash02">Dashboard 02</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Dash01" element={<Dash01 />}></Route>
              <Route path="/Dash02" element={<Dash02 />}></Route>
            </Routes>

          </BrowserRouter >
        </Container>
      </div >
    );

  }
}

export default App;
