import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core'
import './App.css'
import VerticalStepperForm from './components/VerticalStepperForm/VerticalStepperForm';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#42ab35',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ height: '1000px' }}>
        <Grid md={1} style={{ backgroundColor: '#eaeaea' }}></Grid>
        <Grid md={10} xs={12}>
          <VerticalStepperForm />
        </Grid>
        <Grid md={1}></Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
