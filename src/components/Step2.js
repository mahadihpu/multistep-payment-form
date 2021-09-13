import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const Step2 = ({ handleComplete, completedSteps, totalSteps }) => {
   return (
      <Box style={{ marginTop: "10%" }}>
         <Typography variant="h5">Step 2: Personal Details</Typography>
         <Button variant="contained" color="primary" onClick={handleComplete}>
            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
         </Button>
      </Box>
   );
};

export default Step2;