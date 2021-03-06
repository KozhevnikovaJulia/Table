import React from 'react'
import { useDispatch } from 'react-redux'
import { setUrl } from '../../../bll/Reducer'

export let ModeSelector = (props:{onSelect:(countUsers:number)=>void}) => {
  const dispatch = useDispatch()
  
const smallUrl = 32
const bigUrl = 1000
  return <div>
   <button onClick={()=>{props.onSelect(smallUrl); dispatch(setUrl(smallUrl))}}>32 users</button>
   <button onClick={()=>{props.onSelect(bigUrl); dispatch(setUrl(bigUrl))}}>1000 users</button>
  </div>
}

