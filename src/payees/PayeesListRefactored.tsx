import React from 'react';
import { ColumnConfig, Payee } from './payee-types';
import * as lodash from 'lodash';

interface PayeesListProps {
  columns: ColumnConfig[];
  payees: Payee[];
  selectPayee?: (selectedPayee: Payee) => void;
  selectHeader?: (column: ColumnConfig) => void;
}

const PayeesList = ({
  payees,
  columns,
  selectPayee,
  selectHeader,
}: PayeesListProps) => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <PayeesListHeader columns={columns} selectHeader={selectHeader} />
      <tbody>
        {payees.map(payee => (
          <PayeesListRow
            payee={payee}
            columns={columns}
            selectPayee={selectPayee}
            key={payee.id}
          />
        ))}
      </tbody>
    </table>
  );
};

const PayeesListHeader = ({
  columns,
  selectHeader,
}: Pick<PayeesListProps, 'columns' | 'selectHeader'>) => {
  return (
    <thead>
      <tr>
        {columns.map(({ field, label }) => (
          <th
            key={field}
            onClick={() => selectHeader && selectHeader({ field, label })}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const PayeesListRow = ({
  columns,
  payee,
  selectPayee,
}: Pick<PayeesListProps, 'columns' | 'selectPayee'> & { payee: Payee }) => {
  return (
    <tr onClick={() => selectPayee && selectPayee(payee)}>
      {columns.map(column => (
        <td key={column.field}>{lodash.get(payee, column.field) + ''}</td>
      ))}
    </tr>
  );
};

export default PayeesList;
