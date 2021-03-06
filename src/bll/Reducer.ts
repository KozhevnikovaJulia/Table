import {API, UserType, UserAdressType} from '../api/Api'
import { AppStateType } from './Store'
import _ from 'lodash'


let initialState = {
    users: [ ] as Array<UserType>,
    isModeSelected: false,
    isLoading: false,
    sort: 'asc',  // 'desc'
    sortField: 'id', // поле по умолчанию
    pageSize: 50,
    currentPage: 1,
    row: {} as UserType,
    search:'',
    countUsers: 32 //1000
}

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SETUSERS':
            return { ...state, users: action.users }        
        case 'SET-ISLOADING':
            return { ...state, isLoading: action.isLoading }
        case 'SET-SORT':
            return { ...state, sort: action.sort }
        case 'SET-SORTFIELD':
            return { ...state, sortField: action.sortField }
        case 'SET-CURRENTPAGE':
            return { ...state, currentPage: action.currentPage }
        case 'SET-PAGESIZE':
            return { ...state, pageSize: action.pageSize }
        case 'SET-ROW':
            return { ...state, row: action.row }
        case 'SET-ISMODE-SELECTED':
            return { ...state, isModeSelected: action.isModeSelected }
        case 'SET-SEARCH':
            return { ...state, search: action.search }
        case 'SET-COUNT-USERS':
            return { ...state, countUsers: action.countUsers }
        default: return state
    }
}


//Action creators
export const setUsers = (users: Array<UserType>) => ({type:'SETUSERS', users}as const)
export const setCurrentPage = (currentPage: number) => ({type:'SET-CURRENTPAGE', currentPage}as const)
export const setPageSize = (pageSize: number) => ({type:'SET-PAGESIZE', pageSize}as const)
export const setIsLoading = (isLoading: boolean) => ({type:'SET-ISLOADING', isLoading}as const)
export const setSort = (sort: string) => ({type:'SET-SORT', sort}as const)
export const setSortField = (sortField: string) => ({type:'SET-SORTFIELD', sortField}as const)
export const setRow = (row: UserType) => ({type:'SET-ROW', row}as const)
export const setIsModeSelected = (isModeSelected: boolean) => ({type:'SET-ISMODE-SELECTED', isModeSelected}as const)
export const setSearch = (search: string) => ({type:'SET-SEARCH', search}as const)
export const setUrl = (countUsers: number) => ({type:'SET-COUNT-USERS', countUsers}as const)

//Thunk creators

    export const getUsers = (countUsers: number) =>
    
    async (dispatch: any, getState: () => AppStateType) => {
        try {
            dispatch(setIsLoading(true))           
            const response = await API.getUsersInfo(countUsers)
            const sort = getState().app.sort
            const sortField =getState().app.sortField
            const cloneUsers = response.data.concat();
            const sortType = sort === 'asc' ? 'desc' : 'asc';
            const orderedUsers = _.orderBy(cloneUsers, sortField, sortType); 
            dispatch(setUsers(orderedUsers))
            dispatch(setIsLoading(false))
        } catch (error) {
        }
    }

export const addUser = (data: UserType, countUsers: number) =>
    async (dispatch: any) => {
        try {
            const response = await API.addUser(data, countUsers)
            dispatch(setUsers(response.data))
        } catch (error) {
        }
    }
  

//types
   type ActionsType = 
   | ReturnType<typeof setUsers>
   | ReturnType<typeof setCurrentPage> 
   | ReturnType<typeof setPageSize>
   | ReturnType<typeof setIsLoading>
   | ReturnType<typeof setSort>
   | ReturnType<typeof setSortField>
   | ReturnType<typeof setRow>
   | ReturnType<typeof setIsModeSelected>
   | ReturnType<typeof setSearch>
   | ReturnType<typeof setUrl>

   export type InitialStateType = typeof initialState

    