import React from 'react'
import './App.scss'
import { Navbar, Nav, Form, FormControl, Button,   } from 'react-bootstrap'
import {Route, HashRouter, Switch, Redirect, NavLink} from 'react-router-dom'
import { TablePage } from './ui/Pages/TablePage'
import { HomePage } from './ui/Pages/HomePage'

function App() {
  return <>
   <TablePage />
  </>
}

export default App


