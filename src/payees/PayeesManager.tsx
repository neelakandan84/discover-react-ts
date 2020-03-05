/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Switch, Route, NavLink, Redirect, useHistory } from 'react-router-dom';

import PayeesSearch from './PayeesSearch';
import { dao } from './payees-dao';
import PayeesList from './PayeesListRefactored';
import { ColumnConfig, Payee } from './payee-types';

function PayeesManager() {
  const [payees, setPayees] = useState([]);
  const [searchText, setSearchText] = useState('');
  const history = useHistory();

  useEffect(() => {
    dao.getPayees().then(payees => {
      setPayees(payees);
      console.log(`There are ${payees.length} payees.`);
    });
  }, []);

  function handleSearchPayees(searchText: string) {
    console.log('PayeesManager: handleSearchPayees(): ', searchText);
    setSearchText(searchText);
    history.push('/payees/list');

  }

  let payeeCount = <p>&nbsp;</p>;

  if (payees.length) {
    payeeCount = <p>There are verifiably {payees.length} payees.</p>;
  }

  const columns: ColumnConfig[] = [
    {
      field: 'payeeName',
      label: 'Payee Name',
    },
    {
      field: 'address.city',
      label: 'City',
    },
    {
      field: 'address.state',
      label: 'State',
    },
  ];

  const handleSelectHeader = ({ field, label }: ColumnConfig) => {
    console.log(`You clicked on the ${label} header`);
  };

  const handleSelectPayee = (payee: Payee) => {
    console.log(`You clicked on ${payee.payeeName}`);
  };

  const displayPayees = payees.filter((payee: Payee) => {
    if (searchText === '') {
      return true;
    } else {
      return payee.payeeName.toUpperCase().includes(searchText.toUpperCase());
    }
  });

  return (
    <div>
      <h2 className="is-size-4">Payees</h2>
      <p>
        <NavLink to="/payees/search">Search</NavLink> |{' '}
        <NavLink to="/payees/list">Browse</NavLink>
      </p>
      <p style={{ visibility: payees.length ? 'visible' : 'hidden' }}>
        There are {payees.length} payees.
      </p>
      {/*payeeCount*/}
      {/*
        payees.length ?
        <p>There are {payees.length} payees.</p> :
        <p>&nbsp;</p>
      */}
      <Switch>
        <Route path="/payees/search">
          <PayeesSearch searchPayees={handleSearchPayees} />
        </Route>
        <Route path="/payees/list">
          <PayeesList
            payees={displayPayees}
            columns={columns}
            selectHeader={handleSelectHeader}
            selectPayee={handleSelectPayee}
          />
        </Route>
        <Route path="/payees">
          <Redirect to="/payees/search" />
        </Route>
      </Switch>
    </div>
  );
}

export default PayeesManager;
