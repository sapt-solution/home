import React from 'react';
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';

const Footer = () => {
    return (
        <>
            <Divider hard />
            <Paper elevation={24} sx={{ backgroundColor: '#FFFFFF' }}>
                <Box height={40} />
                <Grid container sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row' }}>
                    <Grid item md={5}></Grid>
                    <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="../../map.svg" alt="Map" />
                    </Grid>
                    <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="../../contact.svg" alt="Map" />
                    </Grid>
                    <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="../../announcement.svg" alt="Map" />
                    </Grid>
                    <Grid item md={1}> </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', flexDirection: 'row', mt: '1%' }}>
                    <Grid item md={5} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>
                    <Grid item md={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                            <Typography sx={{ fontSize: '1em', fontFamily: 'Jost-700' }}> Location </Typography>
                        </Box>

                        {/* {Mobile View} */}

                        <Box sx={{ display: { md: 'none', xs: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '1em', fontFamily: 'Jost-700' }}> Location </Typography>
                            <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', fontFamily: 'Jost-400' }}> Ahmedabad, India </Typography>
                            <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', fontFamily: 'Jost-400' }}> Toronto, Canada </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                            <Typography sx={{ fontSize: '1em', fontFamily: 'Jost-700' }}> Contact us </Typography>
                        </Box>

                        {/* {Mobile View} */}
                        <Box sx={{ display: { md: 'none', xs: 'flex' }, flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                            <Typography sx={{ fontSize: '1em', fontFamily: 'Jost-700' }}> Contact us </Typography>
                            <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', fontFamily: 'Jost-400' }}> saptservices@gmail.com </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={2} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                            <Typography sx={{ fontSize: '1em', fontFamily: 'Jost-700' }}> Follow us </Typography>
                        </Box>

                        {/* {Mobile View} */}
                        <Box sx={{ display: { md: 'none', xs: 'flex' }, flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                            <Typography sx={{ fontSize: '1em', fontFamily: 'Jost-700' }}> Follow us </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                                <Box>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src="../../facebook.svg" alt="Map" />
                                    </a>
                                </Box>
                                <Box sx={{ ml: 1 }}>
                                    <a href="https://www.linkedin.com/company/saptsolutions/about/" target="_blank" rel="noopener noreferrer">
                                        <img src="../../linkedIn.svg" alt="Map" />
                                    </a>
                                </Box>
                                <Box sx={{ ml: 1 }}>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <img src="../../twitter.svg" alt="Map" />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={1}> </Grid>
                </Grid>

                <Grid container sx={{ display: 'flex', flexDirection: 'row', mt: '1%' }}>
                    <Grid item md={1}></Grid>
                    <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }}>

                        <Typography sx={{ p: '0 1', color: '#1B1B1B', fontSize: { lg: '0.75em', md: '0.60em' }, fontFamily: 'RammettoOne', width: '100%', textAlign: 'center', textAlignLast: 'justify' }}>
                            We pride ourselves on our extensive <br />
                        </Typography>
                        <Typography sx={{ p: '0 1', color: '#1B1B1B', fontSize: { lg: '0.75em', md: '0.60em' }, fontFamily: 'RammettoOne', width: '100%', textAlign: 'center', textAlignLast: 'justify' }}>
                            experience with leading industry technologies  <br />
                        </Typography>
                        <Typography sx={{ p: '0 1', color: '#1B1B1B', fontSize: { lg: '0.75em', md: '0.60em' }, fontFamily: 'RammettoOne', width: '100%', wordSpacing: '12px' }}>
                            like unreal engine and unity
                        </Typography>


                    </Grid>
                    <Grid item md={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', fontFamily: 'Jost-400' }}> Ahmedabad, India </Typography>
                        <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', m: 1, fontFamily: 'Jost-400' }}> Toronto, Canada </Typography>
                    </Grid>
                    <Grid item md={2} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ color: '#4D69FF', fontSize: '0.90em', fontFamily: 'Jost-400' }}> saptsolution@gmail.com </Typography>
                    </Grid>
                    <Grid item md={2} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'center' }}>
                        <Box>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="../../facebook.svg" alt="Map" />
                            </a>
                        </Box>
                        <Box sx={{ ml: 1 }}>
                            <a href="https://www.linkedin.com/company/saptsolutions/about/" target="_blank" rel="noopener noreferrer">
                                <img src="../../linkedIn.svg" alt="Map" />
                            </a>
                        </Box>
                        <Box sx={{ ml: 1 }}>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="../../twitter.svg" alt="Map" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item md={1}> </Grid>
                </Grid>

                <Box height={50} />

                <Grid container sx={{ display: 'flex', flexDirection: 'row', mt: '1%' }}>
                    <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} />
                    <Grid item md={4} xs={12} sx={{ fontSize: '0.70em', fontFamily: 'Jost', letterSpacing: '3%', display: { xs: 'flex', md: 'block' }, justifyContent: { xs: 'center' } }}>
                        COPYRIGHT © 2024 SAPT SOLUTIONS
                    </Grid>
                    <Grid item md={7} sx={{ display: { xs: 'none', md: 'block' } }} />
                </Grid>

                <Box height={20} />
            </Paper>
        </>
    )
}

export default Footer;