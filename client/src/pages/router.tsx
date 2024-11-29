import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./Error/ErrorPage";
import Dashboard from "./dashboard/Dashboard";
import PlaceOrder from "./place-order/PlaceOrder";
import Customers from "./customers/Customers";
import Orders from "./orders/Orders";
import Items from "./items/Items";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
