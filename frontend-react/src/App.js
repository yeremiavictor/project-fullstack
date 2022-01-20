//import component Bootstrap React
import { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

// import react router dom
import {Switch, Route, Link} from 'react-router-dom';

// Import Component Home
import Home from './pages/Home';

// import component post index
import IndexPost from './pages/posts/Index';

// import componenet Post Create
import CreatePost from './pages/posts/Create';

// import Component post edit
import EditPost from './pages/posts/Edit';


// FUNGSINYA UNTUK NAVIGASI


function App(){
  return(
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Sistem React JS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar className="me-auto">
                  <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                  <Nav.Link as={Link} to="/posts" className="nav-link">Crud</Nav.Link>
                </Navbar>
              </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={IndexPost} />
        <Route exact path="/posts/create" component={CreatePost} />
        <Route exact path="/posts/edit/:id" component={EditPost} />
      </Switch>
    </div>
    )
}

export default App;