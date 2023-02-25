import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import GenderField from './GenderInput';

export default function FormPropsTextFields() {
  const [formValues, setFormValues] = React.useState({
    title: '',
    gender: [],
    description: '',
    type: 'Movie',
    producer: '',
    studio: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleGenderChange = (value) => {
    setFormValues({ ...formValues, gender: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJSON = JSON.stringify(formValues);
    console.log(formJSON);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <TextField
            name="title"
            id="filled-basic"
            label="Title"
            variant="filled"
            fullWidth
            value={formValues.title}
            onChange={handleInputChange}
          />

          <TextField
            name="type"
            select
            label="Type"
            value={formValues.type}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
            variant="filled"
          >
            <MenuItem value="Movie">Movie</MenuItem>
            <MenuItem value="Serie">Serie</MenuItem>
          </TextField>

          <TextField
            name="producer"
            label="Producer"
            margin="normal"
            variant="filled"
            fullWidth
            value={formValues.producer}
            onChange={handleInputChange}
          />

          <TextField
            name="studio"
            label="Studio"
            margin="normal"
            fullWidth
            variant="filled"
            value={formValues.studio}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'center', paddingLeft: '290px' }}
        >
            <GenderField value={formValues.gender} onChange={handleGenderChange} />
        </Grid>

        <Grid
          item
          xs={12}
          justifyContent="center"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <TextField
           id="filled-multiline-static"
            name="description"
            label="Description"
            margin="normal"
            fullWidth
            multiline
            variant="filled"
            rows={8}
            value={formValues.description}
            onChange={handleInputChange}
            style={{ flex: 1 }}
          />
        </Grid>

        <Grid item xs={12} justifyContent="center" container>
          <Grid item textAlign="center">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
