import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/sales",
    element: <div>Sales</div>,
  },
  {
    path: "/orders",
    element: <div>Orders</div>,
  },
  {
    path: "/customers",
    element: <div>Customers</div>,
  },
  {
    path: "/items",
    element: <div>Items</div>,
  },
  {
    path: "/inventory",
    element: <div>Inventory</div>,
  },
  {
    path: "/alerts",
    element: <div>Alerts</div>,
  },
]);

  