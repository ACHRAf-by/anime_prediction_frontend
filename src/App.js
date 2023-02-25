import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import FormPropsTextFields from './Form';
import BasicRating from './Rating';
import './App.css'

function App() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography>
          <h1> Anime Rating</h1>
          <p>Enter anime informations and get a predicition</p>
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <FormPropsTextFields />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" align="center">
          <BasicRating />
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;