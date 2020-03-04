import React from 'react';
import { ColumnConfig, Payee } from './payee-types';

interface PayeesListProps {
  columns: ColumnConfig[];
  payees: Payee[];
  selectPayee?: (selectedPayee: Payee) => void;
  selectHeader?: (column: ColumnConfig) => void;
}

const PayeesList = ({ payees, columns }: PayeesListProps) => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <tbody>
        {payees.map(payee => {
          return (
            <tr key={payee.id}>
              {columns.map(column => {
                return (
                  <td key={column.field}>{payee[column.field].toString()}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PayeesList;
