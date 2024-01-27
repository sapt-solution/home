import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Box, ImageListItem, Paper } from '@mui/material';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [open, setOpen] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [notificationData, setNotificationData] = useState({
        text: '',
        severity: 'success'
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

        if (e.target.name === 'email') {
            setEmailError('');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address');
            setFormData({
                ...formData,
                ['email']: ''
            });
            return;
        }
        emailjs.send('service_5l77ejc', 'template_contact_form', { name: formData.name, email: formData.email, message: formData.message })
            .then((result) => {
                console.log(result.text);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setOpen(true);
                setNotificationData({
                    text: 'We have received your idea!',
                    severity: 'success'
                });
            }, (error) => {
                console.log(error.text);
                setOpen(true);
                setNotificationData({
                    text: 'Something went wrong!',
                    severity: 'error'
                });
            });
    };
    return (
        <>
            <Box height={50} sx={{ backgroundColor: "#E9E6E2" }} />
            <Grid container justify="center" alignItems="center" sx={{ display: 'flex', flexDirection: 'row', backgroundColor: "#E9E6E2" }}>
                <Grid item md={1.5} sx={{ xs: 'none', md: 'block' }} />
                <Grid item md={1} />
                <Grid item md={7} xs={12}>
                    <Paper square={false} sx={{ padding: '4%', m: { xs: '5%', md: '0' } }}>
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
                                required
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <TextField
                                label="Email"
                                variant="outlined"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                sx={{ mt: 2 }}
                                error={!!emailError}
                                helperText={emailError}
                            />

                            <TextField
                                label="Tell Us Your Idea!"
                                variant="outlined"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                                sx={{ mt: 2 }}
                            />
                            <Box textAlign="right" sx={{ mt: 2 }}>
                                <Button onClick={handleSubmit}
                                    variant="contained"
                                    disabled={!formData.name || !formData.email || !formData.message}
                                    sx={{ backgroundColor: '#4D69FF', color: 'white', borderRadius: '30px', fontSize: '1em', fontFamily: 'Jost-700', width: '150px', height: '40px' }}>
                                    Submit </Button>
                            </Box>

                            {notificationData &&

                                <Snackbar
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    open={open}
                                    autoHideDuration={5000}
                                    onClose={handleClose}
                                >
                                    <Alert onClose={handleClose} severity={notificationData.severity}>
                                        {notificationData.text}
                                    </Alert>
                                </Snackbar>
                            }
                        </form>
                    </Paper>
                </Grid>
                <Grid item md={1} />
                <Grid item md={1.5} sx={{ xs: 'none', md: 'block' }} />

            </Grid>
            <Box height={50} sx={{ backgroundColor: "#E9E6E2" }} />
        </>
    )
}

export default Contact;