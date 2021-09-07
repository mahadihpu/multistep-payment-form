import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, TextField } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import Phone from './InputField';
import './style.css';
import OtpInput from 'react-otp-input';
import InputField from './InputField';

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
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

function getStepContent(step) {
   switch (step) {
      case 0:
         return <InputField numInputs={10} message="Enter your phone number to proceed" />;
      case 1:
         return <InputField numInputs={4} message="Check your phone for OTP code" />;
      case 2:
         return <TextField
            id="standard-basic"
            label="Email"
         />
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
                        <Box>{getStepContent(index)}</Box>
                        <Box><Button
                           variant="contained"
                           color="primary"
                           onClick={handleNext}
                           className={classes.button}
                        >
                           {activeStep === steps.length - 1 ? 'Finish' : <ArrowRight className={classes.arrowRight} />}
                        </Button></Box>
                     </Box>
                  </StepContent>
               </Step>
            ))}
         </Stepper>
         {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
               <Typography>All steps completed - you&apos;re finished</Typography>
               <Button onClick={handleReset} className={classes.button}>
                  Reset
               </Button>
            </Paper>
         )}
      </Box>
   );
}
