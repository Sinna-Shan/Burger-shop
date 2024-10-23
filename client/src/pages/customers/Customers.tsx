/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Popconfirm, Table } from "antd";
import { customers as customersData } from "../../data/customers";
import MainLayout from "../../components/layouts/MainLayout";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import { Customer } from "./customers.types";
import CustomerModal from "./CustomerModal";

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const initialData = customersData;
  const [open, setOpen] = useState(false);
  const [recordData, setRecordData] = useState<Customer | null>(null);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      hidden: true,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first-name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last-name",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Options",
      dataIndex: "options",
      key: "options",
      render: (_: unknown, record: Customer) => (
        <div className="flex gap-3 text-xl">
          <FaPencil
            className="text-blue-800"
            onClick={() => handleUpdate(record)}
          />
          <Popconfirm
            title="Delete Customer"
            description={`Are you sure want to delete customer ${record.first_name}`}
            onConfirm={() => handleDelete(record.id)}
          >
            <FaRegTrashCan className="text-red-500" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  function handleUpdate(data: Customer): void {
    setRecordData(data);
    setOpen(true);
  }

  function handleClose() {
    setRecordData(null);
    setOpen(false);
  }

  function handleDelete(id: string) {
    setCustomers(customers.filter((cus) => cus.id !== id));
  }

  return (
    <MainLayout
      setData={setCustomers}
      data={customers}
      initialData={initialData}
      setOpen={setOpen}
    >
      <Table columns={columns} dataSource={customers} />
      <CustomerModal
        open={open}
        onClose={handleClose}
        setCustomers={setCustomers}
        customers={customers}
        recordData={recordData}
      />
    </MainLayout>
  );
};

export default Customers;
