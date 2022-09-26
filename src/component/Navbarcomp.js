import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

export default class Navbarcomp extends Component {
  render() {
    return (
      <Router>
      <div className='sandeep'>
         <Navbar bg="dark" variant='dark' expand="lg">
         <Container>
          <Navbar.Brand href="#home">College-Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
            <Nav.Link as={Link} to={'/Contact'}>Contact</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div>
      <Switch>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}
