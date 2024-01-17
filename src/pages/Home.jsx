import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const Home = () => {

  return (
    <>
      <Box m={25} />
      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '7em', fontFamily: 'RammettoOne', lineHeight: '1em' }}> WE </Typography>
          <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '12%' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '18px', fontFamily: 'Jost-600' }}> Design </Typography>
            <Typography sx={{ color: '#4D69FF', fontSize: '18px', fontFamily: 'Jost-600' }}> Develop </Typography>
            <Typography sx={{ color: '#4D69FF', fontSize: '18px', fontFamily: 'Jost-600' }}> Code </Typography>
          </Container>
        </Grid>
        <Grid item xs={5} sx={{ marginLeft: '5%' }}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.5em', fontFamily: 'RammettoOne', width: '100%', textAlignLast: 'justify' }}>
            For companies ranging from <br />
          </Typography>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.5em', fontFamily: 'RammettoOne', width: '100%', textAlignLast: 'justify' }}>
            startups to the most iconic brands <br />
          </Typography>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.5em', fontFamily: 'RammettoOne', width: '100%' }}>
            in the world <Typography sx={{ color: '#4D69FF', fontSize: '1.2em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
};

export default Home;