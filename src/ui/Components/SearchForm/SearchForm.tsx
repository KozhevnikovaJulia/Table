import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const SearchForm = React.memo((props: { searchItem: (searchName1: string) => void }) => {
  let [searchName, setSearchName] = useState('');

  const searchItemName = () => {
    props.searchItem(searchName);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchItemName();
    }
  };

  return (
    <div>
      <div>
        <Form.Control type='text' value={searchName} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} placeholder='Search' className='mr-sm-2' style={{ margin: '10px' }} />
        <Button type='submit' onClick={searchItemName} variant='dark' style={{ margin: '10px' }}>
          SEARCH
        </Button>
      </div>
    </div>
  );
});
