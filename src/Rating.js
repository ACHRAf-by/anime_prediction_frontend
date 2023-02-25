import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(rate) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        maxWidth: '200px', margin: '0 auto'
      }}
    >
      <Typography component="legend">Predicted Rate</Typography>
      <Rating name="read-only" value={rate.rate} readOnly />
    </Box>
  );
}