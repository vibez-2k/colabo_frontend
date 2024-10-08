import React from "react";
import "./Projectconfig.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import Radio from "@mui/material/Radio";
import useStore from "../../zustand/store";
const Projectconfig = () => {
  const {
    setupworkflow,
    projectintophase,
    setprojectintophase,
    setworkflowbool,
    activeStep,
    incrementStep,
    decrementStep,
  } = useStore();
  const handleChange = (value) => {
    setbreakproject(value);
  };
  const handleworkflow = (value) => {
    setbreakpworkflow(value);
  };
  return (
    <>
      <div className="phaseitembody projectconfig">
        <h1
          className="text-black font-bold text-xl
"
        >
          Project Configuration
        </h1>
        <div className="btn-block breakphase">
          <h2 className="text-black font-medium text-base">
            Do you wish to break your project into phases?
          </h2>

          <div className="flex gap-4 phasebuttongrp">
            <button
              className="flex-1 btn bg-white border border-[#EDF0F3] text-black px-4 py-2  space-x-2 hover:bg-white hover:border-[#00B7A8] radiobuttonsel"
              onClick={() => setprojectintophase(true)}
              style={projectintophase ? { borderColor: "#00B7A8" } : {}}
            >
              <Radio
                checked={projectintophase}
                onChange={(e) => setprojectintophase(true)}
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                  "&.Mui-checked": {
                    color: "#00B7A8",
                  },
                }}
              />
              <label htmlFor="radioInButton" className="cursor-pointer">
                Yes, I do
              </label>
            </button>
            <button
              className="flex-1 btn bg-white border border-[#EDF0F3] text-black px-4 py-2  space-x-2 hover:bg-white hover:border-[#00B7A8] radiobuttonsel"
              onClick={() => setprojectintophase(false)}
              style={
                projectintophase != null && !projectintophase
                  ? { borderColor: "#00B7A8" }
                  : {}
              }
            >
              <Radio
                checked={projectintophase != null && !projectintophase}
                onChange={(e) => setprojectintophase(false)}
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                  "&.Mui-checked": {
                    color: "#00B7A8",
                  },
                }}
              />
              <label htmlFor="radioInButton" className="cursor-pointer">
                No, skip for now
              </label>
            </button>
          </div>
        </div>
        <hr class="dotted-hr" />
        <div className="btn-block workflowphase">
          <h2 className="text-black font-medium text-base">
            Do you wish to setup a workflow for this project?
          </h2>

          <div className="flex gap-4 phasebuttongrp">
            <button
              className="flex-1 btn bg-white border border-[#EDF0F3] text-black px-4 py-2  space-x-2 hover:bg-white hover:border-[#00B7A8] radiobuttonsel"
              onClick={() => setworkflowbool(true)}
              style={setupworkflow ? { borderColor: "#00B7A8" } : {}}
            >
              <Radio
                checked={setupworkflow}
                onChange={(e) => setworkflowbool(true)}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                  "&.Mui-checked": {
                    color: "#00B7A8",
                  },
                }}
              />
              <label htmlFor="radioInButton" className="cursor-pointer">
                Yes, I do
              </label>
            </button>
            <button
              className="flex-1 btn bg-white border border-[#EDF0F3] text-black px-4 py-2  space-x-2 hover:bg-white hover:border-[#00B7A8] radiobuttonsel"
              onClick={() => setworkflowbool(false)}
              style={
                setupworkflow !== null && !setupworkflow
                  ? { borderColor: "#00B7A8" }
                  : {}
              }
            >
              <Radio
                checked={setupworkflow !== null && !setupworkflow}
                onChange={(e) => setworkflowbool(false)}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                  "&.Mui-checked": {
                    color: "#00B7A8",
                  },
                }}
              />
              <label htmlFor="radioInButton" className="cursor-pointer">
                No, skip for now
              </label>
            </button>
          </div>
        </div>
        <div className="setupworkflow flex flex-col justify-center gap-4 items-center">
          <div
            className=" w-[100px] h-[100px] rounded-full border-2 p-5 bg-[#ebf9f7] border-[#ebf9f7] z-2"
            alt=""
          >
            <img src="/workflow.png" draggable={false} alt="" />
          </div>
          <button className="btn text-white bg-[#C6C6C6] hover:bg-[#C6C6C6] setupworkflowbtn">
            SETUP WORKFLOW
          </button>
        </div>
      </div>
      <div className="bottom_container">
        <div className="bottom-btngrp">
          <button className="btn bg-white text-black flex-1 hover:bg-white border-[#EDF0F3] border-2 hover:border-[#EDF0F3]">
            Go Back
          </button>
          <button
            className="btn text-white bg-[#00B7A8] flex-1 hover:bg-[#00B7A8] border-0 hover:border-0"
            onClick={() => incrementStep(activeStep)}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Projectconfig;
