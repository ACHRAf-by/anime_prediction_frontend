import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import FormPropsTextFields from './Form';
import BasicRating from './Rating';


function App() {
  const [rate, setRate] = React.useState(0)

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h3" align="center">
          Anime Rating
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <FormPropsTextFields setRate={setRate} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" align="center">
          <BasicRating rate={rate} />
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;