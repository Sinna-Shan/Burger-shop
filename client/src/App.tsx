/* eslint-disable no-unused-vars */
import { Layout, Menu, MenuProps, Popconfirm } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  ShopOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "./config/axiosConfig";

type MenuItem = Required<MenuProps>["items"][number] & { link?: string };
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  link?: string,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    link,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <NavLink to="/dashboard">Dashboard</NavLink>,
    1,
    <DashboardOutlined />,
  ),
  getItem(
    <NavLink to="/place-order">Place Order</NavLink>,
    2,
    <ShoppingCartOutlined />,
  ),
  getItem(<NavLink to="/customers">Customers</NavLink>, 3, <UserOutlined />),
  getItem(<NavLink to="/items">Items</NavLink>, 4, <ShoppingOutlined />),
  getItem(<NavLink to="/orders">Orders</NavLink>, 5, <FileTextOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  async function handleLogOut() {
    try {
      await axiosInstance.get("/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate("/login");
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
  return (
    <Layout className="flex">
      <Sider
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="fixed h-screen max-w-72"
      >
        <div className="flex justify-center gap-2 py-8 text-center text-3xl text-white">
          <span>
            <ShopOutlined />
          </span>
          <span
            className={`${collapsed ? "hidden" : ""} duration-300 ease-linear`}
          >
            SHOP
          </span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} items={items} />
        <div className="absolute bottom-0 flex min-h-16 w-full items-center justify-center">
          <Popconfirm
            title="Log out"
            description="Are you sure want to logout?"
            onConfirm={handleLogOut}
            okText="Yes"
            cancelText="Cancel"
            icon={
              <LogoutOutlined className=" text-red-700" />
            }
          >
            <LogoutOutlined className="rounded-md bg-red-700 px-4 py-2 text-3xl text-red-200" />
          </Popconfirm>
        </div>
      </Sider>
      <Layout className="ml-[200px] min-h-screen">
        <Content>
          <Outlet />
        </Content>
        <Footer className="flex w-full items-center justify-center bg-slate-300">
          &copy; {new Date().getFullYear() > 2024 && "2024 -"}{" "}
          {new Date().getFullYear()} developed by Noah Shan
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
