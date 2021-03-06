import React from 'react';
import style from './Preloader.module.css'
import preloader from './Spinner-1s-200px.svg'

export let Preloader = () => {
    return <div className={style.pre} >
        <img src={preloader}  style={ { height: 200 } }/>
    </div>
}
