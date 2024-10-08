import React, { useState } from "react";
import "./drawer.css";

import Phasegenerator from "./Phasegenerator/Phasegenerator";
import Projectconfig from "./ProjectConfiguration/Projectconfig";
import useStore from "../zustand/store";
export default function CustomDrawer() {
  const { activeStep } = useStore();
  const Scenemanagemenent = [
    {
      id: 0,
      element: <Projectconfig />,
    },
    {
      id: 1,
      element: <Phasegenerator />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  // Function to close the drawer
  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
    setIsOpen(false); // Update state to hide the close button
  };

  // Function to open the drawer
  const openDrawer = () => {
    setIsOpen(true); // Update state to show the close button
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        onChange={(e) => setIsOpen(e.target.checked)} // Track the state of the drawer
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button"
          onClick={openDrawer}
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-white">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Conditionally render the close button based on the drawer state */}
        {isOpen && (
          <button
            className="btn btn-square overlaybutton "
            onClick={closeDrawer}
          >
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
        )}

        <div className="menu text-base-content p-0 flex-row min-h-full w-[47vw] bg-white">
          {/* Sidebar content here */}
          <div className="border-r-2 border-[#EDF0F3] flex-r justify-center align-middle p-[5px] pt-[0px] w-[9%] z-10">
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

          <div className="w-[91%] flex-col Phases_items_container">
            {Scenemanagemenent.map((val) => {
              if (val.id == activeStep) {
                console.log(val.id);
                return val.element;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
