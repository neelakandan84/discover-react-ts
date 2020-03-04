import React, { useEffect } from 'react';
import PayeesSearch from './PayeesSearch';
import { dao } from './payees-dao';

function PayeesManager() {
  useEffect(() => {
    dao
      .getPayees()
      .then(payees => console.log(`There are ${payees.length} payees.`));
  }, []);

  function handleSearchPayees(message: string) {
    console.log('PayeesManager: handleSearchPayees(): ', message);
  }

  return (
    <div>
      <h2 className="is-size-4">Payees</h2>
      <PayeesSearch searchPayees={handleSearchPayees} />
    </div>
  );
}

export default PayeesManager;
