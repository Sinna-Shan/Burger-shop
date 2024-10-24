import React, { useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import itemData from "../../data/items";
import { Popconfirm, Table } from "antd";
import ItemModal from "./ItemModal";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { Item } from "./item.types";

const Items = () => {
  const [items, setItems] = useState<Item[] | undefined>(itemData);
  const [open, setOpen] = useState(false);
  const [recordData, setRecordData] = useState<Item | null>(null);
  const initialItems = itemData;

  function onClose() {
    setRecordData(null);
    setOpen(false);
  }

  function handleUpdate(record: Item | null) {
    setRecordData(record);
    setOpen(true);
  }

  function handleDelete(code: string) {
    setItems(items?.filter((item) => item.code !== code));
  }
  const columns = [
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "desc", key: "desc" },
    { title: "Quantity", dataIndex: "qty", key: "qty" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Discount", dataIndex: "discount", key: "discount" },
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
