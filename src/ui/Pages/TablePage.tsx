import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../App.scss'
import { Table } from 'react-bootstrap'
import { UserType} from '../../api/Api'
import { AppStateType } from '../../bll/Store'
import { getUsers, filterUser } from '../../bll/UsersReducer'
import { SortButtons } from '../Components/SortButtons/SortButtons'
import { Modal } from '../Components/Modal/Modal'
import { AddUserForm } from '../Components/AddUserForm/AddUserForm'
import { SearchForm } from '../Components/SearchForm/SearchForm'
import { Button } from 'react-bootstrap'

export const TablePage = () => {   
  let [activeModal, setActiveModal] = useState(false)

  const searchUserName = (searchName: string) => {
    debugger
    dispatch(filterUser(searchName))
  }
    const dispatch = useDispatch()
    const users = useSelector<AppStateType, Array<UserType>>(state => state.users.users)
    useEffect(() => {
      dispatch(getUsers())
  }, [])    

     return <div className="App">
       <div>
       <SearchForm searchItem={searchUserName} />
       </div>       
       <div>
       <Button variant="dark" onClick = {()=>{setActiveModal(true)}}>ADD USER</Button>
       </div>
      

<Table striped bordered hover>
  <thead>
    <tr>
      <th>id<SortButtons param= "id" /></th>
      <th>First Name<SortButtons param= "firstName" /></th>
      <th>Last Name<SortButtons param= "lastName" /></th>
      <th>Email<SortButtons param= "email" /></th>
      <th>Phone<SortButtons param= "phone" /></th>
    </tr>
  </thead>
  <tbody>
  {users.map((user) =>   <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
   )}
  </tbody>
</Table>

      <Modal activeModal={activeModal} setActiveModal={setActiveModal} >
        <AddUserForm/>
      </Modal>

    </div>
}
