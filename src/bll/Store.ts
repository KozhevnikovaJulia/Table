import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { usersReducer } from '../bll/UsersReducer'
import thunkMiddleware from 'redux-thunk'


let redusers = combineReducers (
    {
        users: usersReducer        
    }
)

export type AppStateType = ReturnType<typeof redusers>

export let store = createStore (redusers, applyMiddleware (thunkMiddleware))
