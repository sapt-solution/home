import React, { useState} from 'react';
import { List, Box, Grid, Typography, Link } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Grid container spacing={2} sx = {{  backgroundColor: '#E9E6E2', paddingTop: '2%'}}>
        <Grid item md={1.5} xs={1} />
        <Grid item md={3} xs={4} sx={{ display: 'flex', justifyContent: 'start'}}>
          <Box sx={{ display: 'flex' }}>
            <img src="../../assets/logo.svg" alt="Sapt Logo" />
          </Box>
        </Grid>

        <Grid item xs={1} sx={{display: {xs: 'none', md: 'block'}}} />
        <Grid item md={5} xs={7} sx={{display: {md: 'block', xs: 'flex'}, justifyContent:{xs: 'end'}}}>
        <List
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-between',
          borderRadius: '30px',
          backgroundColor: '#192021',
          padding: '2% 5%'
        }}
      >
        <Link href="/" underline="none">
          <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Home</Typography>
        </Link>
        <Link href="/about" underline="none">
          <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>About</Typography>
        </Link>
        <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Services</Typography>
        <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Contact Us</Typography>
      </List>

      {/* Mobile View */}
      <IconButton
        onClick={handleDrawerOpen}
        sx={{ display: { xs: 'flex', md: 'none' }, color: '#1B1B1B' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
        sx={{ display: { xs: 'flex', md: 'none' }, 
        color: '#000000'
      }}
      >
        <List
          sx={{
            width: '20vw',
            height: '100%',
            backgroundColor: '#192021',
            padding: '2% 5%',
          }}
        >
          <Link href="/" underline="none">
            <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'Jost' }}>Home</Typography>
          </Link>
          <Link href="/about" underline="none">
            <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'Jost' }}>About</Typography>
          </Link>
          <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'Jost' }}>Services</Typography>
          <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'Jost' }}>Contact Us</Typography>
        </List>
      </Drawer>
        </Grid>
        <Grid item xs={1.5} sx={{display: {xs: 'none', md: 'block'}}} />
      </Grid>
    </>
  );
};

export default Header;
