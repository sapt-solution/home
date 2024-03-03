import { CenterFocusStrong, Email, SmartButtonRounded } from '@mui/icons-material';
import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {


    return (
        <> 
        <Grid container sx={{display:"flex", flexDirection:"row"}}>
        <Grid item md={3}></Grid>
        <Grid item md={6} alignItems="center" justifyContent={"center"} sx={{display:"flex", flexDirection:"column",}}>
            <Typography sx={{ color: '#4D69FF', fontSize: '5rem', fontFamily: 'RammettoOne' }}>
                Say hi !
            </Typography>
            <Typography sx={{ color: '#FFFFF', fontSize: '0.7rem', fontFamily: 'Calibri' }}>
            Our doors are always open for you!    
            </Typography>
            <Typography sx={{ color: '#FFFFF', fontSize: '1rem', fontFamily: 'RammettoOne' }}>
            I am <TextField variant='standard'></TextField> and my email is <TextField variant='standard' required></TextField>. My subject for contacting you is <TextField variant='standard'></TextField> and here is my message.
            </Typography>
            <br />
            <TextField multiline rows={3} maxRows={5} variant='outlined' fullWidth>
            </TextField>
            <button color="#4D69FF" variant="contained" style={{ borderRadius: '20px', backgroundColor: '#4D69FF', color: 'white', width: '100px' }}>Send</button>
        </Grid>
        <Grid item md={3}></Grid>
        </Grid>
        </>
    )
}

export default Contact;