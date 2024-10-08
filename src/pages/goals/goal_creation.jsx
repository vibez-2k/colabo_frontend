import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  StepConnector
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

// Custom connector to adjust the alignment and thickness of the line
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: '#eaeaf0',
    borderLeftWidth: '3px', // Adjust the thickness of the connector line
    height: '3rem', // Adjust the height of the connector line
    marginLeft: '0.6rem', // Adjust to align horizontally with the larger step icons
  },
}));

const steps = [
  { label: '' },
  { label: '' },
  { label: '' },
  { label: '' },
];

function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="ml-2">
      <div>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={<CustomStepConnector />} // Use the custom connector
          sx={{
            '& .MuiStepIcon-root': {
              fontSize: '3rem', // Increase the size of the step icon
            },
            '& .MuiStepLabel-label': {
              fontSize: '1.5rem', // Adjust the label text size (if needed)
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
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

    <Outlet/>

      </div>
    </div>
  );
}

export default Goal_creation;
