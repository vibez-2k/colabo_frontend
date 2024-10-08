import React, { useState } from "react";
import { Stepper, Step, StepLabel, Paper, StepConnector } from "@mui/material";
import { makeStyles, styled } from "@mui/material/styles";
import { Check, CheckCircle } from "lucide-react"; // Import the CheckCircle icon from lucide
import { Outlet } from "react-router-dom";



const CustomStepIcon = styled("div")(({ theme, active, completed }) => ({
  width: "3rem",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: completed ? "#00B7A8" : active ? "#00B7A8" : "#eaeaf0", // Change color based on state
  color: completed ? "#fff" : active ? "#fff" : "#000",
  fontSize: "1.5rem",
}));

const steps = [{ label: "" }, { label: "" }, { label: "" }, { label: "" }];

function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="ml-2">
      <div>
      <Stepper
  activeStep={activeStep}

  orientation="vertical"
 
  sx={{
    "& .MuiStepLabel-root .Mui-active": {
      color: "#4CAF50", // Custom color for active step label
    },
    "& .MuiStepLabel-root .Mui-completed": {
      color: "#4CAF50", // Custom color for completed step label
    },
    "& .MuiStepLabel-label": {
      fontSize: "1.5rem", // Adjust the label text size
      color: "#757575", // Inactive step label color
    },
    "& .MuiStepConnector-line": {
      borderColor: "rgba(0, 183, 168, 0.5)", // Custom color for the connector line
      borderStyle: "dotted", // Solid line for active, dotted for others
      borderWidth: "0px 0px 0px 3px", // Right side border
      height: "3rem",
      marginLeft: "0.6rem",
    },
    "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
      borderColor: "#00B7A8" , // Custom color for the connector line
    borderStyle: "solid", // Solid line for active, dotted for others
    borderWidth: "0px 0px 0px 2px", // Right side border
    height: "3rem",
    marginLeft: "0.6rem",
    },

  }}
>
  {steps.map((step, index) => (
    <Step key={index}>
      <StepLabel
        StepIconComponent={() => (
          <CustomStepIcon
            active={activeStep === index}
            completed={activeStep > index}
          >
            {activeStep > index ? <Check /> : index + 1}
          </CustomStepIcon>
        )}
      >
        {step.label}
      </StepLabel>
    </Step>
  ))}
</Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            All steps completed - you're finished
          </Paper>
        )}
      </div>
    </div>
  );
}

function Goal_creation() {
  return (
    <div className="w-full h-full bg-white flex">
      {/* Left lime panel with bigger stepper */}
      <div className="w-[8%] min-w-20 h-full flex justify-center pt-5 border-r border-gray-300">
        <VerticalStepper />
      </div>

      {/* Right side content */}
      <div className="bg-white flex-1 h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Goal_creation;
