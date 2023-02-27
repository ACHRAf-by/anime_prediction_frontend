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
    Title: '',
    Gender: [],
    Synopsis: '',
    Type: '',
    Producer: '',
    Studio: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleGenderChange = (value) => {
    setFormValues({ ...formValues, Gender: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJSON = JSON.stringify(formValues);
    
    fetch('https://anime-backend.azurewebsites.net/api/prediction', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formJSON
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
          // Do something with the response data, e.g. update state
          if(data.result === 3){
            setRate({rate: 5, judgment: 'Excellent'})
          }
          else if (data.result === 2){
            setRate({rate: 4, judgment: 'Good'})
          }
          else if(data.result === 1){
            setRate({rate: 3, judgment: 'Average'})
          }
          else{
            setRate({rate: 1, judgment: 'Poor'})
          }
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
            name="Title"
            id="filled-basic"
            label="Title"
            inputProps={{
              'data-cy': 'title-field', // add the data-cy attribute here
            }}
            variant="filled"
            fullWidth
            value={formValues.Title}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}       
            />
          <TextField
            name="Type"
            select
            label="Type"
            value={formValues.Type}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
            variant="filled"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         
            data-cy="type-field"
          >
            <MenuItem value="TV" >TV</MenuItem>
            <MenuItem value="Movie" >Serie</MenuItem>
            <MenuItem value="OVA" >OVA</MenuItem>
            <MenuItem value="Special" >Special</MenuItem>
            <MenuItem value="ONA" >ONA</MenuItem>
            <MenuItem value="Music" >Music</MenuItem>
          </TextField>

          <TextField
            name="Source"
            select
            label="Source"
            value={formValues.source}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
            variant="filled"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         
            data-cy="source-field"
          >
            <MenuItem value="Original" >Original</MenuItem>
            <MenuItem value="Manga" >Manga</MenuItem>
            <MenuItem value="Light novel" >Light novel</MenuItem>
            <MenuItem value="Game" >Game</MenuItem>
            <MenuItem value="Visual novel" >Visual novel</MenuItem>
            <MenuItem value="4-koma manga" >4-koma manga</MenuItem>
            <MenuItem value="Novel" >Novel</MenuItem>
            <MenuItem value="Unknown" >Unknown</MenuItem>
            <MenuItem value="Other" >Other</MenuItem>
            <MenuItem value="Picture book" >Picture book</MenuItem>
            <MenuItem value="Web manga" >Web manga</MenuItem>
            <MenuItem value="Music" >Music</MenuItem>
            <MenuItem value="Book" >Book</MenuItem>
            <MenuItem value="Card game" >Card game</MenuItem>
            <MenuItem value="Radio" >Radio</MenuItem>
            <MenuItem value="Digital manga" >Digital manga</MenuItem>
          </TextField>

          <TextField
            name="Producer"
            label="Producer"
            margin="normal"
            variant="filled"
            fullWidth
            value={formValues.Producer}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         
            inputProps={{
              'data-cy': 'producer-field', // add the data-cy attribute here
            }}   
          />

          <TextField
            name="Studio"
            label="Studio"
            margin="normal"
            fullWidth
            variant="filled"
            value={formValues.Studio}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}         
            inputProps={{
              'data-cy': 'studio-field', // add the data-cy attribute here
            }}   
          />
        </Grid>

        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'center', paddingLeft: '290px' }}
        >
            <GenderField 
              value={formValues.Gender} 
              onChange={handleGenderChange}
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
            name="Synopsis"
            label="Synopsis"
            margin="normal"
            fullWidth
            multiline
            variant="filled"
            rows={8}
            value={formValues.Synopsis}
            onChange={handleInputChange}
            style={{flex:1, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}    
            inputProps={{
              'data-cy': 'synopsis-field', // add the data-cy attribute here
            }}     
          />
        </Grid>

        <Grid item xs={12} justifyContent="center" container>
          <Grid item textAlign="center">
            <Button variant="contained" type="submit" data-cy="mui-button">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
