import { Box, Button, Card, Typography } from '@material-ui/core';
import React from 'react';

const Step3 = ({ handleComplete, completedSteps, totalSteps }) => {
   return (
      <Box style={{ marginTop: "10%" }}>
         <Typography variant="h5">Step 3: KYC Details</Typography>
         <Button variant="contained" color="primary" onClick={handleComplete}>
            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
         </Button>
      </Box>
   );
};

export default Step3;