import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../App.scss'
import { AppStateType } from '../../bll/Store'
import { UserType } from '../../api/Api'
import { getUsers, setSortField, setUsers, setSort, setRow, setIsModeSelected, setCurrentPage, setSearch } from '../../bll/Reducer'
import { Modal } from '../Components/Modal/Modal'
import { AddUserForm } from '../Components/AddUserForm/AddUserForm'
import { SearchForm } from '../Components/SearchForm/SearchForm'
import { Button } from 'react-bootstrap'
import { Paginator } from '../Components/Paginator/Paginator'
import { InteractiveTable } from '../Components/Table/InteractiveTable'
import { Preloader } from '../Components/Preloder/Preloader'
import { DetailRowView } from '../Components/DatailRowView/DetailRowView'
import { ModeSelector } from '../Components/ModeSelector/ModeSelector'
import _ from 'lodash'

export const TablePage = React.memo(() => {     
  let [activeModal, setActiveModal] = useState(false)  

  const dispatch = useDispatch()
  const users = useSelector<AppStateType, Array<UserType>>(state => state.app.users)
  const isLoading = useSelector<AppStateType, boolean>(state => state.app.isLoading)
  const pageSize = useSelector<AppStateType, number>(state => state.app.pageSize)
  const currentPage = useSelector<AppStateType, number>(state => state.app.currentPage)
  const sort = useSelector<AppStateType, string>(state => state.app.sort)
  const sortField = useSelector<AppStateType, string>(state => state.app.sortField)
  const row = useSelector<AppStateType, UserType>(state => state.app.row)
  const isModeSelected = useSelector<AppStateType, boolean>(state => state.app.isModeSelected)
  const search = useSelector<AppStateType, string>(state => state.app.search)

  const onSort = (sortField:string) => {  
    const cloneUsers = users.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc';
    const orderedUsers = _.orderBy(cloneUsers, sortField, sortType);
    dispatch(setUsers(orderedUsers))
    dispatch(setSortField(sortField))
    dispatch(setSort(sortType))
  }
  const onRowSelect = (row: UserType) => {
    dispatch(setRow(row))
  }
  const modeSelectHandler = (countUsers:number) => {
    dispatch(setIsModeSelected(true))
    dispatch(getUsers(countUsers))
  }
  const searchHandler = (search: string, countUsers:number) =>{
    debugger
    dispatch(setSearch(search))  
    dispatch(setCurrentPage(1))  
    dispatch(getUsers(countUsers))
  }  
  const pageChangeHandler = (page:number) => {
    dispatch(setCurrentPage(page))
  }
  const getFilteredUsers = () => {
    debugger
    if (!search) {
      return users
    }
    let result = users.filter(item => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = users
    }
    return result
  }

  const filteredUsers = getFilteredUsers();
  const displayUsers = _.chunk(filteredUsers, pageSize)
  const usersTotalCount = filteredUsers.length

  if (!isModeSelected) {
    return (
      <div className="container">
        <ModeSelector onSelect={modeSelectHandler} />
      </div>
    )
  } 
  return <div className="App">
    {isLoading && <Preloader/>}
    <div>
      <SearchForm searchItem={searchHandler} />
    </div>
    <div>
      <Button variant="dark" onClick={() => { setActiveModal(true) }}>ADD USER</Button>
    </div>
    {filteredUsers.length > pageSize &&
    <Paginator totalItemsCount={usersTotalCount} pageSize={pageSize} currentPage={currentPage} onChangePage={pageChangeHandler} portionSize={5} /> }
   {displayUsers.length && <InteractiveTable users={displayUsers[currentPage -1] } onSort={onSort} sort={sort} sortField={sortField} onRowSelect={onRowSelect}/>}

    <Modal activeModal={activeModal} setActiveModal={setActiveModal} >
      <AddUserForm />
    </Modal>

    { row ? <DetailRowView person={row} /> : null }
  </div>
})


