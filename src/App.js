import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core'
import { createContext, useState } from 'react';
import './App.css'
import VerticalStepperForm from './components/VerticalStepperForm/VerticalStepperForm';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#42ab35',
    },
  },
});

export const FormContext = createContext();

function App() {
  const [data, setData] = useState([]);
  return (
    <FormContext.Provider value={[data, setData]}>
      <ThemeProvider theme={theme}>
        <VerticalStepperForm />
      </ThemeProvider>
    </FormContext.Provider>
  )
}

export default App
