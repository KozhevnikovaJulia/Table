import {LittleDataAPI, AlotDataAPI, UserType, UserAdressType} from '../api/Api'

let initialState = {
    users: [ ] as Array<UserType>,
    pageSize: 50,
    currentPage: 1,
    filter: {
        term:''
    }
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SETUSERS':
            return { ...state, users: action.users }

        case 'FILTER-USER': {
            let stateCope = { ...state, users: [...state.users] }
            stateCope.users.filter(user => user.firstName === action.searchName)
            return stateCope
        }
        case 'SORT-USER-FIRST-NAME': {
            let stateCope = { ...state, users: [...state.users] }

            if (action.orientation === "up") {
                stateCope.users.sort((a, b) => {
                    if (a.firstName > b.firstName) {
                        return 1;
                    }
                    if (a.firstName < b.firstName) {
                        return -1;
                    }
                    return 0;
                })
            } else {
                stateCope.users.sort((a, b) => {
                    if (a.firstName < b.firstName) {
                        return 1;
                    }
                    if (a.firstName > b.firstName) {
                        return -1;
                    }
                    return 0;
                })
            }
            return stateCope
        }
        case 'SORT-USER-LAST-NAME': {
            let stateCope = { ...state, users: [...state.users] }

            if (action.orientation === "up") {
                stateCope.users.sort((a, b) => {
                    if (a.lastName > b.lastName) {
                        return 1;
                    }
                    if (a.lastName < b.lastName) {
                        return -1;
                    }
                    return 0;
                })
            } else {
                stateCope.users.sort((a, b) => {
                    if (a.lastName < b.lastName) {
                        return 1;
                    }
                    if (a.lastName > b.lastName) {
                        return -1;
                    }
                    return 0;
                })
            }
            return stateCope
        }
        case 'SORT-USER-EMAIL': {
            let stateCope = { ...state, users: [...state.users] }

            if (action.orientation === "up") {
                stateCope.users.sort((a, b) => {
                    if (a.email > b.email) {
                        return 1;
                    }
                    if (a.email < b.email) {
                        return -1;
                    }
                    return 0;
                })
            } else {
                stateCope.users.sort((a, b) => {
                    if (a.email < b.email) {
                        return 1;
                    }
                    if (a.email > b.email) {
                        return -1;
                    }
                    return 0;
                })
            }
            return stateCope
        }
        case 'SORT-USER-PHONE': {
            let stateCope = { ...state, users: [...state.users] }

            if (action.orientation === "up") {
                stateCope.users.sort((a, b) => {
                    if (a.phone > b.phone) {
                        return 1;
                    }
                    if (a.phone < b.phone) {
                        return -1;
                    }
                    return 0;
                })
            } else {
                stateCope.users.sort((a, b) => {
                    if (a.phone < b.phone) {
                        return 1;
                    }
                    if (a.phone > b.phone) {
                        return -1;
                    }
                    return 0;
                })
            }
            return stateCope
        }
        default: return state
    }
}




//Action creators
export const setUsers = (users: Array<UserType>) => ({type:'SETUSERS', users}as const)
export const sortUserFirstName = (orientation: string) => ({type:'SORT-USER-FIRST-NAME', orientation}as const)
export const sortUserLastName = (orientation: string) => ({type:'SORT-USER-LAST-NAME', orientation}as const)
export const sortUserEmail = (orientation: string) => ({type:'SORT-USER-EMAIL', orientation}as const)
export const sortUserPhone = (orientation: string) => ({type:'SORT-USER-PHONE', orientation}as const)
export const sortUserId = (orientation: string) => ({type:'SORT-USER-ID', orientation}as const)
export const filterUser = (searchName:string) => ({type: 'FILTER-USER', searchName}as const)

//Thunk creators
export const getUsers = () =>
    async (dispatch: any) => {
        try {
            const response = await LittleDataAPI.getUsersInfo()
            dispatch(setUsers(response.data))
            console.log(response.data)
        } catch (error) {
        }
    }

export const addUser = (data: UserType) =>
    async (dispatch: any) => {
        try {
            const response = await LittleDataAPI.addUser(data)
            dispatch(setUsers(response.data))

        } catch (error) {
        }
    }

// export const searchUserTS = (searchName:string) =>
//     async (dispatch: any) => {
//         try {
//             const response = await LittleDataAPI.addUser(data)
//             dispatch(filterUser(response.data))

//         } catch (error) {
//         }
//     }

//types
   type ActionsType = 
   | ReturnType<typeof setUsers>
   | ReturnType<typeof sortUserLastName>
   | ReturnType<typeof sortUserEmail>
   | ReturnType<typeof sortUserFirstName> 
   | ReturnType<typeof sortUserId> 
   | ReturnType<typeof sortUserPhone> 
   | ReturnType<typeof filterUser> 

   type InitialStateType = typeof initialState
