import {
  CalendarSearch,
  FilePenLine,
  Hash,
  Plus,
  Search,
  UserPlus,
  X,
} from "lucide-react";
import React from "react";
import { Navigate } from "react-router-dom";
import Calendar from "../../components/calender";
import Adduser from "./adduser";

function Details() {
  const handleContinue = () => {
    Navigate("/da"); // Navigate to /car on continue button click
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className=" bg-white flex-1 px-10 py-10 ">
        <div className="bg-[#eaecee] p-5 rounded-xl  ">
          <textarea
            name="description"
            className="w-full min-h-56 rounded-xl max-h-96 bg-white outline-none p-3 text-lg "
            id=""
          ></textarea>

          <div className="flex items-center gap-1 h-10 mt-4 border-2 border-gray-300 bg-white   w-48 rounded-3xl  ">
            <Hash className="text-2xl ml-2 " />
            <input
              type="text"
              className="h-full w-full text-xl bg-white rounded-r-3xl outline-none"
            />
          </div>
        </div>
        <div className="flex items-center  gap-3 mt-8   w-full rounded-3xl  ">
          <div className="w-12 h-12 bg-[#eaecee] rounded-full flex justify-center items-center">
            <FilePenLine className="size-6 " />
          </div>
          <input type="text" placeholder="Add Description" className="grow-1 input w-full bg-transparent text-lg" />
        </div>
        <div className="flex items-center  gap-3 mt-8   w-full rounded-3xl  ">
          <div className="w-12 h-12 bg-[#eaecee] rounded-full flex justify-center items-center">
            <CalendarSearch className="size-6 " />
          </div>
          <p
            className="text-xl hover:cursor-pointer "
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <span>--:--:--</span> - <span>--:--:--</span>
          </p>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box border p-0 bg-white w-[450px]  rounded-lg">
              <Calendar />
            </div>
          </dialog>
        </div>

        <div className="flex items-center  gap-3 mt-8    w-full rounded-3xl  ">
          <div className="w-12 h-12 bg-[#eaecee] rounded-full flex justify-center items-center">
            <UserPlus className="size-6 " />
          </div>
          <div className="flex-1 gap-1 items-center flex h-12">
            <div
              className="w-9 h-9  rounded-full flex justify-center items-center"
              style={{
                backgroundImage: "url(/images/man.png)",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="w-9 h-9 border-2 rounded-full flex justify-center items-center hover:cursor-pointer"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <Plus />

              <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-3xl bg-white rounded-lg">
                  <Adduser />
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>


      
      <div className="h-16 gap-2 bg-transparent flex px-3 py-1">
        <button className="w-full rounded-xl text-xl text-black font-medium border bg-white border-gray-300">
          Go Back
        </button>

        <button
          onClick={handleContinue}
          className="w-full rounded-xl text-xl text-white font-medium border bg-[#00B7A8]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Details;
