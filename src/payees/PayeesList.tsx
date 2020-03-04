import React from 'react';
import { ColumnConfig, Payee } from './payee-types';
import * as lodash from 'lodash';

interface PayeesListProps {
  columns: ColumnConfig[];
  payees: Payee[];
  selectPayee?: (selectedPayee: Payee) => void;
  selectHeader?: (column: ColumnConfig) => void;
}

const PayeesList = ({ payees, columns }: PayeesListProps) => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          {columns.map(({ field, label }) => (
            <th key={field}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {payees.map(payee => (
          <tr key={payee.id}>
            {columns.map(column => (
              <td key={column.field}>{lodash.get(payee, column.field) + ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayeesList;
