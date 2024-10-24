/* eslint-disable no-unused-vars */
export interface Item {
  code: string;
  name: string;
  desc: string;
  qty: number;
  price: number;
  discount: number;
}

export interface ItemModelType {
  open: boolean;
  onClose: () => void;
  recordData: Item | null;
  items: Item[] | undefined;
  setItems: (items: Item[]) => void;
}
