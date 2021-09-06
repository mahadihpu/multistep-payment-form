import { createTheme, Grid, ThemeProvider, Typography } from '@material-ui/core'
import './App.css'
import VerticalStepperForm from './components/VerticalStepperForm/VerticalStepperForm';



const theme = createTheme({
  stepper: {
    iconColor: 'green' // or logic to change color
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid md={1}></Grid>
        <Grid md={10} xs={12}>
          <VerticalStepperForm />
        </Grid>
        <Grid md={1}></Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
