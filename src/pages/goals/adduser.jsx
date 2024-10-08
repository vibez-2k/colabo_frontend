import { Trash2, X } from "lucide-react";
import React, { useState } from "react";

function Adduser() {
  const [isOwner, setIsOwner] = useState(true);
  const [isAssigned, setIsAssigned] = useState(false);
  
  return (
    <div className="w-full h-full">
      <div className="h-[80vh]">
        {/* Form Header */}
        <form>
          <div className="flex justify-between mb-3 text-black">
            <h3 className="font-semibold text-2xl">Set Time Frame</h3>
            <button className="btn btn-sm btn-circle btn-ghost">
              <X />
            </button>
          </div>
        </form>

        {/* Main Content */}
        <div className="w-full h-[96%] flex flex-col justify-between">
          <div>
            <p className="text-xl text-gray-400 mb-2">Search & add members</p>

            {/* Search Input */}
            <label className="input input-bordered flex bg-transparent items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow bg-transparent"
                placeholder="Search"
              />
            </label>

            {/* Existing Members */}
            <div className="mt-3">
              <p className="text-md text-gray-400 mb-3">EXISTING MEMBERS</p>

              <div className="max-h-[510px] overflow-auto">
                <div className="flex items-center justify-between p-4 mb-2 bg-white">
                  {/* User Details */}
                  <div className="flex items-center space-x-4">
                    {/* Profile Picture */}
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="User Profile"
                    />
                    {/* Name and Progress */}
                    <div>
                      <p className="font-semibold text-gray-800">Bala Vignesh</p>
                      <div className="flex items-center space-x-2">
                        {/* Progress Bar */}
                        <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500">0%</p>
                      </div>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="flex items-center space-x-4">
                    {/* Owner Checkbox */}
                    <div className="flex items-center">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={isOwner}
                          onChange={() => setIsOwner(!isOwner)}
                          className="checkbox mr-1"
                        />
                        <span className="label-text text-black">Owner</span>
                      </label>
                    </div>

                    {/* Assign Checkbox */}
                    <div className="flex items-center">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={isAssigned}
                          onChange={() => setIsAssigned(!isAssigned)}
                          className="checkbox mr-1"
                        />
                        <span className="label-text text-black">Assignee</span>
                      </label>
                    </div>

                    {/* Delete Icon */}
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider m-0"></div>
          </div>

          {/* Save Button */}
          <div className="w-full h-16 flex justify-end items-end">
            <button className="btn text-xl text-white bg-[#c6c6c6] w-full hover:bg-green-500 border-none">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adduser;
