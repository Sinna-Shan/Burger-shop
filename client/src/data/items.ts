import { Item } from "../pages/items/item.types";


const generateItems = (count:number) => {
  const items = [];

  for (let i = 1; i <= count; i++) {
    const item = {
      code: `A${i.toString().padStart(5, "0")}`, // Generates a code like A001, A002, etc.
      name: `Item ${i}`,
      desc: `Description for Item ${i}`,
      qty: Math.floor(Math.random() * 100) + 1, // Random quantity between 1 and 100
      price: parseFloat((Math.random() * 1000).toFixed(2)), // Random price between 0 and 1000
      discount: parseFloat((Math.random() * 0.5).toFixed(2)), // Random discount between 0% and 50%
    };

    items.push(item);
  }

  return items;
};
const itemData: Item[] = generateItems(100);

export default itemData;