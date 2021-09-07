import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Typography from '@material-ui/core/Typography';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
import Step4 from '../Step4';
import MobileEmailVerification from '../MobileEmailVerification';
import PersonalDetails from '../PersonalDetails';
import KycDetail from '../KycDetail';
import BankVerification from '../BankVerification';
import { Box, Button, Grid, StepButton } from '@material-ui/core';
import './VerticalStepperFrom.css';

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
   }
}));

function getSteps() {
   return [<MobileEmailVerification />, <PersonalDetails />, <KycDetail />, <BankVerification />];
}


function getStepContent(step) {
   switch (step) {
      case 0:
         return <Step1 />;
      case 1:
         return <Step2 />;
      case 2:
         return <Step3 />;
      case 3:
         return <Step4 />;
      default:
         return 'Unknown step';
   }
}



const VerticalStepperForm = () => {

   const classes = useStyles()
   const [activeStep, setActiveStep] = React.useState(0)
   const [completed, setCompleted] = React.useState({})
   const steps = getSteps()

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

   const handleNext = () => {
      const newActiveStep =
         isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
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
                  <Stepper style={{ backgroundColor: '#eaeaea' }} orientation="vertical" nonLinear activeStep={activeStep}>
                     {steps.map((label, index) => (
                        <Step key={label}>
                           <StepButton
                              onClick={handleStep(index)}
                              completed={completed[index]}
                              icon=""
                           // style={{ backgroundColor: '#eae' }}
                           >
                              {label}
                           </StepButton>
                           {/* <Button onClick={handleStep(index)}
                              completed={completed[index]}>
                              {label}
                           </Button> */}
                        </Step>
                     ))}
                  </Stepper>
               </Grid>
               <Grid xs={6} className="rightContents">
                  <Box className={classes.steps}>
                     {getStepContent(activeStep)}
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
};

export default VerticalStepperForm;