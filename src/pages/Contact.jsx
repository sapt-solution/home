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
        emailjs.send('service_5l77ejc', 'template_contact_form',
            { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message, 'g-recaptcha-response': token })
            .then((result) => {
                console.log(result.text);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setOpen(true);
                reCaptchaRef.current.reset();
                setNotificationData({
                    text: 'We have received your idea!',
                    severity: 'success'
                });
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
        <Grid container justify="center" alignItems="center" sx={{display:"flex", flexDirection:"row"}}>
        <Grid item md={3}></Grid>
        <Grid item md={6} alignItems="center" justifyContent={"center"} sx={{display:"flex", flexDirection:"column",}}>
        <Paper square={false} sx={{ padding: '4%', m: { xs: '5%', md: '0' } }}>
            <Typography sx={{ color: '#4D69FF', fontSize: '5rem', fontFamily: 'RammettoOne' }}>
                Say hi !
            </Typography>
            <Typography sx={{ color: '#FFFFF', fontSize: '0.7rem', fontFamily: 'Calibri' }}>
            Our doors are always open for you!    
            </Typography>
            <form>
            <Typography sx={{ color: '#FFFFF', fontSize: '1rem', fontFamily: 'RammettoOne' }}>
            I am 
            <TextField label="Name" 
                            variant="outlined" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mt: 2 }} />
            and my email is 
            <TextField label="Email"
                            variant="outlined"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mt: 2 }}
                            error={!!emailError}
                            helperText={emailError} />. 
            My subject for contacting you is 
            <TextField label="Subject" 
                            variant="outlined" 
                            name="subject" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mt: 2 }} />
            and here is my message.
            </Typography>
            <br />
            <TextField variant="outlined"
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
                                    disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                                    sx={{ backgroundColor: '#4D69FF', color: 'white', borderRadius: '30px', fontSize: '1em', fontFamily: 'Jost-700', width: '150px', height: '40px' }}>
                                    Submit </Button>
                            </Box>
            </form>
            </Paper>
            {/*</form><button color="#4D69FF" variant="contained" style={{ borderRadius: '20px', backgroundColor: '#4D69FF', color: 'white', width: '100px' }}>Send</button>*/}
        </Grid>
        <Grid item md={3}></Grid>
        </Grid>
        </>
    )
}

export default Contact;


{/*
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
    const reCaptchaRef = useRef();

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
        emailjs.send('service_5l77ejc', 'template_contact_form',
            { name: formData.name, email: formData.email, message: formData.message, 'g-recaptcha-response': token })
            .then((result) => {
                console.log(result.text);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setOpen(true);
                reCaptchaRef.current.reset();
                setNotificationData({
                    text: 'We have received your idea!',
                    severity: 'success'
                });
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
   
}

*/}