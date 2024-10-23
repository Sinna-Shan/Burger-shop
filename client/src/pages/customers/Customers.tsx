/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Table } from "antd";
import { customers as customersData } from "../../data/customers";
import MainLayout from "../../components/layouts/MainLayout";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import { Customer } from "./customers.types";
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
    render: (_: never, record: Customer) => (
      <div className="flex gap-3 text-xl">
        <FaPencil className="text-blue-800" />
        <FaRegTrashCan className="text-red-500" />
      </div>
    ),
  },
];

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);
  const initialData = customersData;

  return (
    <MainLayout
      setData={setCustomers}
      data={customers}
      initialData={initialData}
    >
      <Table columns={columns} dataSource={customers} />
    </MainLayout>
  );
};

export default Customers;
