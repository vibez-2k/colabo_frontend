import React from "react";
import "./drawer.css";

import Phasegenerator from "./Phasegenerator/Phasegenerator";
import Projectconfig from "./ProjectConfiguration/Projectconfig";

export default function CustomDrawer() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-white">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          <button className="btn btn-square  overlaybutton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
        <div className="menu text-base-content p-0 flex-row min-h-full w-[47vw] bg-white">
          {/* Sidebar content here */}
          <div className="border-r-2 border-[#EDF0F3] flex-r justify-center align-middle p-[5px] w-[8%] z-10">
            <ul className="steps steps-vertical flex-col align-middle justify-center pl-[2px]">
              <li
                data-content="✓"
                className="step before:bg-[#00B7A8] after:bg-[#00B7A8] "
              >
                {" "}
              </li>
              <li
                data-content="✓"
                className="step before:bg-[#00B7A8] after:bg-[#00B7A8]"
              >
                {" "}
              </li>
              <li
                data-content="✓"
                className="step before:bg-[#00B7A8] after:bg-[#00B7A8] text-white"
              >
                {" "}
              </li>
              <li className="step before:bg-[#00B7A8] after:bg-[#00B7A8]"> </li>
            </ul>
          </div>

          <div className="w-[92%] flex-col Phases_items_container">
            {/* <Phasegenerator /> */}
            <Projectconfig />
          </div>
        </div>
      </div>
    </div>
  );
}
