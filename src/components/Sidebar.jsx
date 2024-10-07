import React from "react";
import {
  BellDot,
  FileText,
  Flame,
  Hourglass,
  MessagesSquare,
  Microwave,
  Package,
  PartyPopper,
  Settings,
  ShoppingBag,
  ShoppingCart,
  SquareUser,
  Store,
  Target,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-24 h-full transition-all bg-[#0a073a] p-2">
      <div className="h-full flex flex-col justify-between ">
        <div className="flex justify-center p-3">
          <img src="images/bolt.png " alt="" className="filter invert w-16" />
        </div>

        <div className="divider p-0 m-0"></div>

        <div className="flex flex-col items-center  h-[100%]  gap-8 mt-5">
          <div className="flex flex-col items-center">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex flex-col p-3  ${
                  isActive
                    ? "bg-[#00B7A8] text-white"
                    : " text-white bg-[#FFFFFF29]"
                } rounded-2xl items-center  w-14 h-14 mb-2 gap-1 transition duration-300 ease-in-out`
              }
            >
              <Flame className="size-8" />
            </NavLink>
            <p className="text-xs">Dashboard</p>
          </div>
          <div className="flex flex-col items-center">
            <NavLink
              to={"/goals"}
              className={({ isActive }) =>
                `flex flex-col p-3  ${
                  isActive
                    ? "bg-[#00B7A8] text-white"
                    : " text-white bg-[#FFFFFF29]"
                } rounded-2xl items-center  w-14 h-14 mb-2 gap-1 transition duration-300 ease-in-out`
              }
            >
              <Target className="size-8" />
            </NavLink>
            <p className="text-xs">Goals</p>
          </div>
          <div className="flex flex-col items-center">
            <NavLink
              to={"/docs"}
              className={({ isActive }) =>
                `flex flex-col p-3  ${
                  isActive
                    ? "bg-[#00B7A8] text-white"
                    : " text-white bg-[#FFFFFF29]"
                } rounded-2xl items-center  w-14 h-14 mb-2 gap-1 transition duration-300 ease-in-out`
              }
            >
              <FileText className="size-8" />
            </NavLink>
            <p className="text-xs">Docs</p>
          </div>
          <div className="flex flex-col items-center">
            <NavLink
              to={"/canvas"}
              className={({ isActive }) =>
                `flex flex-col p-3  ${
                  isActive
                    ? "bg-[#00B7A8] text-white"
                    : " text-white bg-[#FFFFFF29]"
                } rounded-2xl items-center  w-14 h-14 mb-2 gap-1 transition duration-300 ease-in-out`
              }
            >
              <Hourglass className="size-8" />
            </NavLink>
            <p className="text-xs">Canvas</p>
          </div>
          <div className="flex flex-col items-center">
            <NavLink
              to={"/culture"}
              className={({ isActive }) =>
                `flex flex-col p-3  ${
                  isActive
                    ? "bg-[#00B7A8] text-white"
                    : " text-white bg-[#FFFFFF29]"
                } rounded-2xl items-center  w-14 h-14 mb-2 gap-1 transition duration-300 ease-in-out`
              }
            >
              <PartyPopper className="size-8" />
            </NavLink>
            <p className="text-xs">Culture</p>
          </div>
          <div className="flex flex-col items-center">
            <NavLink
              to={"/chats"}
              className={({ isActive }) =>
                `flex flex-col p-3  ${
                  isActive
                    ? "bg-[#00B7A8] text-white"
                    : " text-white bg-[#FFFFFF29]"
                } rounded-2xl items-center  w-14 h-14 mb-2 gap-1 transition duration-300 ease-in-out`
              }
            >
              <MessagesSquare className="size-8" />
            </NavLink>
            <p className="text-xs">Chats</p>
          </div>
        </div>

        <div className="divider"></div>
        <div className="flex  justify-end mt-2 items-end  ">
          <div className="  pb-3 w-24 h-16 flex  justify-center items-center rounded-lg ">
          <div className="flex flex-col items-center">
              <NavLink
                to={"/settings  "}
                className={({ isActive }) =>
                  `flex flex-col p-3  ${
                    isActive
                      ? "bg-[#00B7A8] text-white"
                      : " text-white bg-[#FFFFFF29]"
                  } rounded-2xl items-center  w-14 h-14 mb-2 gap-1 transition duration-300 ease-in-out`
                }
              >
                <Settings className="size-8" />
              </NavLink>
              <p className="text-xs p-0 m-0">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
