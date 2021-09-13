import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const Step4 = ({ handleComplete, completedSteps, totalSteps }) => {
   return (
      <Box style={{ marginTop: "10%" }}>
         <Typography variant="h5">Step 4: Bank Verification</Typography>
         <Button variant="contained" color="primary" onClick={handleComplete}>
            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
         </Button>
      </Box>
   );
};

export default Step4;