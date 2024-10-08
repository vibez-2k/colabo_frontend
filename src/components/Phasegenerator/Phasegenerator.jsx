import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import "./Phasegenerator.css";
const Phasegenerator = ({ setcurrentscene, currentscene }) => {
  return (
    <>
      {" "}
      <div className="phaseitembody phasegenerator">
        <h1
          className="text-black font-bold text-xl
"
        >
          You can now break your project into phases
        </h1>
        <div className="btn-block workflow">
          <h2 className="text-black font-medium text-base">
            Use the same workflow for project and phases
          </h2>

          {/* <input
            type="checkbox"
            className="toggle border-#C6C6C6 bg-white [--tglbg:#C6C6C6] hover:bg-white"
          /> */}
          <input
            type="checkbox"
            className="toggle bg-white border-[#C6C6C6] peer [--tglbg:#C6C6C6] checked:bg-white checked:[--tglbg:#00B7A8]"
          />
        </div>
        {/* <input
    type="text"
    placeholder="Type your phases here..."
    className="input input-bordered w-full phaseinput bg-white"
  /> */}
        <div className="relative w-full phaseinput ">
          <input
            type="text"
            placeholder="Type your phases here..."
            className="input  w-full  bg-white pr-16 outline-0 border-0" // add padding for text
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
            ADD
          </span>
        </div>
        <div className="btn-block invitemembers">
          <div className="">
            <div className="flex align-middle justify-between invitemembers_body">
              <h2 className="text-black m-0">P1</h2>
              <RiDeleteBin6Line className="cursor-pointer" size={20} />
            </div>
            <div className="mycustombtngrp">
              <button className="btn bg-white text-[#00B7A8] mycustombtn">
                <FaCircleCheck />
                Invite Members<span className="text-red-500">*</span>
              </button>
              <button className="btn bg-white text-[#00B7A8] mycustombtn">
                <div className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#00B7A8] mycustomstatus">
                  <span className=" text-[#00B7A8]">2</span>
                </div>
                Setup Workflow<span className="text-red-500">*</span>
              </button>
              <button className="btn bg-white text-[#00B7A8] mycustombtn">
                <FaCircleCheck />
                Set Time Frame<span className="text-red-500">*</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_container">
        <div className="bottom-btngrp">
          <button
            className="btn bg-white text-black flex-1 hover:bg-white border-[#EDF0F3] border-2 hover:border-[#EDF0F3]"
            onClick={() => setcurrentscene(currentscene - 1)}
          >
            Go Back
          </button>
          <button className="btn text-white bg-[#00B7A8] flex-1 hover:bg-[#00B7A8] border-0 hover:border-0">
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default Phasegenerator;
