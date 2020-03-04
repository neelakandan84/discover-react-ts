export interface ColumnConfig<T> {
  field: keyof T;
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
