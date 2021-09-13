import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, StepButton } from '@material-ui/core';
import './VerticalStepperFrom.css';
import Steps from '../Steps';
import StepContents from '../StepContents';

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
   },
   button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
   },
   actionsContainer: {
      marginBottom: theme.spacing(2),
   },
   resetContainer: {
      padding: theme.spacing(3),
   },
   steps: {
      marginTop: "30%"
   },
   completedBtn: {
      marginLeft: 20
   }
}));

// function getSteps() {
//    return [<MobileEmailVerification />, <PersonalDetails />, <KycDetail />, <BankVerification />];
// }

function getSteps(stepData) {
   return stepData.map((step, index) => <Steps index={index} title={step.title} message={step.message} />)
}

function getStepContent(activeStep, handleComplete, completedSteps, totalSteps, stepData) {
   switch (activeStep) {
      case activeStep < stepData.length && activeStep:
         return <StepContents index={activeStep} data={stepData[activeStep]} handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} />;
      // case 1:
      //    return <Step2 handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} />;
      // case 2:
      //    return <Step3 handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} />;
      // case 3:
      //    return <Step4 handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} />;
      // case 4:
      //    return <Step4 handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} />;
      default:
         return <><Typography variant="h3" align="center">Form is completed</Typography><Typography color="primary" align="center">Congratulations!Now get access to quick cash loan</Typography></>;
   }
}

const stepData = [
   { title: "Mobile and Email Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
   { title: "Personal Detail", message: "Get your mobile and email verified to get access to quick cash loan" },
   { title: "KYC Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
   { title: "Bank Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
   { title: "Country Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
   { title: "Friend Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
   { title: "enemy Verification", message: "Get your mobile and email verified to get access to quick cash loan" },
];

const VerticalStepperForm = () => {
   const classes = useStyles()
   const [activeStep, setActiveStep] = React.useState(0)
   const [completed, setCompleted] = React.useState({})
   const steps = getSteps(stepData);
   const totalSteps = () => {
      return steps.length
   }

   const completedSteps = () => {
      return Object.keys(completed).length
   }

   const isLastStep = () => {
      return activeStep === totalSteps() - 1
   }

   const allStepsCompleted = () => {
      return completedSteps() === totalSteps()
   }
   const handleComplete = () => {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
   };
   const handleNext = () => {
      const newActiveStep =
         isLastStep() && !allStepsCompleted()
            ?
            steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1
      setActiveStep(newActiveStep)
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
   }

   const handleStep = (step) => () => {
      setActiveStep(step)
   }

   const handleReset = () => {
      setActiveStep(0)
      setCompleted({})
   }

   return (
      <Box>
         <Box>
            <Grid container>
               <Grid xs={6} className="sidebar">
                  <Box style={{ margin: "100px 0 0 20px", }}>
                     <Typography variant="h3">LOAN APPLICATION</Typography>
                     <Typography variant="h6">Fill out the details to get access to quick cash loan</Typography>
                  </Box>
                  <Stepper style={{ backgroundColor: '#eaeaea' }} orientation="vertical" activeStep={activeStep}>
                     {steps.map((label, index) => (
                        <Step key={label}>
                           <StepButton
                              onClick={handleStep(index)}
                              completed={completed[index]}
                              icon=""
                           >
                              {label}
                           </StepButton>
                        </Step>
                     ))}
                  </Stepper>
                  {/* {activeStep !== steps.length &&
                     (completed[activeStep] ? (
                        <>
                           <Box>
                              <Typography variant="caption" className={classes.completed}>
                                 Form already completed
                              </Typography>
                              <br />
                              <Button onClick={handleReset} variant="outlined" color="primary">
                                 Reset
                              </Button>
                           </Box>
                        </>
                     ) : null)} */}
               </Grid>
               <Grid xs={6} className="rightContents">
                  <Box className={classes.steps}>
                     {getStepContent(activeStep, handleComplete, completedSteps, totalSteps, stepData)}
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
};

export default VerticalStepperForm;