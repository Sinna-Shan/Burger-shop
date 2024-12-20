import { Button, Form, FormProps, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosConfig";

type FieldType = {
  first_name?: string;
  last_name?: string;
  email?: string;
  nic: string;
  mobile?: string;
  role?: string;
  gender?: string;
  username?: string;
  password?: string;
};

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async () => {
    try {
      const values = await form.validateFields();
      const res = await axiosInstance.post("/auth/register", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        form.resetFields();
        navigate("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <main className="flex min-h-screen w-full items-center justify-center gap-4 bg-slate-900 p-4">
      <section className="flex h-full w-1/2 flex-col items-center justify-center text-white">
        <h1 className="mb-8 text-2xl uppercase">Register</h1>
        <Form
          name="login form"
          layout="vertical"
          className="w-full px-24"
          onFinish={onFinish}
          form={form}
        >
          <div className="flex gap-2">
            <Form.Item
              name="first_name"
              layout="vertical"
              className="w-1/2"
              label={<label className="text-white">First name</label>}
              rules={[
                {
                  required: true,
                  message: "First name is required.",
                },
              ]}
            >
              <Input placeholder="john" className="h-10" />
            </Form.Item>
            <Form.Item
              name="last_name"
              layout="vertical"
              className="w-1/2"
              label={<label className="text-white">Last name</label>}
              rules={[
                {
                  required: true,
                  message: "Last name is required.",
                },
              ]}
            >
              <Input placeholder="doe" className="h-10" />
            </Form.Item>
          </div>

          <Form.Item
            name="email"
            layout="vertical"
            label={<label className="text-white">Email</label>}
            rules={[
              {
                required: true,
                message: "Email name is required.",
              },
            ]}
          >
            <Input type="email" placeholder="john@email.com" className="h-10" />
          </Form.Item>
          <div className="flex gap-2">
            <Form.Item
              name="nic"
              layout="vertical"
              className="w-1/2"
              label={<label className="text-white">NIC</label>}
              rules={[
                {
                  required: true,
                  message: "NIC number is required.",
                },
              ]}
            >
              <Input placeholder="123456789v / 1234567890" className="h-10" />
            </Form.Item>
            <Form.Item
              name="mobile"
              layout="vertical"
              className="w-1/2"
              label={<label className="text-white">Mobile</label>}
              rules={[
                {
                  required: true,
                  message: "Mobile number is required.",
                },
              ]}
            >
              <Input placeholder="07712345678" className="h-10" />
            </Form.Item>
          </div>
          <Form.Item
            name="role"
            layout="vertical"
            label={<label className="text-white">Role</label>}
            rules={[
              {
                required: true,
                message: "Role is required.",
              },
            ]}
          >
            <Select
              className="h-10"
              options={[
                { value: "admin", label: "Admin" },
                { value: "cashier", label: "Cashier" },
                { value: "supervisor", label: "Supervisor" },
                { value: "manager", label: "Manager" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            layout="vertical"
            label={<label className="text-white">Gender</label>}
            rules={[
              {
                required: true,
                message: "Gender is required.",
              },
            ]}
          >
            <Select
              className="h-10"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
            />
          </Form.Item>
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
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className="mt-4 w-full px-24">
          <p className="mb-5">already have an account?</p>
          <Link
            to="/Login"
            className="custom-hover h-12 rounded-md border px-4 py-2 text-lg text-blue-100"
          >
            Log in
          </Link>
        </div>
        <hr className="" />
      </section>
    </main>
  );
};

export default Signup;
