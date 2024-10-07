import { createBrowserRouter } from "react-router-dom";
import CustomDrawer from "../components/Drawer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomDrawer />,
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
