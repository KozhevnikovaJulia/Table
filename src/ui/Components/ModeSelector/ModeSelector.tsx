import React from 'react'
import { useDispatch } from 'react-redux'
import { setUrl } from '../../../bll/Reducer'
import { Button } from 'react-bootstrap'
import style from './ModeSelector.module.css'

export let ModeSelector = (props:{onSelect:(countUsers:number)=>void}) => {
  const dispatch = useDispatch()
  
const smallUrl = 32
const bigUrl = 1000
  return <div className={style.buttons}>
   <Button className={style.button} variant="dark" onClick={()=>{props.onSelect(smallUrl); dispatch(setUrl(smallUrl))}}>32 users</Button>
   <Button className={style.button} variant="dark" onClick={()=>{props.onSelect(bigUrl); dispatch(setUrl(bigUrl))}}>1000 users</Button>
  </div>
}

