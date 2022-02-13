import * as React from 'react';
import Container from '@mui/material/Container';
import { styled, alpha } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Me from '../../static/images/Me.jpg';

const bio = (
    <Box sx={{ display: 'flex', flexGrow: 1, }}>
        <Paper elevation={0} sx={{
            m: 1,
            display: 'columns',
            bgcolor: 'rgba(66,163,255,0.2)',
            border: 1,
            borderRadius: 4,
            borderColor: '#52A8FB',
            flexGrow: 1,
        }}>
            <Typography elevation={1} mt={2} sx={{
                textAlign: 'center',
                fontSize: 18,
                margin: 5,
                color: '#e4f2ff',
            }}>
                Born on a small island in North Texas, I'm very familiar with island lingo, like, beach, for example. I'd rather not discuss my heritage here though. Perhaps another time, in another life, when we are both cats. The truth is, I've spent so much time trying to make this website do what I want it to do that after reading the instructions/requirements. It doesn't really say that I need to fill this in with an actual about me. So I took the opportunity to fill in enough text for it to look like a small bio about mightself. There, that looks about right.
            </Typography>

        </Paper>
    </Box>
);


export default function Home() {

    return (

        <Grid container spacing={2} padding={8} sx={{ 
            alignItems: 'center', 
            }} >
                <Grid item xs={0} md={2}></Grid>
            <Grid item xs={12} md={2}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1500 } : {})}>
                    <CardMedia
                    component="img"
                    alt="Me"
                    image={Me} sx={{
                        
                        display: { xs: 'flex', md: 'flex' },
                        bgcolor: '#000000',
                        color: '#000000',
                    }}>
                 </CardMedia>
                </Grow>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1000 } : {})}>{bio}</Grow>
            </Grid>
            <Grid item xs={0} md={2}></Grid>
        </Grid>

    );
}