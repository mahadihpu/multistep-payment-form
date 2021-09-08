import { Box, Button, Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import OtpInput from 'react-otp-input';
import { FormContext } from '../../App';

const InputField = (props) => {
   const { numInputs, message, activeStep, steps, handleNext, setActiveStep, type } = props;
   const [data, setData] = useContext(FormContext);
   const [value, setValue] = useState('');
   const [final, setFinal] = useState('');
   const [empty, setEmpty] = useState(false);
   const handleSetValue = (digit) => setValue(digit);
   const handleChange = () => {
      value.length === numInputs ? handleNext() : setEmpty(true);
      if (value.length === 10) {
         const phone = {
            type: 'phone',
            number: value
         }
         data.push(phone)
      }
      else if (value.length === 4) {
         const otp = {
            type: 'otp',
            number: value
         }
         data.push(otp)
      }
   }
   return (
      <>
         {
            type ? <input type="email" className="email-input" />
               : <><OtpInput
                  numInputs={numInputs}
                  value={value}
                  onChange={handleSetValue}
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
                  {empty === true ? <Typography color="secondary">Please fill all the inputs</Typography> : null}
                  <Box><Button
                     variant="contained"
                     color="primary"
                     onClick={handleChange}
                  >
                     {activeStep === steps.length - 1 ? 'Finish' : <ArrowRight />}
                  </Button></Box></>
         }
      </>
   );
};

export default InputField;