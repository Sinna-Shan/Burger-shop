/* eslint-disable no-unused-vars */
import { Form, Input, Modal } from "antd";
import { useEffect, useMemo } from "react";
import { Customer, CustomerModelType } from "./customers.types";

const CustomerModal = ({
  open,
  onClose,
  setCustomers,
  customers,
  recordData,
}: CustomerModelType) => {
  const [form] = Form.useForm();
  const initialValues = useMemo(() => {
    return {
      id: recordData?.id ?? "",
      first_name: recordData?.first_name ?? "",
      last_name: recordData?.last_name ?? "",
      mobile: recordData?.mobile ?? "",
      email: recordData?.email ?? "",
    };
  }, [recordData]);

  const onFinish = async () => {
    const data = await form.validateFields();
    if (recordData) {
      const updatedCustomers = customers.map((customer: Customer) =>
        customer.id === recordData.id ? { ...customer, ...data } : customer
      );
      setCustomers(updatedCustomers);
    } else {
      setCustomers([
        ...customers,
        {
          id: `CUS_${customers.length + 1}`,
          ...data,
        },
      ]);
    }
    form.resetFields();
    onClose(false);
  };

  useEffect(
    function () {
      if (open) {
        form.setFieldsValue(initialValues);
      }
    },
    [open, form, initialValues]
  );
  return (
    <Modal
      open={open}
      title="create customer"
      destroyOnClose
      onCancel={() => onClose(false)}
      onOk={onFinish}
    >
      <Form
        name="customer form"
        form={form}
        onFinish={onFinish}
        initialValues={recordData ? initialValues : {}}
        preserve={false}
      >
        <Form.Item label="ID" name="id" hidden={true}>
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="first_name"
          required
          rules={[{ required: true, message: "First name is required" }]}
        >
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          required
          rules={[{ required: true, message: "Last name is required" }]}
        >
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item
          label="Mobile"
          name="mobile"
          required
          rules={[{ required: true, message: "Mobile number is required" }]}
        >
          <Input placeholder="Mobile number" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          required
          rules={[{ required: true, message: "Email is required" }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomerModal;
