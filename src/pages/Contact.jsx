import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { Grid, Box, Radio, RadioGroup, FormControlLabel, Paper } from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        preferredCommunication: '',
        requirements: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };
    return (
        <>
        <Box height={50} sx= {{ backgroundColor: "#E9E6E2"}}/>
        <Grid container justify="center" alignItems="center" sx={{ display: 'flex', flexDirection: 'row', backgroundColor: "#E9E6E2" }}>
            <Grid item md={0.5} />
            <Grid item md={4}>
                <img src="../../img.png" style={{ maxHeight: '100%', maxWidth: '100%'}}/>
            </Grid>
            <Grid item md={1}/>
            <Grid item md={5}>
                <Paper elevation={5} sx= {{padding: '4%'}}>
                    <Typography variant="h4" gutterBottom sx={{pt: '7%', fontFamily: 'RammettoOne'}}>
                        Partner With Us
                    </Typography>
                    <Typography variant="body1" sx={{fontFamily: 'Jost'}} gutterBottom>
                        Elevate Your Brand
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <FormControl component="fieldset" fullWidth margin="normal">
                            <Typography variant="subtitle1">Preferred Communication</Typography>
                            <RadioGroup
                                row
                                name="preferredCommunication"
                                value={formData.preferredCommunication}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="email" control={<Radio />} label="Email" />
                                <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                                <FormControlLabel value="both" control={<Radio />} label="Both" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            label="Share Requirements"
                            variant="outlined"
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                        />
                        <Box textAlign="right">
                            <Button variant="contained" sx={{ backgroundColor: '#4D69FF', color: 'white', borderRadius: '30px', fontSize: '0.7em', fontFamily: 'Jost-600', width: '150px', height: '40px' }}> Submit </Button>
                        </Box>
                    </form>
                </Paper>
            </Grid>
            <Grid item md={1.5} />

        </Grid>
        <Box height={50} sx= {{ backgroundColor: "#E9E6E2"}}/>
        </>
    )
}

export default Contact;