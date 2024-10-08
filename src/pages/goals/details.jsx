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

function Details() {
  const handleContinue = () => {
    Navigate("/da"); // Navigate to /car on continue button click
  };
  return (
    <div className="w-full h-full bg-cyan-400 flex flex-col">
      <div className=" bg-pink-400 flex-1 px-10 py-10 ">
        <div className="bg-gray-500 p-5 rounded-xl  ">
          <textarea
            name="description"
            className="w-full min-h-56 rounded-xl max-h-96 "
            id=""
          ></textarea>

          <div className="flex items-center gap-1 h-10 mt-4 border  w-56 rounded-3xl  ">
            <Hash className="text-2xl ml-2 " />
            <input
              type="text"
              className="h-full w-full text-xl bg-white rounded-r-3xl border-none focus:border-none"
            />
          </div>
        </div>
        <div className="flex items-center  gap-3 mt-8   w-full rounded-3xl  ">
          <div className="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
            <FilePenLine className="size-8 " />
          </div>
          <p className="text-xl">Add Description</p>
        </div>
        <div className="flex items-center  gap-3 mt-8   w-full rounded-3xl  ">
          <div className="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
            <CalendarSearch className="size-8 " />
          </div>
          <p
            className="text-xl hover:cursor-pointer "
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <span>--:--:--</span> - <span>--:--:--</span>
          </p>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box border p-0 w-[400px] rounded-lg">
              <form method="dialog">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">Set Time Frame</h3>
                  <button className="btn btn-sm btn-circle btn-ghost ">
                    <X />
                  </button>
                </div>
              </form>

              <Calendar />
            </div>
          </dialog>
        </div>


        <div className="flex items-center  gap-3 mt-8    w-full rounded-3xl  ">
          <div className="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
            <UserPlus className="size-8 " />
          </div>
          <div className="flex-1 gap-1 items-center flex border h-12">
            <div className="w-9 h-9 bg-gray-500 rounded-full flex justify-center items-center"></div>
            <div className="w-9 h-9 bg-gray-500 rounded-full flex justify-center items-center hover:cursor-pointer" onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }>
              <Plus />

              <dialog id="my_modal_2" className="modal">
                <div className="modal-box h-[80%]">

                    
                <form method="dialog">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">Add Members</h3>
                  <button className="btn btn-sm btn-circle btn-ghost ">
                    <X />
                  </button>
                </div>
              </form>

              <div className="flex-1 border">
                <p className="py-3 text-lg">Search & add members</p>
                <div className="w-full flex gap-1 p-1 border rounded-lg h-10 justify-center items-center">
                <Search className="size-8" />

                <input type="text" className="w-full h-full bg-transparent" />
                </div>

                <div>
                    <p className="py-3 ">EXSISTING MEMBERS</p>
                </div>
                <div className="h-[10%] ">

                </div>

<div className="divider m-0"></div>
                <div className="h-16 gap-2 flex px-3 py-1">
      
        
        <button  className="w-full rounded-xl text-xl text-white font-medium border bg-green-500">
          Save
        </button>
      </div>

              </div>
                 
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 gap-2 bg-slate-200 flex px-3 py-1">
        <button className="w-full rounded-xl text-xl text-black font-medium border bg-white border-gray-300">
          Go Back
        </button>

        <button
          onClick={handleContinue}
          className="w-full rounded-xl text-xl text-white font-medium border bg-green-500"
        >
          Continued
        </button>
      </div>
    </div>
  );
}

export default Details;
