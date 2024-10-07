import React from "react";
import "./Projectconfig.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import Radio from "@mui/material/Radio";
const Projectconfig = () => {
  const [breakproject, setbreakproject] = React.useState("a");
  const [workflow, setbreakpworkflow] = React.useState("a");

  const handleChange = (value) => {
    setbreakproject(value);
  };
  const handleworkflow = (value) => {
    setbreakpworkflow(value);
  };
  return (
    <>
      <div className="phaseitembody">
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
              onClick={() => handleChange("a")}
              style={breakproject === "a" ? { borderColor: "#00B7A8" } : {}}
            >
              <Radio
                checked={breakproject === "a"}
                onChange={(e) => handleChange(e.target.value)}
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
              onClick={() => handleChange("b")}
              style={breakproject === "b" ? { borderColor: "#00B7A8" } : {}}
            >
              <Radio
                checked={breakproject === "b"}
                onChange={(e) => handleChange(e.target.value)}
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
        <hr class="dotted-hr" />
        <div className="btn-block workflowphase">
          <h2 className="text-black font-medium text-base">
            Do you wish to setup a workflow for this project??
          </h2>

          <div className="flex gap-4 phasebuttongrp">
            <button
              className="flex-1 btn bg-white border border-[#EDF0F3] text-black px-4 py-2  space-x-2 hover:bg-white hover:border-[#00B7A8] radiobuttonsel"
              onClick={() => handleworkflow("a")}
              style={workflow === "a" ? { borderColor: "#00B7A8" } : {}}
            >
              <Radio
                checked={workflow === "a"}
                onChange={(e) => handleworkflow(e.target.value)}
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
              onClick={() => handleworkflow("b")}
              style={workflow === "b" ? { borderColor: "#00B7A8" } : {}}
            >
              <Radio
                checked={workflow === "b"}
                onChange={(e) => handleworkflow(e.target.value)}
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
        <div className="setupworkflow flex flex-col justify-center items-center">
          <button className="btn no-animation text-white bg-[#C6C6C6] hover:bg-[#C6C6C6] setupworkflowbtn">
            SETUP WORKFLOW
          </button>
        </div>
      </div>
      <div className="bottom_container">
        <div className="bottom-btngrp">
          <button className="btn bg-white text-black flex-1 hover:bg-white border-[#EDF0F3] border-2 hover:border-[#EDF0F3]">
            Go Back
          </button>
          <button className="btn text-white bg-[#00B7A8] flex-1 hover:bg-[#00B7A8] border-0 hover:border-0">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Projectconfig;
