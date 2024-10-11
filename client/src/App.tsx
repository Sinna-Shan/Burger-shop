import { Layout, Menu, MenuProps } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", 1, <DashboardOutlined />),
  getItem("Place Order", 2, <ShoppingCartOutlined />),
  getItem("Customers", 3, <UserOutlined />),
  getItem("Items", 4, <ShoppingOutlined />),
  getItem("Orders", 5, <FileTextOutlined />),
];
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className=" bg-stone-400">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="fixed h-screen max-w-72"
      >
        <div className="text-white text-3xl text-center flex gap-2 justify-center py-8">
          <span>
            <ShopOutlined />
          </span>
          <span className={`${collapsed ? "hidden" : ""} duration-300 ease-linear`}>SHOP</span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} items={items} />
      </Sider>
      <Layout>
        <Content className="min-h-screen"></Content>
        <Footer className="flex items-center justify-center w-full bg-slate-300">
          &copy; {new Date().getFullYear() > 2024 && "2024 -"}{" "}
          {new Date().getFullYear()} developed by Noah Shan
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
