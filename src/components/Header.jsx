import React from 'react';
import { List, Box, Grid, Typography } from '@mui/material';


const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  return (
    <>
    <Grid container sx={{ marginTop: '47px', marginLeft: '200px' }}>
      <Grid item>
      <Box>
        <img src="../../assets/logo.svg" alt="Sapt Logo" />
      </Box>
      </Grid>
      <Grid item sx={{ marginLeft: '283px', width: "616px" }}>
      <List sx={{
              display: 'flex',
              justifyContent: 'space-around',
              borderRadius: '30px', // Adjust border radius
              backgroundColor: '#192021', // Background color
              padding: '1px', // Adjust padding
              width: '600px',
              height: '60px'
            }}>
              <Typography variant="body1" sx={{ color: '#FFFFFF', whiteSpace: 'nowrap', marginTop: "15px", fontSize: '20px', fontFamily: 'Jost'}}>About</Typography>
              <Typography sx={{ color: '#FFFFFF', whiteSpace: 'nowrap', marginTop: "15px", fontSize: '20px', fontFamily: 'Jost' }}>Our Work</Typography>
              <Typography sx={{ color: '#FFFFFF', whiteSpace: 'nowrap', marginTop: "15px", fontSize: '20px', fontFamily: 'Jost' }}>Services</Typography>
              <Typography sx={{ color: '#FFFFFF', whiteSpace: 'nowrap', marginTop: "15px", fontSize: '20px', fontFamily: 'Jost' }}>Contact Us</Typography>
            </List>
        </Grid>
        </Grid>
    </>
  );
};

export default Header;
