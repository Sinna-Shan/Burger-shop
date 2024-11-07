import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./Error/ErrorPage";
import Dashboard from "./dashboard/Dashboard";
import PlaceOrder from "./place-order/PlaceOrder";
import Customers from "./customers/Customers";
import Orders from "./orders/Orders";
import Items from "./items/Items";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "place-order",
        element: <PlaceOrder />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
