import React from 'react';
import { ColumnConfig, Payee } from './payee-types';

interface PayeesListProps {
  columns: ColumnConfig<Payee>[];
  payees: Payee[];
  selectPayee?: (selectedPayee: Payee) => void;
  selectHeader?: (column: ColumnConfig<Payee>) => void;
}

const PayeesList = ({ payees, columns }: PayeesListProps) => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <tbody>
        {payees.map(payee => (
          <tr key={payee.id}>
            {columns.map(column => (
              <td key={column.field}>{payee[column.field]?.toString()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayeesList;
