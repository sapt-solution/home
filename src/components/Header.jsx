import React from 'react';
import { List, Box, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';

const Header = () => {
  return (
    <>
      <Grid container spacing={2} sx = {{  backgroundColor: '#E9E6E2', paddingTop: '2%'}}>
        <Grid item xs={1.5} />
        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'start'}}>
          <Box sx={{ display: 'flex' }}>
            <img src="../../assets/logo.svg" alt="Sapt Logo" />
          </Box>
        </Grid>

        <Grid item xs={1} />
        <Grid item xs={5}>
          <List sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '30px',
            backgroundColor: '#192021',
            padding: '2% 5%'
          }}>
            <Link href="/" underline="none">
              <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Home</Typography>
            </Link>
            <Link href="/about" underline="none">
              <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>About</Typography>
            </Link>
            <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Services</Typography>
            <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Contact Us</Typography>
          </List>
        </Grid>
        <Grid item xs={1.5} />
      </Grid>
    </>
  );
};

export default Header;
