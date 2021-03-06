import React, { useState } from 'react'
import style from './InteractiveTable.module.css'
import { Table } from 'react-bootstrap'
import { UserType } from '../../../api/Api'
import _ from 'lodash'

type InteractiveTableType = {
  users:Array<UserType>
  onSort:(sortField:string)=>void
  onRowSelect:(row:UserType)=>void
  sort:string
  sortField:string
}

export let InteractiveTable = React.memo ((props:InteractiveTableType) => {
  return <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={()=> {props.onSort('id')}}>id
           {props.sortField === 'id' ? <small>{props.sort}</small> : null}</th>
          <th onClick={()=> {props.onSort('firstName')}}>First Name 
          {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}</th>
          <th onClick={()=> {props.onSort('lastName')}}>Last Name
          {props.sortField === 'lastName' ? <small>{props.sort}</small> : null}</th>
          <th onClick={()=> {props.onSort('email')}}>Email
          {props.sortField === 'email' ? <small>{props.sort}</small> : null}</th>
          <th onClick={()=> {props.onSort('phone')}}>Phone
          {props.sortField === 'phone' ? <small>{props.sort}</small> : null}</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => <tr key={user.id + user.phone} onClick={()=> {props.onRowSelect(user)}}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
        )}
      </tbody>
    </Table>
  </div>
})

