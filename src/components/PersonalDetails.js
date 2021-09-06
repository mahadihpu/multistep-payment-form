import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

const PersonalDetails = () => {
   return (
      <Box style={{ width: "100%" }}>
         <Button><Typography variant="h6" fontWeight={700}>Step 2: Personal detials</Typography></Button>
         <Typography>Fill the necessary details to to get access to quick cash loan</Typography>
      </Box>
   );
};

export default PersonalDetails;