import React from 'react';
import { Grid, Typography, Box, Paper, useTheme, Button } from '@mui/material';

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
  const theme = useTheme();
  return (
    <>
      <div style={{ position: 'relative' }}>
        <Box height={150} style={{ backgroundColor: '#E9E6E2' }} />
        <Grid container spacing={2} direction="row" justifyContent={'space-between'} sx={{ backgroundColor: '#E9E6E2' }}>
          <Grid item md={1.5} />
          <Grid item lg={2} md={2} sx={{ display: 'flex', justifyContent: 'center', marginLeft: '5%' }}>
            <Typography sx={{ color: '#1B1B1B', fontSize: { sm: '6rem', md: '5rem', lg: '6rem' }, fontFamily: 'RammettoOne', lineHeight: '1em' }}> WE </Typography>
          </Grid>
          <Grid item md={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: { sm: '1.2rem', md: '1.1rem', lg: '1.2rem' }, fontFamily: 'Jost-600' }}> Design </Typography>
            <Typography sx={{ color: '#4D69FF', fontSize: { sm: '1.2rem', md: '1.1rem', lg: '1.2rem' }, fontFamily: 'Jost-600' }}> Develop </Typography>
            <Typography sx={{ color: '#4D69FF', fontSize: { sm: '1.2rem', md: '1.1rem', lg: '1.2rem' }, fontFamily: 'Jost-600' }}> Code </Typography>
          </Grid>
          <Grid item md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Typography sx={{ color: '#1B1B1B', fontSize: { sm: '1.1em', md: '1.1em', lg: '1.4em' }, fontFamily: 'RammettoOne', textAlignLast: 'justify' }}>
              For companies ranging from
            </Typography>
            <Typography sx={{ color: '#1B1B1B', fontSize: { sm: '1.1em', md: '1.1em', lg: '1.4em' }, fontFamily: 'RammettoOne', textAlignLast: 'justify' }}>
              startups to the most iconic brands
            </Typography>
            <Typography sx={{ color: '#1B1B1B', fontSize: { sm: '1.1em', md: '1.1em', lg: '1.4em' }, fontFamily: 'RammettoOne', lineHeight: '1.2em' }}>
              in the world
              <Typography variant={"div"} sx={{ color: '#4D69FF', fontSize: { sm: '1.5em', md: '1.5em', lg: '1.5em' }, display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
            </Typography>
          </Grid>
          <Grid item md={1.5} />
        </Grid>
        <Box height={250} style={{ backgroundColor: '#E9E6E2' }} />
        <ArrowIcon />
      </div>
      <Box height={150} />

      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item md={1} />
        <Grid item md={10}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.125em', fontFamily: 'Jost-400', textAlign: 'center', fontWeight: 'bold' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography> &nbsp; What &nbsp; you &nbsp;  can &nbsp; expect &nbsp;
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
          </Typography>
        </Grid>
        <Grid item md={1} />
      </Grid>

      <Grid container sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E9E6E2', padding: '2% 0%', marginTop: '1%' }}>
        <Grid item md={1} />
        <Grid item md={10} >
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.5em', fontFamily: 'RammettoOne', width: '100%', textAlign: 'center' }}>
            All about delivering
            top-notch
            work that  <br />
            &nbsp; &nbsp; goes above and beyond expectations
          </Typography>
        </Grid>
        <Grid item md={1} />
      </Grid>

      <Box height={60} />

      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item md={1} />
        <Grid item md={10}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.125em', fontFamily: 'Jost-400', textAlign: 'center', fontWeight: 'bold' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography> &nbsp; Where &nbsp; we &nbsp; can &nbsp; help &nbsp; you &nbsp;
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
          </Typography>
        </Grid>
        <Grid item md={1} />
      </Grid>


      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
        <Grid item md={2} />
        <Grid item md={8}>
          <Paper
            elevation={3}
            style={{
              borderRadius: 10, // Adjust this value for the desired border radius
              margin: 'auto', // Center the rectangle
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E9E6E2',
              padding: theme.spacing(2), // Add padding for better responsiveness
              boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            <Typography sx={{ color: '#1B1B1B', fontSize: '3em', fontFamily: 'RammettoOne', width: '100%', textAlign: 'center' }}>
              FROM 'EUREKA' MOMENTS <br />
              TO INTERFACES: YOUR <br />
              FUTURE, OUR CODE
            </Typography>

          </Paper>
        </Grid>
        <Grid item md={2} />
      </Grid>

      <Box height={60} />

      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
        <Grid item md={2} />
        <Grid item md={8}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="../../assets/phone.svg" alt="Phone Logo" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <>
              <Typography sx={{ color: '#1B1B1B', fontSize: '1.125em', fontFamily: 'Jost-400', textAlign: 'center', letterSpacing: '2px', fontWeight: 'bold' }}>
                <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
                &nbsp; Let's &nbsp; collaborate &nbsp;
                <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
              </Typography>
            </>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <>
              <Typography sx={{ mt: '1%', color: '#1B1B1B', fontSize: '1.5em', fontFamily: 'RammettoOne', textAlign: 'center', letterSpacing: '2px', fontWeight: 'bold' }}>

                &nbsp; We &nbsp; Promise &nbsp; No &nbsp; Boring &nbsp; Meetings

              </Typography>
            </>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <>
              <Button variant="contained" sx={{ mt: '1%', backgroundColor: '#4D69FF', color: 'white', borderRadius: '30px', fontSize: '0.7em', fontFamily: 'Jost-600', width: '150px', height: '40px' }}> Get in Touch </Button>
            </>
          </Box>

        </Grid>
        <Grid item md={2} />
      </Grid>
    </>
  );
};

export default Home;