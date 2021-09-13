import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Steps = ({ index, title, message }) => {
   return (
      <Box textAlign="left">
         <Typography variant="h6" style={{ fontWeight: 600 }}>Step {index + 1}: {title}</Typography>
         <br />
         <Typography>{message}</Typography>
      </Box>
   );
};

export default Steps;