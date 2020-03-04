type AddressKeys = 'address.city' | 'address.street' | 'address.state' | 'address.zip';

type PayeeKeys = keyof Payee | AddressKeys;
export interface ColumnConfig {
  field: PayeeKeys;
  label: string;
}

export interface Payee {
  id: string;
  version: number;
  payeeName: string;
  address: Address;
  categoryId: string;
  image?: string;
  motto?: string;
  active: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
