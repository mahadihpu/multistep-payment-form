import { Typography } from '@material-ui/core';
import React from 'react';
import OtpInput from 'react-otp-input';

const InputField = ({ numInputs, message }) => {
   return (
      <>
         <OtpInput
            numInputs={numInputs}
            inputStyle={{
               width: "2rem",
               height: "2rem",
               margin: "10px 2px",
               fontSize: "2rem",
               borderRadius: 4,
               border: "1px solid rgba(0,0,0,0.3)"
            }}
         />
         <Typography>{message}</Typography>
      </>
   );
};

export default InputField;