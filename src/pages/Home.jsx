import React from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';


const Home = () => {
  return (
    <Grid container
    style={{
      minHeight: '100vh', // Set the height to the viewport height
      backgroundColor: '#E9E6E2', // Grey background color
    }}>
    <Header/>
    </Grid>
  );
};

export default Home;