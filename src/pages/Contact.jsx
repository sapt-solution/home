import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Box, ImageListItem, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        // Scroll to the top of the page whenever the route changes
        window.scrollTo(0, 0);
        emailjs.init('uMjNpb0Vfb5R8ZIv_')
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_5l77ejc', 'template_contact_form', {name: formData.name, email: formData.email, message: formData.message})
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <Box height={50} sx={{ backgroundColor: "#E9E6E2" }} />
            <Grid container justify="center" alignItems="center" sx={{ display: 'flex', flexDirection: 'row', backgroundColor: "#E9E6E2" }}>
                <Grid item md={1} sx={{ xs: 'none', md: 'block' }} />
                <Grid item md={4} xs={12} sx={{ display: { xs: 'flex', md: 'block' }, "justifyContent": { xs: 'center', md: 'normal' } }}>
                    <ImageListItem sx={{ maxHeight: { xs: '50%', md: '100%' }, maxWidth: { xs: '50%', md: '100%' } }}>
                        <img src="../../coffee.svg" />
                    </ImageListItem>

                </Grid>
                <Grid item md={0.5} sx={{ xs: 'none', md: 'block' }} />
                <Grid item md={5} xs={12}>
                    <Paper elevation={3} sx={{ padding: '4%', m: { xs: '5%', md: '0' } }}>
                        <Typography variant="h6" gutterBottom sx={{ pt: '7%', fontFamily: 'RammettoOne' }}>
                            SIP. CHAT. CONNECT
                        </Typography>
                        <Typography variant="body1" sx={{ fontFamily: 'Jost' }} gutterBottom>
                            Elevate Your Brand With Us
                        </Typography>
                        <form>
                            <TextField
                                label="Name"
                                variant="outlined"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <TextField
                                label="Email"
                                variant="outlined"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <TextField
                                label="Tell Us Your Idea!"
                                variant="outlined"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                                sx={{ mt: 2 }}
                            />
                            <Box textAlign="right" sx={{ mt: 2 }}>
                                <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: '#4D69FF', color: 'white', borderRadius: '30px', fontSize: '1em', fontFamily: 'Jost-700', width: '150px', height: '40px' }}> Submit </Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
                <Grid item md={1.5} sx={{ xs: 'none', md: 'block' }} />

            </Grid>
            <Box height={50} sx={{ backgroundColor: "#E9E6E2" }} />
        </>
    )
}

export default Contact;