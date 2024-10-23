/* eslint-disable no-unused-vars */
import { Button } from "antd";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

interface MainLayoutProps<T> {
  data: T[];
  setData?: (data: T[]) => void;
  initialData: T[];
  setOpen?: (data: boolean) => void;
  children: React.ReactNode;
}

const MainLayout = <T extends object>({
  data,
  setData,
  initialData,
  setOpen,
  children,
}: MainLayoutProps<T>) => {
  const [search, setSearch] = useState("");

  function handleSearch(value: string) {
    setSearch(value);
    if (!value) {
      setData?.(initialData);
    } else {
      setData?.(
        data.filter((item: T) =>
          Object.keys(item).some((key) =>
            String(item[key as keyof T]).includes(value)
          )
        )
      );
    }
  }

  return (
    <div className="flex flex-col px-4 bg-slate-200">
      <header className="flex items-center justify-between h-24">
        <Search
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="search customer"
          className="w-64"
          enterButton
          allowClear
        />
        <Button type="primary" onClick={() => setOpen?.(true)}>
          <FaCirclePlus />
          Add
        </Button>
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
