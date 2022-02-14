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
            m: 0,
            display: 'columns',
            bgcolor: 'rgba(66,163,255,0.2)',
            border: 1,
            borderRadius: 4,
            borderColor: '#52A8FB',
        }}>
            <Typography elevation={1} mt={1} mb={1} sx={{
                textAlign: 'center',
                fontSize: {xs: 15, md: 18},
                color: '#e4f2ff',
            }}>
                Born on a small island in North Texas, I'm very familiar with island lingo, like, beach, for example. I'd rather not discuss my heritage here though. Perhaps another time, in another life, when we are both cats. The truth is, I've spent so much time trying to make this website do what I want it to do that after reading the instructions/requirements. It doesn't really say that I need to fill this in with an actual about me. So I took the opportunity to fill in enough text for it to look like a small bio about mightself. There, that looks about right.
            </Typography>

        </Paper>
    </Box>
);


export default function Home() {

    return (

        <Grid container spacing={2} sx={{
            padding: { xs: 4, md: 6, lg:8},
            alignItems: 'center',
            mixWidth: 375, 
            }} >
                <Grid item xs={2} md={2} lg={2}></Grid>
            <Grid item xs={8} md={4} lg={2}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1000 } : {})}>
                    <CardMedia
                    component="img"
                    alt="Me"
                    image={Me} sx={{
                        
                        display: { xs: 'flex', md: 'flex', lg:'flex' },
                        bgcolor: '#000000',
                        color: '#000000',
                    }}>
                 </CardMedia>
                </Grow>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1500 } : {})}>{bio}</Grow>
            </Grid>
            <Grid item xs={2} md={0} lg={2}></Grid>
        </Grid>

    );
}