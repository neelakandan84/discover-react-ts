import React, { ChangeEvent, useState } from 'react';

interface PayeesSearchProps {
  searchPayees: (msg: string) => void;
}

interface Person {
  firstName: string;
  lastName: string;
  city: string;
}

const PayeesSearch = (props: PayeesSearchProps) => {
  const [searchText, setSearchText] = useState('');

  const handleButton = () => {
    console.log('You clicked on the button');
    props.searchPayees(searchText);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  return (
    <div>
      <label htmlFor="searchPayeeName">Payee Name:</label>
      <input type="text" id="searchPayeeName" onChange={handleInput} value={searchText} />
      <button type="button" onClick={handleButton}>
        Search!
      </button>
    </div>
  );
};

export default PayeesSearch;
