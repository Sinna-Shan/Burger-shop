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
      code: recordData?.product_id ?? "",
      name: recordData?.name ?? "",
      desc: recordData?.description ?? "",
      qty: recordData?.quantity ?? "",
      price: recordData?.price ?? "",
      category: recordData?.category ?? "",
      brand: recordData?.brand ?? "",
    };
  }, [recordData]);

  const handleSave = async () => {
    const values = await form.validateFields();
    console.log(values);
    if (recordData) {
      const updatedItems = items.map((item) =>
        item.product_id === recordData.product_id ? { ...item, ...values } : item
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
      title={!recordData ? "Create Item" : "Update Item"}
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
          name="category"
          label="Category"
          rules={[{ required: true, message: "Item category is required!" }]}
        >
          <Input placeholder="Item category" />
        </Form.Item>
        <Form.Item
          name="brand"
          label="Brand"
          rules={[{ required: true, message: "Item brand is required!" }]}
        >
          <Input placeholder="Item brand" />
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
      </Form>
    </Modal>
  );
};

export default ItemModal;
