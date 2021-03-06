import React from 'react'
import { UserType } from '../../../api/Api'

export const DetailRowView = (props: { person: UserType }) => {
  return (
    <div>
      <p>Выбран пользователь <b>{props.person.firstName + ' ' + props.person.lastName}</b></p>
      <p>
        Описание: <br />
        <textarea defaultValue={props.person.description} />
      </p>

      <p>Адрес проживания: <b>{props.person.adress && props.person.adress.streetAddress}</b></p>
      <p>Город: <b>{props.person.adress && props.person.adress.city}</b></p>
      <p>Провинция/штат: <b>{props.person.adress && props.person.adress.state}</b></p>
      <p>Индекс: <b>{props.person.adress && props.person.adress.zip}</b></p>
    </div>
  )
}



