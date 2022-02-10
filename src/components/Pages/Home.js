import * as React from 'react';
import Container from '@mui/material/Container';
import { styled, alpha } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import Me from '../../static/images/Me.jpg';

const bio = (
    <Paper sx={{ m: 1,
        marginRight: 3,
        width: 800,
        height:600,
        bgcolor: 'rgba(66,163,255,0.2)',
        border: 1,
        borderColor: '#52A8FB',
     }} elevation={4}>
         <Typography sx={{
             margin: 3,
             color: '#e4f2ff',

         }}>
         Born on a small island in North Texas, I'm very familiar with island lingo, like, beach, for example. I'd rather not discuss my heritage here though. Perhaps another time, in another life, when we are both cats. The truth is, I've spent so much time trying to make this website do what I want it to do that after reading the instructions/requirements. It doesn't really say that I need to fill this in with an actual about me. So I took the opportunity to fill in enough text for it to look like a small bio about mightself. There, that looks about right. 
         </Typography>
      
    </Paper>
  );

  const profile = (
    <Paper sx={{
        height: 300,
        width: 300,
        backgroundImage: {Me},
     }}>
        <img src={Me} alt="me"/>
    </Paper>
  );

export default function Home() {

    return (
        
            <Container sx={{
                padding: 0,
                display: 'flex',
                fontSize: 48,
                color: 'theme.palette.primary.main',
            }}>
                <Zoom in={true}>{bio}</Zoom>

                <Zoom in={true} style={{ transitionDelay: true ? '500ms' : '0ms'}}>{profile}</Zoom>
               
            </Container>
            
      
    ); 
}