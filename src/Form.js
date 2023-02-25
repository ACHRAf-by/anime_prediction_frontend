import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import GenderField from './GenderInput';

export default function FormPropsTextFields(props) {

    const {setRate} = props

  const [formValues, setFormValues] = React.useState({
    title: '',
    gender: [],
    description: '',
    type: 0,
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
    
    fetch('http://localhost:5000/api/prediction', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formJSON
      })
        .then(response => response.json())
        .then(data => {
          // Do something with the response data, e.g. update state
          console.log(data)
          setRate(data.result)
        })
        .catch(error => {
          // Handle any errors
          console.error(error)
        })
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
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         
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
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         

          >
            <MenuItem value={1}>Movie</MenuItem>
            <MenuItem value={0}>Serie</MenuItem>
          </TextField>

          <TextField
            name="producer"
            label="Producer"
            margin="normal"
            variant="filled"
            fullWidth
            value={formValues.producer}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         

          />

          <TextField
            name="studio"
            label="Studio"
            margin="normal"
            fullWidth
            variant="filled"
            value={formValues.studio}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         
          />
        </Grid>

        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'center', paddingLeft: '290px' }}
        >
            <GenderField 
              value={formValues.gender} onChange={handleGenderChange}
             />
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
            style={{flex:1, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         
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
