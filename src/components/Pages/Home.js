import * as React from 'react';
import Container from '@mui/material/Container';
import { styled, alpha } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Me from '../../static/images/Me.jpg';

const blurb = (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
        <Paper elevation={0} sx={{
            m: 0,
            display: 'flex',
            padding: 1,
            bgcolor: 'rgba(66,163,255,0.2)',
            border: 0,
            alignItems: 'center',
            borderRadius: 4,
            borderColor: '#00FFFF',
        }}>
            <Typography elevation={1} mt={1} mb={1} sx={{
                textAlign: 'center',
                fontSize: { xs: 15, md: 18, lg: 18 },
                color: '#e4f2ff',
            }}>
                Please, make yourself at home. We have a plate of assorted cheese and crackers on the table in the about page. You can hang your coat up on the contact page and enjoy the entertainment in the projects page. I'm glad you made it. Say hi to everyone for me.
            </Typography>

        </Paper>
    </Box>
);


export default function Home() {

    return (

        <Grid container spacing={2} sx={{
            padding: { xs: 2, md: 4, lg: 6 },
            justifyContent: 'center',
            flexDirection: 'rows',
            alignContent: 'center',
            mixWidth: 375,
        }} >
            <Grid item xs={8} md={12} lg={2}>
                <Grow in={true}  style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1000 } : {})}>
                    <CardMedia
                        component="img"
                        alt="Me"
                        image={Me} sx={{
                            maxHeight: 300,
                            maxWidth: 300,
                            display: { xs: 'flex', md: 'flex', lg: 'flex' },
                            bgcolor: '#000000',
                            color: '#000000',
                        }}>
                    </CardMedia>
                </Grow>
            </Grid>
            <Grid item xs={12} md={6} lg={12} padding={0}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1500 } : {})}>
                    <Typography elevation={1} mt={0} mb={0} sx={{
                        textAlign: 'center',
                        fontFamily: 'sans-serif',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: '#346eff',
                    }}>
                        FULL-STACK DEVELOPMENT
                    </Typography>
                </Grow>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1750 } : {})}>
                    <Typography elevation={1} mt={-1} mb={0} sx={{
                        textAlign: 'center',
                        fontFamily: 'sans-serif',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: '#346eff',
                    }}>
                        FRONT-END FOCUSED
                    </Typography>
                </Grow>
            </Grid>
            
            <Grid item xs={12} md={6} lg={6}>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 2000 } : {})}>{blurb}</Grow>
            </Grid>
        </Grid>

    );
}