import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, TextField } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import InputField from './InputField';

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      margin: 20
   },
   button: {
      marginTop: "9px",
      marginLeft: "10px",
   },
   actionsContainer: {
      marginBottom: theme.spacing(2),
      display: "flex",
   },
   resetContainer: {
      padding: theme.spacing(3),
   },
   arrowRight: {
      color: '#fff'
   }
}));

function getSteps() {
   return ['Your mobile number', 'Enter your mobile OTP', 'Enter your email ID'];
}

function getStepContent(step, activeStep, steps, handleNext, setActiveStep) {
   switch (step) {
      case 0:
         return <InputField activeStep={activeStep} steps={steps} handleNext={handleNext} setActiveStep={setActiveStep} numInputs={10} message="Enter your phone number to proceed" />;
      case 1:
         return <InputField activeStep={activeStep} steps={steps} handleNext={handleNext} setActiveStep={setActiveStep} numInputs={4} message="Check your phone for OTP code" />;
      case 2:
         return <InputField type="email" activeStep={activeStep} steps={steps} handleNext={handleNext} setActiveStep={setActiveStep} />
      default:
         return 'Unknown step';
   }
}

export default function Step1() {
   const classes = useStyles();
   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <Box className={classes.root}>
         <Typography variant="h5">Step 1: Mobile and Email Verification</Typography>
         <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                     <Box className={classes.actionsContainer}>
                        <Box>{getStepContent(index, activeStep, steps, handleNext, setActiveStep)}</Box>
                     </Box>
                  </StepContent>
               </Step>
            ))}
         </Stepper>
      </Box>
   );
}
