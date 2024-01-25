import React from 'react';
import { Grid, Typography, Box, Paper, useTheme, Button} from '@mui/material';


const Home = () => {
  const theme = useTheme();

  const arrowIconStyle = {
    position: 'absolute',
    bottom: 0,
    left: {xs: '10%', md: '80%'},
    top: {xs: '5%', md: '70%'},
  };
  
  const ArrowIcon = () => {
    return (
      <Box sx={arrowIconStyle}>
        <svg width="30" height="218" viewBox="0 0 30 218" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="218" width="218" height="30" rx="15" transform="rotate(-90 0 218)" fill="#192021" />
          <circle cx="14.5" cy="142.5" r="7" fill="#4D69FF" stroke="white" />
          <path d="M4 175.325L14.5 186L25 175.325L23.2351 173.531L15.7478 181.143L15.7478 148L13.252 148L13.252 181.143L5.76487 173.531L4 175.325Z" fill="#4D69FF" />
        </svg>
      </Box>
    );
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Box sx={{ backgroundColor: '#E9E6E2', height: { xs: 30, md: 150} }} />
        <Grid container spacing={2} direction="row" justifyContent={'space-between'} sx={{ backgroundColor: '#E9E6E2' }}>
          <Grid item md={1.5} sx={{display: {xs: 'none', md: 'block'}}} />
          <Grid item lg={2} md={2} xs={12} sx={{ display: 'flex', justifyContent: 'center', marginLeft: {xs: '0%', md: '5%'} }}>
            <Typography sx={{ color: '#1B1B1B', fontSize: { xs: '5rem', md: '5rem', lg: '6rem' }, fontFamily: 'RammettoOne', lineHeight: '1em' }}> WE </Typography>
          </Grid>
          <Grid item md={1} xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: { xs: '1.2rem', md: '1.1rem', lg: '1.2rem' }, fontFamily: 'Jost-600' }}> Design </Typography>
            <Typography sx={{ color: '#4D69FF', fontSize: { xs: '1.2rem', md: '1.1rem', lg: '1.2rem' }, fontFamily: 'Jost-600' }}> Develop </Typography>
            <Typography sx={{ color: '#4D69FF', fontSize: { xs: '1.2rem', md: '1.1rem', lg: '1.2rem' }, fontFamily: 'Jost-600' }}> Code </Typography>
          </Grid>
          <Grid item md={5} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Typography sx={{ color: '#1B1B1B', fontSize: { xs: '1.1em', md: '1.1em', lg: '1.4em' }, fontFamily: 'RammettoOne', textAlignLast: {xs: 'center', md: 'justify'} }}>
              For companies ranging from
            </Typography>
            <Typography sx={{ color: '#1B1B1B', fontSize: { xs: '1.1em', md: '1.1em', lg: '1.4em' }, fontFamily: 'RammettoOne', textAlignLast: {xs: 'center', md: 'justify'} }}>
              startups to the most iconic brands
            </Typography>
            <Typography sx={{ color: '#1B1B1B', fontSize: { xs: '1.1em', md: '1.1em', lg: '1.4em' }, fontFamily: 'RammettoOne', lineHeight: '1.2em', textAlignLast: {xs: 'center', md: 'start'}, wordSpacing: {xs: '0px', md: '10px'}  }}>
              in the world
              <Typography variant={"div"} sx={{ color: '#4D69FF', fontSize: { xs: '1.5em', md: '1.5em', lg: '1.5em' }, display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
            </Typography>
          </Grid>
          <Grid item md={1.5} sx={{display: {xs: 'none', md: 'block'}}} />
        </Grid>
        <Box sx={{ backgroundColor: '#E9E6E2', height: { xs: 100, md: 250} }} />
        <ArrowIcon />
      </div>
      <Box sx= {{ height: { xs: 50, md: 150}}} />

      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item md={1} sx={{display: {xs: 'none', md: 'block'}}} />
        <Grid item md={10} xs={12}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.125em', fontFamily: 'Jost-400', textAlign: 'center', fontWeight: 'bold' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography> &nbsp; What &nbsp; you &nbsp;  can &nbsp; expect &nbsp;
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
          </Typography>
        </Grid>
        <Grid item md={1} sx={{display: {xs: 'none', md: 'block'}}} />
      </Grid>

      <Grid container sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E9E6E2', padding: '2% 0%', marginTop: '1%' }}>
        <Grid item md={1} sx={{display: {xs: 'none', md: 'block'}}} />
        <Grid item md={10} xs={12} >
          <Typography sx={{ color: '#1B1B1B', fontSize: { xs: '1.2rem', md: '1.5em' }, fontFamily: 'RammettoOne', width: '100%', textAlign: 'center' }}>
            All about delivering
            top-notch
            work that  <br />
            &nbsp; &nbsp; goes above and beyond expectations
          </Typography>
        </Grid>
        <Grid item md={1} sx={{display: {xs: 'none', md: 'block'}}} />
      </Grid>

      <Box height={60} />

      <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid item md={1} sx={{display: {xs: 'none', md: 'block'}}} />
        <Grid item md={10} xs={12}>
          <Typography sx={{ color: '#1B1B1B', fontSize: '1.125em', fontFamily: 'Jost-400', textAlign: 'center', fontWeight: 'bold' }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography> &nbsp; Where &nbsp; we &nbsp; can &nbsp; help &nbsp; you &nbsp;
            <Typography sx={{ color: '#4D69FF', fontSize: '1.6em', display: 'inline', fontFamily: 'RammettoOne' }}> . </Typography>
          </Typography>
        </Grid>
        <Grid item md={1} sx={{display: {xs: 'none', md: 'block'}}} />
      </Grid>


      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
        <Grid item md={2} sx={{display: {xs: 'none', md: 'block'}}}/>
        <Grid item md={8} xs={12}>
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
            <Typography sx={{ color: '#1B1B1B', fontSize: { xs: '2em', md: '3em' }, fontFamily: 'RammettoOne', width: '100%', textAlign: 'center' }}>
              FROM 'EUREKA' MOMENTS <br />
              TO INTERFACES: YOUR <br />
              FUTURE, OUR CODE
            </Typography>

          </Paper>
        </Grid>
        <Grid item md={2} sx={{display: {xs: 'none', md: 'block'}}} />
      </Grid>

      <Box height={60} />

      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
        <Grid item md={2} sx={{display: {xs: 'none', md: 'block'}}} />
        <Grid item md={8} xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="../../phone.svg" alt="Phone Logo" />
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
        <Grid item md={2} sx={{display: {xs: 'none', md: 'block'}}} />
      </Grid>
    </>
  );
};

export default Home;