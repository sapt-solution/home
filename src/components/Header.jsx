import React, { useState, useContext} from 'react';
import { List, Box, Grid, Typography, Link, ListItem, ListItemButton, ListItemText} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BackgroundColorContext } from '../context/BackgroundColorContext';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { backgroundColor, setBackgroundColor } = useContext(BackgroundColorContext);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleMenuClick = (backgroudColor) => {
    setBackgroundColor(backgroudColor);
    handleDrawerClose();
  }
  return (
    <>
      <Grid container spacing={2} sx = {{  backgroundColor: backgroundColor, paddingTop: '2%'}}>
        <Grid item md={1.5} xs={0.5} />
        <Grid item md={3} xs={4} sx={{ display: 'flex', justifyContent: 'start'}}>
          <Box sx={{ display: 'flex' }}>
          <Link href="#" underline="none" onClick={() => handleMenuClick('#E9E6E2')}>
            <img src="../../logo.svg" alt="Sapt Logo" />
            </Link>
          </Box>
        </Grid>

        <Grid item xs={2} sx={{display: {xs: 'none', md: 'block'}}} />
        <Grid item md={4} xs={7} sx={{display: {md: 'block', xs: 'flex'}, justifyContent:{xs: 'end'}}}>
        <List
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-between',
          borderRadius: '30px',
          backgroundColor: '#192021',
          padding: '2% 5%'
        }}
      >
        <Link href="#" underline="none" onClick={() => handleMenuClick('#E9E6E2')}>
          <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Home</Typography>
        </Link>
        <Link href="#/about" underline="none" onClick={() => handleMenuClick('white')}>
          <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Who Are We</Typography>
        </Link>
        <Link href="#/contact" underline="none" onClick={() => handleMenuClick('#E9E6E2')}>
        <Typography sx={{ color: '#FFFFFF', fontSize: { sm: '1.0rem', md: '1.0rem', lg: '1.2rem' }, fontFamily: 'Jost' }}>Get in Touch</Typography>
        </Link>
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
            width: '50vw',
            height: '100%',
            backgroundColor: '#192021',
            padding: '2% 5%',
          }}
        >
            <ListItemButton component="a" href="#" onClick={() => handleMenuClick('#E9E6E2')}>
            <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'Jost' }}>Home</Typography>
            </ListItemButton>
            <ListItemButton component="a" href="#/about" onClick={() => handleMenuClick('white')}>
            <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'Jost' }}>Who Are We</Typography>
            </ListItemButton>
            <ListItemButton component="a" href="#/contact" onClick={() => handleMenuClick('#E9E6E2')}>
            <Typography sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontFamily: 'Jost' }}>Get in Touch</Typography>
            </ListItemButton>
         
        </List>
      </Drawer>
        </Grid>
        <Grid item xs={1.5} sx={{display: {xs: 'none', md: 'block'}}} />
      </Grid>
    </>
  );
};

export default Header;
