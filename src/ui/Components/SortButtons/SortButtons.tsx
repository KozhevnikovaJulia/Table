import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './SortButtons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { sortUserFirstName, sortUserLastName, sortUserEmail, sortUserPhone, sortUserId } from '../../../bll/UsersReducer'

export const SortButtons = (props:{param:string}) => {
    const dispatch = useDispatch()

    const sort = (orientation: string, param: string) => {
        switch (param) {
            case "firstName":
                dispatch(sortUserFirstName(orientation))
                break
            case "lastName":
                dispatch(sortUserLastName(orientation))
                break
            case "phone":
                dispatch(sortUserPhone(orientation))
                break
            case "email":
                dispatch(sortUserEmail(orientation))
                break
            case "id":
                dispatch(sortUserId(orientation))
                break
            default: return "Error"
        }           
    }
       
    return <div className={s.tableSortIcons}>
        <a type="submit" onClick={() => sort("up", props.param)}><FontAwesomeIcon icon={faSortUp} size="1x" /></a>
        <a type="submit" onClick={() => sort("down", props.param)}><FontAwesomeIcon icon={faSortDown} size="1x" /></a>
    </div>
}


