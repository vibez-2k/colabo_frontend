import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
export const Layout = () => {
  return (
    <div className="app-container w-screen h-screen  flex">
      <Sidebar />
      <div class="flex flex-col md:flex-row  w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};
