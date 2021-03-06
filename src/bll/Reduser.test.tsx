import {usersReducer, filterUsers, InitialStateType} from "./Reducer"
import { UserType } from '../api/Api'
 

 let startState: InitialStateType
 
 beforeEach (() => {
     startState = {  
     filteredUsers: [],      
     users: [
         {id: 1, firstName: "Ann", lastName: "Smith", email:"Adamenko1501@mail.ru", phone: "666666",
         adress: {  streetAddress: "Sweet", city: "Moscow", state: "la", zip: "15z"}, description:"lalaal"},
         {id: 1, firstName: "Juli", lastName: "Smith", email:"Adamenko1501@mail.ru", phone: "666666",
         adress: {  streetAddress: "Sweet", city: "Moscow", state: "la", zip: "15z"}, description:"yo"},
     ],
     pageSize:10,
     currentPage: 1,
     usersTotalCount:0
    }
 })
 
 test('correct todolist should be removed', () => {   
    const endState = usersReducer(startState, filterUsers ("Ann"))
 
    expect(endState.filteredUsers.length).toBe(1)
    expect(endState.filteredUsers[0].firstName).toBe("Ann")
 })

 

