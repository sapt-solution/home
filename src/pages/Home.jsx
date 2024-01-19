import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const arrowIconStyle = {
  position: 'absolute',
  bottom: 0,
  left: '80%',
  top: '70%',
};

const ArrowIcon = () => {
  return (
    <div style={arrowIconStyle}>
      <svg width="30" height="218" viewBox="0 0 30 218" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="218" width="218" height="30" rx="15" transform="rotate(-90 0 218)" fill="#192021" />
        <circle cx="14.5" cy="142.5" r="7" fill="#4D69FF" stroke="white" />
        <path d="M4 175.325L14.5 186L25 175.325L23.2351 173.531L15.7478 181.143L15.7478 148L13.252 148L13.252 181.143L5.76487 173.531L4 175.325Z" fill="#4D69FF" />
      </svg>

    </div>
  );
};

const Home = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Box height={150} style={{ backgroundColor: '#E9E6E2' }} />
        <Grid container sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E9E6E2' }}>
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
        <Box height={250} style={{ backgroundColor: '#E9E6E2' }} />
        <ArrowIcon />
      </div>
      <Box height={150} />
      
      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.125em', fontFamily: 'Jost-500', textAlign: 'center' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography> &nbsp; What &nbsp; you &nbsp;  can &nbsp; expect &nbsp;
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E9E6E2', padding: '2% 0%', marginTop: '1%'}}>
        <Grid item xs={1} />
        <Grid item xs={10} >
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.5em', fontFamily: 'RammettoOne', width: '100%', textAlign: 'center'}}>
          All about delivering top-notch work that  <br />
          &nbsp; &nbsp; goes above and beyond expectations
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Box height={60} />
      
      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.125em', fontFamily: 'Jost-500', textAlign: 'center' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography> &nbsp; Where &nbsp; we &nbsp; can &nbsp; help &nbsp; you &nbsp;
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>


    </>
  );
};

export default Home;