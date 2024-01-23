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
                        <Typography> Location </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography> Contact us </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography> Follow us </Typography>
                    </Grid>
                    <Grid item md={1}> </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', flexDirection: 'row', mt: '1%' }}>
                <Grid item md={1}></Grid>
                    <Grid item md={4}>

                    <Typography sx={{ color: '#1B1B1B', fontSize: '0.75em', fontFamily: 'RammettoOne', width: '100%', textAlign: 'center', textAlignLast: 'justify' }}>
                    We pride ourselves on our extensive <br/> 
                    </Typography>
                    <Typography sx={{ color: '#1B1B1B', fontSize: '0.75em', fontFamily: 'RammettoOne', width: '100%', textAlign: 'center', textAlignLast: 'justify' }}>
                    experience with leading industry technologies  <br/> 
                    </Typography>
                    <Typography sx={{ color: '#1B1B1B', fontSize: '0.75em', fontFamily: 'RammettoOne', width: '100%', wordSpacing: '12px'}}>
                    like unreal engine and unity
                    </Typography>

                    
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <Typography sx={{ color: '#4D69FF'}}> Ahmedabad, India </Typography>
                        <Typography sx={{ color: '#4D69FF'}}> Toronto, Canada </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography sx={{ color: '#4D69FF'}}> saptservices@gmail.com </Typography>
                    </Grid>
                    <Grid item md={2} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
            </Box>
        </>
    )
}

export default Footer;