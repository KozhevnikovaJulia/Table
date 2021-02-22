import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import { Button, Form } from 'react-bootstrap'

export const AddItemForm = React.memo( (props:{addItem: (title:string)=>void}) => {
    let [title, setTitle] = useState(" ")

    const addItemTitle = () => { props.addItem(title); setTitle(" ") }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setTitle(e.currentTarget.value)};
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {if (e.key === "Enter") { addItemTitle() }
    };

  return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />                
                </Form.Group>
                <Button type="submit" onClick={addItemTitle}>ADD</Button>
            </Form>
        </div>                
    )
})



