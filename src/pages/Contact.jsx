import { CenterFocusStrong, Email, SmartButtonRounded } from '@mui/icons-material';
import { Grid, TextField, Typography, Box, Paper } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        // Scroll to the top of the page whenever the route changes
        window.scrollTo(0, 0);
        emailjs.init('jHqKVeq_8LHeo8WEr')
    }, []);

    const [open, setOpen] = useState(false);
    const [notificationData, setNotificationData] = useState({
        text: '',
        severity: 'success'
    });

    const reCaptchaRef = useRef();

    const [emailError, setEmailError] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await reCaptchaRef.current.executeAsync();
        if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address');
            setFormData({
                ...formData,
                ['email']: ''
            });
            return;
        }
        emailjs.send('service_glk32jd', 'template_t9j2c4p',
            { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message, 'g-recaptcha-response': token })
            .then((result) => {
                console.log(result.text);
                console.log(formData.email + "Email ID");
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setOpen(true);
                reCaptchaRef.current.reset();
                /* setNotificationData({
                    text: 'We have received your idea!',
                    severity: 'success'
                }); */
            }, (error) => {
                console.log(error.text);
                setOpen(true);
                reCaptchaRef.current.reset();
                setNotificationData({
                    text: 'Something went wrong!',
                    severity: 'error'
                });
            });
    };

    return (
        <>
            <Box height={50} sx={{ backgroundColor: "#E9E6E2" }} />
            <Grid container justify="center" alignItems="center" sx={{ display: "flex", flexDirection: "row" }}>
                <Grid item md={3}></Grid>
                <Grid item md={6} sx={{ display: "flex", flexDirection: "column", }}>
                    <Grid textAlign={"center"}>
                        <Typography sx={{ color: '#4D69FF', fontSize: '5rem', fontFamily: 'RammettoOne' }}>
                            Say hi !
                        </Typography>
                        <Typography sx={{ color: '#FFFFF', fontSize: '1rem', fontFamily: 'Jost-400' }}>
                            Our doors are always open for you!
                        </Typography>
                    </Grid>
                        <br />
                        <form>
                            <Typography sx={{ color: '#FFFFF', fontSize: '1rem', fontFamily: 'RammettoOne' }}>
                                I am
                                <TextField variant="standard"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    sx={{ mt: 2 }} />
                                <br /><br />
                                My email is
                                <TextField
                                    variant="standard"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    error={!!emailError}
                                    helperText={emailError} />
                                <br /><br />
                                and here is my message:
                            </Typography>
                            <br />
                            <TextField
                                variant="outlined"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                                sx={{ mt: 2 }} />

                            <Box textAlign="right" sx={{ mt: 2 }}>
                                <Button onClick={handleSubmit}
                                    variant="contained"
                                    disabled={!formData.name || !formData.email || !formData.message}
                                    sx={{ backgroundColor: '#4D69FF', color: 'white', borderRadius: '30px', fontSize: '1em', fontFamily: 'Jost-700', width: '150px', height: '40px' }}>
                                    Submit </Button>
                            </Box>
                            <ReCAPTCHA
                                sitekey="6Lep3V0pAAAAACf8CQVC_FchKud5jJ3MQUIuayrx"
                                size="invisible"
                                ref={reCaptchaRef}
                            />
                        </form>
                    
                </Grid>
                <Grid item md={3}></Grid>
            </Grid>
        </>
    )
}

export default Contact;