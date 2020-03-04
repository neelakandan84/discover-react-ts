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
      <PayeesListHeader columns={columns} />
      <tbody>
        {payees.map(payee => (
          <PayeesListRow payee={payee} columns={columns} key={payee.id}/>
        ))}
      </tbody>
    </table>
  );
};

type PayeesListColumns = Pick<PayeesListProps, 'columns'>;

const PayeesListHeader = ({ columns }: PayeesListColumns) => {
  return (
    <thead>
      <tr>
        {columns.map(({ field, label }) => (
          <th key={field}>{label}</th>
        ))}
      </tr>
    </thead>
  );
};

const PayeesListRow = ({ columns, payee }: PayeesListColumns & { payee: Payee }) => {
  return (
    <tr>
      {columns.map(column => (
        <td key={column.field}>{lodash.get(payee, column.field) + ''}</td>
      ))}
    </tr>
  );
};

export default PayeesList;
