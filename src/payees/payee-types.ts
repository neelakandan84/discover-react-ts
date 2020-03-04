export interface ColumnConfig {
  field: string;
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
  [key: string]: any;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
