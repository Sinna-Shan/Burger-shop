/* eslint-disable no-unused-vars */
import { Form, Input, Modal } from "antd";
import React, { useEffect, useMemo } from "react";
import {ItemModelType } from "./item.types";

const ItemModal = ({
  open,
  onClose,
  recordData,
  items = [],
  setItems,
}: ItemModelType) => {
  const [form] = Form.useForm();

  const initialValues = useMemo(() => {
    return {
      code: recordData?.code ?? "",
      name: recordData?.name ?? "",
      desc: recordData?.desc ?? "",
      qty: recordData?.qty ?? "",
      price: recordData?.price ?? "",
      discount: recordData?.discount ?? "",
    };
  }, [recordData]);

  const handleSave = async () => {
    const values = await form.validateFields();
    console.log(values);
    if (recordData) {
      const updatedItems = items.map((item) =>
        item.code === recordData.code ? { ...item, ...values } : item
      );
      setItems(updatedItems);
    } else {
      setItems([
        ...items,
        {
          ...values,
          code: `A${(items.length + 1).toString().padStart(5, "0")}`,
        },
      ]);
    }
    onClose();
  };

  useEffect(() => {
    if (open) {
      form.setFieldsValue(initialValues);
    }
  }, [open, form, initialValues]);
  return (
    <Modal
      open={open}
      onCancel={() => onClose()}
      destroyOnClose
      title="Create Item"
      onOk={handleSave}
    >
      <Form
        name="item-form"
        preserve={false}
        layout="vertical"
        initialValues={initialValues}
        form={form}
      >
        <Form.Item hidden name="code">
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Item name is required!" }]}
        >
          <Input placeholder="Item name" />
        </Form.Item>
        <Form.Item
          name="desc"
          label="Description"
          rules={[{ required: true, message: "Item description is required!" }]}
        >
          <Input placeholder="Item description" />
        </Form.Item>
        <Form.Item
          name="qty"
          label="Quantity"
          rules={[{ required: true, message: "Item quantity is required!" }]}
        >
          <Input placeholder="Item quantity" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Item price is required!" }]}
        >
          <Input placeholder="Item price" />
        </Form.Item>
        <Form.Item name="discount" label="Discount">
          <Input placeholder="Item discount" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ItemModal;
