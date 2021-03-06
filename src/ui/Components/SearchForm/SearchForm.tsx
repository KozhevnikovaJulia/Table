import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../bll/Store'
import style from './SearchForm.module.css'

export const SearchForm = React.memo( (props:{searchItem: (searchName:string, countUsers:number)=>void}) => {
    let [searchName, setSearchName] = useState(" ")
    const countUsers = useSelector<AppStateType, number>(state => state.app.countUsers)

    const searchItemName = () => { props.searchItem(searchName, countUsers)}
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setSearchName(e.currentTarget.value)};
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {if (e.key === "Enter") { searchItemName() }
    };

  return (

      <div>
          <Form inline>
              <Form.Control type="text" value={searchName} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} placeholder="Search" className="mr-sm-2" />
              <Button type="submit" onClick={searchItemName} variant="dark">SEARCH</Button>
          </Form>
      </div>              
    )
})