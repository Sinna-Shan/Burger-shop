/* eslint-disable no-unused-vars */
export interface Item {
  brand: string;
  category: string;
  createdAt: string;
  description: string;
  name: string;
  price: string;
  product_id: number;
  quantity: number;
}

export interface ItemModelType {
  open: boolean;
  onClose: () => void;
  recordData: Item | null;
  items: Item[] | undefined;
  setItems: (items: Item[]) => void;
}
