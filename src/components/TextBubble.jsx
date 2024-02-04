import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { width } from '@mui/system';

const TextBubble = ({ text, opacity=0.8, fontFamily="Jost-700" }) => {

  return (
    <Paper sx={{
      padding: 1,
      display: 'inline-flex',
      borderRadius: 8,
      backgroundColor: `rgba(77, 105, 255, ${opacity})`,
      color: 'white',
      alignItems: 'center',
      wordWrap: 'break-word'
    }}
    elevation={3}>
      <Typography variant="body2" sx = {{ fontFamily: fontFamily }}>{text}</Typography> </Paper>
  );
};

export default TextBubble;
