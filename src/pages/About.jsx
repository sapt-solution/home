import React from 'react';
import { Grid, Typography, Box, Paper, useTheme, Button } from '@mui/material';


const About = () => {
  return (
    <>
      <Box sx={{ height: { xs: 30, md: 150 } }} />
      <Grid container>
        <Grid item md={1.5} sx={{display: {xs: 'none', md: 'block'}}} />
        <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="../../hand.svg" alt="Hands" />
        </Grid>
        <Grid item md={5} xs={12} sx={{ p: {xs: '5%', md: '0'}}}>
          <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '1.5rem' }}>
            Hello, welcome to Sapt
          </Typography>

          <Typography sx={{ fontFamily: 'Jost', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', textAlign: 'justify', mt: 1 }}>
            We're not your typical software consultancy.
            Think of us as your trusty sidekick in the digital realm.
            We're all about fresh ideas and delivering top-quality solutions.
            Let us handle the tech challenges while you focus on growing your business. <br />
            We know that people don’t remember what you tell them, but how you make them feel.
            We know that everything we put in the world is a statement of our taste.
            We know that love is always the secret ingredient <br />
            But don’t measure us by our words. Measure us by our work.
          </Typography>
        </Grid>
        <Grid item md={1.5} />
      </Grid>
      <Box height={150} />

      <Box sx={{ height: {xs: 'none', md: 30}, backgroundColor: "#E9E6E2" }} />

      <Grid container sx={{ backgroundColor: "#E9E6E2", display: 'flex', flexDirection: 'row' }}>
        <Grid item md={2} />
        <Grid item md={4} xs={12} sx={{ p: {xs: '5%', md: '0'}}}>
          <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '1.5rem' }}>
            A bit of history
          </Typography>

          <Typography sx={{ fontFamily: 'Jost', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', textAlign: 'justify', mt: 1 }}>
            We are two childhood friends who studied together, worked together in our early years and seen the places together.
            Now we are venturing into the world of digital products leveraging our shared experiences to create software solutions
          </Typography>
        </Grid>
        <Grid item md={1} sx={{display: {xs: 'none', md:'block'}}}/>
        <Grid item md={3} xs={12} sx={{display: {xs: 'flex', md: 'block'}, justifyContent: 'center' }} >
          <img src="../../friend.svg" alt="Friend" />
        </Grid>
        <Grid item md={2} />
      </Grid>
      <Box height={30} sx={{ backgroundColor: "#E9E6E2" }} />

      <Box height={150} />

      <Grid container>
        <Grid item md={1.5} sx={{ display: {xs: 'none', md: 'block'}}} />
        <Grid item md={3} sx={{ display: 'flex', alignItems: 'end' }}>
          <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '28px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', textAlign: 'justify', mt: 1 }}>
            Our 7 Core Values
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} sx={{ m: '0 1%', display: {xs: 'none', md: 'flex'} }}>
          <img src="../../weird.svg" alt="Weird" style={{height: '100%', width: '100%'}}/>
        </Grid>
        <Grid item md={3} xs={12} sx={{ backgroundColor: "#E9E6E2", height: 'auto', width: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '2%' }}>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '60px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', color: '#4D69FF' }}>
              1
            </Typography>
            <Typography sx={{ fontFamily: 'Jost-700', fontSize: '18px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '30px', ml: 2 }}>
              TRUST
            </Typography>
          </Box>

          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', mt: '15px', wordSpacing: '1px', lineHeight: '40px', color: '#1B1B1B', textAlign: 'justify' }}>
            We're the trust-building champs, sticking to our word, and rocking fairness like a boss.
          </Typography>
        </Grid>
        <Grid item md={1.5} sx={{ display: {xs: 'none', md: 'block'}}} />
      </Grid>


      <Grid container sx={{ mt: {xs: '1%', md: '2%'} }}>
        <Grid item md={1.5} sx={{ display: {xs: 'none', md: 'block'}}} />
        <Grid item md={3} xs={12} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#E9E6E2", height: 'auto', padding: '2%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '60px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', color: '#4D69FF' }}>
              2
            </Typography>
            <Typography sx={{ fontFamily: 'Jost-700', fontSize: '18px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '30px', ml: 2 }}>
              FREEDOM
            </Typography>
          </Box>

          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', mt: '15px', wordSpacing: '1px', lineHeight: '40px', color: '#1B1B1B', textAlign: 'justify' }}>
            Clock in at Sapt, where teamwork meets freedom, and everyone's a winner!
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} sx={{ m: {xs: '1% 0', md: '0 1%'}, backgroundColor: "#E9E6E2", height: 'auto', width: 'auto', display: 'flex', flexDirection: 'column', padding: '2%' }}>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '60px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', color: '#4D69FF' }}>
              3
            </Typography>
            <Typography sx={{ fontFamily: 'Jost-700', fontSize: '18px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '30px', ml: 2 }}>
              INNOVATION
            </Typography>
          </Box>

          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', mt: '15px', wordSpacing: '1px', lineHeight: '40px', color: '#1B1B1B', textAlign: 'justify' }}>
            We're a curious bunch, mixing diverse ideas into tech magic. Innovation isn't an option; it's our DNA.
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} sx={{ backgroundColor: "#E9E6E2", height: 'auto', width: '100%', display: 'flex', flexDirection: 'column', padding: '2%' }}>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '60px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', color: '#4D69FF' }}>
              4
            </Typography>
            <Typography sx={{ fontFamily: 'Jost-700', fontSize: '18px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '30px', ml: 2 }}>
            LIABLE
            </Typography>
          </Box>

          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', mt: '15px', wordSpacing: '1px', lineHeight: '40px', color: '#1B1B1B', textAlign: 'justify' }}>
            We're the action heroes, owning every move we make. Setting goals, learning from slips, and soaring high is our game
          </Typography>
        </Grid>
        <Grid item md={1.5} sx={{ display: {xs: 'none', md: 'block'}}} />
      </Grid>

      <Grid container sx={{ mt: {xs: '1%', md: '2%'} }}>
        <Grid item md={1.5} sx={{ display: {xs: 'none', md: 'block'}}} />
        <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#E9E6E2", height: 'auto', padding: '2%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '60px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', color: '#4D69FF' }}>
              5
            </Typography>
            <Typography sx={{ fontFamily: 'Jost-700', fontSize: '18px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '30px', ml: 2 }}>
              HUMILITY
            </Typography>
          </Box>

          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', mt: '15px', wordSpacing: '1px', lineHeight: '40px', color: '#1B1B1B', textAlign: 'justify' }}>
            We're not just about 'me,' but about the 'we.' It's not just humility; it's our magic potion for teamwork, kindness, and epic wins!
          </Typography>
        </Grid>
        <Grid item md={3} sx={{ m: {xs: '1% 0', md: '0 1%'}, backgroundColor: "#E9E6E2", height: 'auto', width: 'auto', display: 'flex', flexDirection: 'column', padding: '2%' }}>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '60px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', color: '#4D69FF' }}>
              6
            </Typography>
            <Typography sx={{ fontFamily: 'Jost-700', fontSize: '18px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '30px', ml: 2 }}>
              INTEGRITY
            </Typography>
          </Box>

          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', mt: '15px', wordSpacing: '1px', lineHeight: '40px', color: '#1B1B1B', textAlign: 'justify' }}>
            We're the truth-telling squad, committed to doing right. We talk the talk and walk the walk, building trust and keeping it real
          </Typography>
        </Grid>
        <Grid item md={3} sx={{ backgroundColor: "#E9E6E2", height: 'auto', width: '100%', display: 'flex', flexDirection: 'column', padding: '2%' }}>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography sx={{ fontFamily: 'RammettoOne', fontSize: '60px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '40px', color: '#4D69FF' }}>
              7
            </Typography>
            <Typography sx={{ fontFamily: 'Jost-700', fontSize: '18px', letterSpacing: '2px', wordSpacing: '1px', lineHeight: '30px', ml: 2 }}>
              FUN
            </Typography>
          </Box>

          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', mt: '15px', wordSpacing: '1px', lineHeight: '40px', color: '#1B1B1B', textAlign: 'justify' }}>
            Work's not just work; it's a playground of creativity. We're all about turning tasks into celebrations, making laughter our daily vitamin.
          </Typography>
        </Grid>
        <Grid item md={1.5} sx={{ display: {xs: 'none', md: 'block'}}} />
      </Grid>

      <Box height={150} />

      <Grid container>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>

          <img src="../../connect.svg" alt="Hands" />
        </Grid>

      </Grid>

      <Box height={50} sx={{ backgroundColor: '#E9E6E2' }} />

      <Grid container sx={{ backgroundColor: '#E9E6E2' }}>
        <Grid item md={2} sx={{ display: {xs: 'none', md: 'block'}}}/>
        <Grid item lg={7} md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontFamily: 'Jost-400', fontSize: '18px', letterSpacing: '1px', wordSpacing: '1px', lineHeight: '40px', textAlign: 'justify', }}>
            Let's team up and make the tech stuff a breeze, leaving you free to shine!
          </Typography>
        </Grid>
        <Grid item lg={1} md={12} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" sx={{ backgroundColor: '#4D69FF', color: 'white', borderRadius: '30px', fontSize: '0.7em', fontFamily: 'Jost-600', width: '150px', height: '40px' }}> Get in Touch </Button>
        </Grid>
        <Grid item md={2} sx={{ display: {xs: 'none', md: 'block'}}}/>
      </Grid>
      <Box height={50} sx={{ backgroundColor: '#E9E6E2' }} />

      <Box height={50} />
    </>
  );
};

export default About;