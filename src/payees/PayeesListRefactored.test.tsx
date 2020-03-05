import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { PayeesListRow } from './PayeesListRefactored';
import { ColumnConfig, Payee } from './payee-types';

describe('PayeesListRow', () => {
  let columns: ColumnConfig[], payees: Payee[], thead: HTMLTableSectionElement;

  beforeEach(() => {
    columns = getColumnConfig();
    payees = getPayees();
    thead = document.createElement('thead');
  });

  test('loads and renders a row', () => {
    const { queryByText, getAllByText } = render(
      <PayeesListRow columns={columns} payee={payees[0]} />,
      {
        container: document.body.appendChild(thead),
      },
    );
    const header = queryByText(new RegExp(payees[0].payeeName));
    const {payeeName, address: {city, state}} = payees[0];
    const headers = getAllByText(new RegExp(`(${payeeName}|${city}|${state})`));
    expect(header).toBeInTheDocument();
    expect(headers.length).toBe(columns.length);
  });

  test('runs an event handler', () => {
    const mockHandler = jest.fn();
    const { queryByText } = render(
      <PayeesListRow columns={columns} payee={payees[0]} selectPayee={mockHandler} />,
      {
        container: document.body.appendChild(thead),
      },
    );
    const header = queryByText(new RegExp(payees[0].payeeName));
    expect(header).toBeInTheDocument();
    expect(mockHandler).not.toHaveBeenCalled();

    // If header is null, we will have failed before this point
    // @ts-ignore
    fireEvent.click(header);

    expect(mockHandler).toHaveBeenCalled();
  });
});

function getColumnConfig(): ColumnConfig[] {
  return [
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
}

function getPayees() {
  return [
    {
      id: '1',
      version: 1,
      payeeName: 'DCH Mortgages',
      address: {
        street: '1285 Rezlog Plaza',
        city: 'Powhatan',
        state: 'RI',
        zip: '02212',
      },
      categoryId: '102',
      active: true,
    },
    {
      id: '2',
      version: 1,
      payeeName: 'Ill Communication Telephones',
      address: {
        street: '1597 Figole Grove',
        city: 'Akron',
        state: 'OH',
        zip: '66345',
      },
      categoryId: '106',
      active: true,
    },
    {
      id: '3',
      version: 1,
      payeeName: "Erol's Internet",
      address: {
        street: '453 Loma Linda Junction',
        city: 'Kansas City',
        state: 'KS',
        zip: '60019',
      },
      categoryId: '106',
      active: true,
    },
  ];
}
