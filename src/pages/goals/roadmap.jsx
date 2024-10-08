import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Roadmap() {
  const [selected, setSelected] = useState(null); // State to track the selected option
  const navigate = useNavigate(); // Use the navigate hook
  const arr = [
    "Software Development",
    "Marketing",
    "Support",
    "Sales",
    "Others",
  ]; // Sample data

  const handleSelect = (index) => {
    setSelected(index); // Update the selected index
  };

  const handleContinue = () => {
    navigate("/details"); // Navigate to /car on continue button click
  };

  return (
    <div className="w-full h-full bg-gray-400 flex flex-col">
      {/* Header */}
      <div className="bg-white text-2xl p-5 text-black">
        <p>What roadmap do you wish to create?</p>
      </div>

      {/* Grid Container */}
      <div className="h-[100%] px-3 ">
        <p className="text-2xl text-gray-500 py-3 mt-3 mb-2">Default</p>
        <div className="grid grid-cols-3 gap-4 px-4">
          {arr.map((element, index) => (
            <div
              key={element}
              className={`bg-white text-center rounded-2xl shadow-md h-56 flex p-5 flex-col hover:cursor-pointer py-8  items-center border-2 ${
                selected === index ? "border-green-500" : "border-transparent"
              }`} // Change border color based on selection
              onClick={() => handleSelect(index)} // Handle click to select the div
            >
              <div className="flex justify-start items-center w-full  mb-8">
                <input
                  type="radio"
                  checked={selected === index} // Check if the radio button is selected
                  onChange={() => handleSelect(index)} // Handle radio button change
                  className="appearance-none h-6 w-6 border border-gray-300 rounded-full checked:bg-white checked:border-green-500 checked:ring-0 focus:outline-none" // Custom radio button styles
                />
                <span
                  className={`absolute w-4 h-4 ml-[4px] bg-green-500 rounded-full transition-all duration-200 ${
                    selected === index ? "block" : "hidden"
                  }`}
                />{" "}
                {/* Dot inside the radio button */}
              </div>
              <p className="text-2xl  w-full text-black text-start">
                {element}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="h-20 gap-2 bg-slate-200 flex px-3 py-1">
        <button className="w-full rounded-xl text-xl text-black font-medium border bg-white border-gray-300">
          Go Back
        </button>
        
        <button onClick={handleContinue} className="w-full rounded-xl text-xl text-white font-medium border bg-green-500">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Roadmap;

