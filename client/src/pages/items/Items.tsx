import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import itemData from "../../data/items";
import { Popconfirm, Table } from "antd";
import ItemModal from "./ItemModal";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { Item } from "./item.types";
import axiosInstance from "../../config/axiosConfig";

const Items = () => {
  const [items, setItems] = useState<Item[] | undefined>();
  const [open, setOpen] = useState(false);
  const [recordData, setRecordData] = useState<Item | null>(null);
  const initialItems = itemData;

  useEffect(function () { 
    async function getItems() {
      const res = await axiosInstance.get("/products?limit=100", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data.products);
      setItems(res.data.products);
    }
    getItems();
  },[])

  function onClose() {
    setRecordData(null);
    setOpen(false);
  }

  function handleUpdate(record: Item | null) {
    console.log(record);
    setRecordData(record);
    setOpen(true);
  }

  function handleDelete(code: number) {
    setItems(items?.filter((item) => item.product_id !== code));
  }
  const columns = [
    { title: "Code", dataIndex: "product_id", key: "product_id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "desc" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Quantity", dataIndex: "quantity", key: "qty" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Options",
      dataIndex: "options",
      key: "options",
      render: (_: unknown, record: Item) => (
        <div className="flex gap-3 text-xl">
          <FaPencil
            className="text-blue-800"
            onClick={() => handleUpdate(record)}
          />
          <Popconfirm
            title="Delete Item"
            description={`Are you sure want to delete Item ${record.name}`}
            onConfirm={() => handleDelete(record.code)}
          >
            <FaRegTrashCan className="text-red-500" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <MainLayout
      initialData={initialItems}
      data={items}
      setOpen={setOpen}
      setData={setItems}
    >
      <Table dataSource={items} columns={columns} />
      <ItemModal
        open={open}
        onClose={onClose}
        recordData={recordData}
        items={items}
        setItems={setItems}
      />
    </MainLayout>
  );
};

export default Items;
