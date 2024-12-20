import React from "react";
import { Form, Input, Button } from "antd";
import type { FormProps } from "antd";
import axiosInstance from "../../config/axiosConfig";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await axiosInstance.post("/auth/login", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate("/dashboard");
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };
  return (
    <main className="flex h-screen w-full items-center justify-center gap-4 bg-slate-900 p-4">
      <section className="flex h-full w-1/2 flex-col items-center justify-center text-white">
        <h1 className="mb-8 text-2xl uppercase">Log in</h1>
        <Form
          name="login form"
          layout="vertical"
          className="w-full px-24"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="user_name"
            layout="vertical"
            label={<label className="text-white">Username</label>}
            rules={[
              {
                required: true,
                message: "Please input your username or email.",
              },
            ]}
          >
            <Input placeholder="example@gmail.com" className="h-10" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<label className="text-white">Password</label>}
            layout="vertical"
            rules={[{ required: true, message: "Please input your password." }]}
          >
            <Input.Password className="h-10" />
          </Form.Item>
          <Form.Item className="mt-10">
            <Button
              className="custom-hover h-12 w-full bg-slate-900 text-lg text-white hover:border-none"
              htmlType="submit"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="mt-4 w-full px-24">
          <p className="mb-5">don't have an account?</p>
          <Link
            to="/signup"
            className="custom-hover h-12 rounded-md border px-4 py-2 text-lg text-blue-100"
          >
            Sign up
          </Link>
        </div>
        <hr className="" />
      </section>
    </main>
  );
};

export default LoginPage;
