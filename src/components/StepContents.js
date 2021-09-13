import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import Step1 from './Step1/Step1';

const StepContents = ({ index, data, handleComplete, completedSteps, totalSteps }) => {
   return (
      <Box style={{ marginTop: "10%" }}>
         {
            data.title === 'Mobile and Email Verification' ? <Step1 handleComplete={handleComplete} completedSteps={completedSteps} totalSteps={totalSteps} /> : <Box><Typography variant="h5">Step {index + 1}: {data.title}</Typography>
               <Typography>{data.message}</Typography>
               <Button variant="contained" color="primary" onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
               </Button></Box>
         }
      </Box>
   );
};

export default StepContents;