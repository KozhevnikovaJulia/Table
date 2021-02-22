import React from 'react'
import './App.scss'
import { Navbar, Nav, Form, FormControl, Button,   } from 'react-bootstrap'
import {Route, HashRouter, Switch, Redirect, NavLink} from 'react-router-dom'
import { TablePage } from './ui/Pages/TablePage'
import { HomePage } from './ui/Pages/HomePage'

function App() {
  return <>
    <HashRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Test</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/table">Table</NavLink>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/home"} />} />
        <Route path="/table" render={() => <TablePage />} />
        <Route path="/home" render={() => <HomePage />} />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>

    </HashRouter>
  </>
}

export default App


