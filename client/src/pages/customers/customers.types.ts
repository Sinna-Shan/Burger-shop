/* eslint-disable no-unused-vars */
export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  orders: unknown[];
}

export interface CustomerModelType {
  open: boolean;
  onClose: (open: boolean) => void;
  setCustomers: (customers: Customer[]) => void;
  customers: Customer[];
  recordData?: Customer | null;
}