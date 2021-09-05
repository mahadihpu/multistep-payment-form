import { Grid, Typography } from '@material-ui/core'
import './App.css'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <Grid container>
      <Grid md={1}></Grid>
      <Grid md={10} xs={12}>
        <Typography>Loan Application</Typography>
        <Typography>Fill out all the information to get easy loans</Typography>
        <Sidebar />
      </Grid>
      <Grid md={1}></Grid>
    </Grid>
  )
}

export default App
