import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Hero = () => {

  return(
    <Paper
    sx={{
      position: 'relative',
      borderRadius: 0,
      color: '#fff',
      mb: 4,
      backgroundColor: '#ff5117',
      backgroundImage: 'url(https://source.unsplash.com/random)',
    }}
    >
    <Box/>
    <Grid container>
      <Grid item md={6}>
        <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Estudio experimental 2025
          </Typography>
          <Stack spacing={1} direction="row">
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Paper> 
  )
};

export default Hero;