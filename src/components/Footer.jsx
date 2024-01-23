import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <>
            <Box height={150} />
            <Box sx={{ backgroundColor: '#E9E6E2' }}>
                <Box height={100} sx={{ backgroundColor: '#E9E6E2' }} />
                <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item md={5}></Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src="../../assets/map.svg" alt="Map" />
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src="../../assets/contact.svg" alt="Map" />
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src="../../assets/announcement.svg" alt="Map" />
                    </Grid>
                    <Grid item md={1}> </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', flexDirection: 'row', mt: '1%' }}>
                    <Grid item md={5}></Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography sx={{fontSize: '1em', fontFamily: 'Jost-700'}}> Location </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '1em', fontFamily: 'Jost-700'}}> Contact us </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '1em', fontFamily: 'Jost-700'}}> Follow us </Typography>
                    </Grid>
                    <Grid item md={1}> </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', flexDirection: 'row', mt: '1%' }}>
                <Grid item md={1}></Grid>
                    <Grid item md={4}>

                    <Typography sx={{ p:'0 1', color: '#1B1B1B', fontSize: '0.75em', fontFamily: 'RammettoOne', width: '100%', textAlign: 'center', textAlignLast: 'justify' }}>
                    We pride ourselves on our extensive <br/> 
                    </Typography>
                    <Typography sx={{ p:'0 1', color: '#1B1B1B', fontSize: '0.75em', fontFamily: 'RammettoOne', width: '100%', textAlign: 'center', textAlignLast: 'justify' }}>
                    experience with leading industry technologies  <br/> 
                    </Typography>
                    <Typography sx={{ p:'0 1', color: '#1B1B1B', fontSize: '0.75em', fontFamily: 'RammettoOne', width: '100%', wordSpacing: '12px'}}>
                    like unreal engine and unity
                    </Typography>

                    
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', fontFamily: 'Jost-400'}}> Ahmedabad, India </Typography>
                        <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', m: 1, fontFamily: 'Jost-400'}}> Toronto, Canada </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
                        <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', fontFamily: 'Jost-400'}}> saptservices@gmail.com </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/facebook.svg" alt="Map" />
                        </a>
                        </Box>
                        <Box sx={{ml: 1}}>
                        <a href="https://www.linkedin.com/company/saptsolutions/about/" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/linkedIn.svg" alt="Map" />
                        </a>
                        </Box>
                        <Box sx={{ml: 1}}>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/twitter.svg" alt="Map" />
                        </a>
                        </Box>
                    </Grid>
                    <Grid item md={1}> </Grid>
                </Grid>

                <Box height={50} />

                <Grid container sx={{ display: 'flex', flexDirection: 'row', mt: '1%' }}>
                    <Grid item md={1}/>
                    <Grid item md={4} sx={{fontSize: '0.70em', fontFamily: 'Jost', letterSpacing: '3%'}}>
                    COPYRIGHT © 2024 SAPT SOLUTIONS
                    </Grid>
                    <Grid item md={7}/>
                </Grid>

                <Box height={20}/>
            </Box>
        </>
    )
}

export default Footer;