import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.scss';
import { AppStateType } from '../../bll/Store';
import { UserType } from '../../api/Api';
import { getUsers, setSortField, setUsers, setSort, setRow, setIsModeSelected, setCurrentPage, setSearch } from '../../bll/Reducer';
import { Modal } from '../Components/Modal/Modal';
import { AddUserForm } from '../Components/AddUserForm/AddUserForm';
import { SearchForm } from '../Components/SearchForm/SearchForm';
import { Button } from 'react-bootstrap';
import { Paginator } from '../Components/Paginator/Paginator';
import { InteractiveTable } from '../Components/Table/InteractiveTable';
import { Preloader } from '../Components/Preloder/Preloader';
import { DetailRowView } from '../Components/DatailRowView/DetailRowView';
import { ModeSelector } from '../Components/ModeSelector/ModeSelector';
import _ from 'lodash';

export const TablePage = () => {
  let [activeModal, setActiveModal] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector<AppStateType, Array<UserType>>(state => state.app.users);
  const isLoading = useSelector<AppStateType, boolean>(state => state.app.isLoading);
  const pageSize = useSelector<AppStateType, number>(state => state.app.pageSize);
  const currentPage = useSelector<AppStateType, number>(state => state.app.currentPage);
  const sort = useSelector<AppStateType, string>(state => state.app.sort);
  const sortField = useSelector<AppStateType, string>(state => state.app.sortField);
  const row = useSelector<AppStateType, UserType>(state => state.app.row);
  const isModeSelected = useSelector<AppStateType, boolean>(state => state.app.isModeSelected);
  const search = useSelector<AppStateType, string>(state => state.app.search);

  const onSort = (sortField: string) => {
    const cloneUsers = users.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc';
    const orderedUsers = _.orderBy(cloneUsers, sortField, sortType);
    dispatch(setUsers(orderedUsers));
    dispatch(setSortField(sortField));
    dispatch(setSort(sortType));
  };
  const onRowSelect = (row: UserType) => {
    dispatch(setRow(row));
  };
  const modeSelectHandler = (countUsers: number) => {
    dispatch(setIsModeSelected(true));
    dispatch(getUsers(countUsers));
  };

  const pageChangeHandler = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const getFilteredUsers = () => {
    if (search.length === 0) {
      return users;
    }
    if (search.length > 0) {
      let result = users.filter(item => item['firstName'].toLowerCase().includes(search.toLowerCase()) || item['lastName'].toLowerCase().includes(search.toLowerCase()) || item['email'].toLowerCase().includes(search.toLowerCase()));
      return result;
    } else {
      return users;
    }
  };

  function chunkArray(array: Array<UserType>, chunk: number) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + chunk));
    }
    return newArray;
  }

  const filteredUsers = getFilteredUsers();

  const displayUsers = chunkArray(filteredUsers, pageSize);
  const usersTotalCount = filteredUsers.length;

  const searchHandler = (search: string) => {
    dispatch(setSearch(search));
    dispatch(setCurrentPage(1));
  };

  if (!isModeSelected) {
    return (
      <div className='container'>
        <ModeSelector onSelect={modeSelectHandler} />
      </div>
    );
  }
  return (
    <div className='App'>
      {isLoading && <Preloader />}
      <div>
        <SearchForm searchItem={searchHandler} />
      </div>

      {filteredUsers.length > pageSize && <Paginator totalItemsCount={usersTotalCount} pageSize={pageSize} currentPage={currentPage} onChangePage={pageChangeHandler} portionSize={5} />}
      {displayUsers.length && <InteractiveTable users={displayUsers[currentPage - 1]} onSort={onSort} sort={sort} sortField={sortField} onRowSelect={onRowSelect} />}
      <div>
        <Button
          variant='dark'
          style={{ margin: '10px' }}
          onClick={() => {
            setActiveModal(true);
          }}
        >
          ADD USER
        </Button>
      </div>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <AddUserForm />
      </Modal>

      {Object.keys(row).length > 0 ? <DetailRowView person={row} /> : null}
    </div>
  );
};
