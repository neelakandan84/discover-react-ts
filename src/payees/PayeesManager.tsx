import React, { useEffect, useState } from 'react';
import PayeesSearch from './PayeesSearch';
import { dao } from './payees-dao';
import PayeesList from './PayeesList';

function PayeesManager() {
  const [payees, setPayees] = useState([]);

  useEffect(() => {
    dao.getPayees().then(payees => {
      setPayees(payees);
      console.log(`There are ${payees.length} payees.`);
    });
  }, []);

  function handleSearchPayees(message: string) {
    console.log('PayeesManager: handleSearchPayees(): ', message);
  }

  let payeeCount = <p>&nbsp;</p>;

  if (payees.length) {
    payeeCount = <p>There are verifiably {payees.length} payees.</p>;
  }

  const columns = [
    {
      field: 'payeeName',
      label: 'Payee Name'
    },
    {
      field: 'active',
      label: 'Active'
    }
  ]

  return (
    <div>
      <h2 className="is-size-4">Payees</h2>
      <p style={{ visibility: payees.length ? 'visible' : 'hidden' }}>
        There are {payees.length} payees.
      </p>
      {/*payeeCount*/}
      {/*
        payees.length ?
        <p>There are {payees.length} payees.</p> :
        <p>&nbsp;</p>
      */}
      {/* <PayeesSearch searchPayees={handleSearchPayees} /> */}
      <PayeesList payees={payees} columns={columns} />
    </div>
  );
}

export default PayeesManager;
