import * as React from 'react';
import Container from '@mui/material/Container';
import { styled, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Badge from '../../static/images/SMUbadge.png';
import meAgain from '../../static/images/mebnw.jpg';


export default function About() {
  return (
    
    <Grid container spacing={2} sx={{
      padding: { xs: 4, md: 6, lg: 8 },
      alignItems: 'center',
      mixWidth: 375,
    }} >
      
      <Grid item xs={4} md={6} lg={6}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1000 } : {})}>
      <CardMedia component="img"
                alt="Gabe Smiling"
                image={meAgain} sx={{
                  margin: 1,
                  borderRadius: 4,
                  display: { xs: 'flex', md: 'flex', lg: 'flex' },
                  maxWidth: { xs: 125, md: 150, lg: 300 },
                  maxHeight: { xs: 125, md: 150, lg: 300 },
                }}>
          </CardMedia>
      </Grow>
      </Grid>
      <Grid item xs={8} md={6} lg={6}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 2000 } : {})}>
      <Typography variant="h6" sx={{
            margin: 1,
            display: 'flexbox',
            textAlign: 'left',
            color: '#00FFFF',
          }}>
          Who is me?
          </Typography>
      </Grow>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 3000 } : {})}>
        <Paper elevation={1} sx={{
          m: 0,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'rows',
          bgcolor: 'rgba(66,163,255,0.2)',
          border: 1,
          borderRadius: 4,
          borderColor: '#52A8FB',
        }}>
          <Typography variant="body1" sx={{
            margin: 1,
            width: 'inherit',
            display: 'flex',
            textAlign: 'center',
            fontSize: '1.0rem',
            color: '#e4f2ff',
          }}>
            Born in Madison, Wisconsin. I spent my youth shoveling sidewalks, making music and learning how to edit pc games. In Highschool, I played stand up bass in the orchestra and learned a little C+ but still spent most of my time making music. After High School, I attended a Recording and Production school in Minneapolis and spent the next ten years as a singer, songwriter, rapper, producer and recording engineer while doing some graphic design and video editing in my spare time. After 4 albums and a lot of shows and a rollercoaster of income, while my 30s were on the horizon, I started to sense I needed to find a stable career. After moving down to Plano, Texas, I got into social media marketing, sharpened my content creation skills and collaborated on a few projects with a good friend of mine who taught me a lot about tech start ups and agile development. After focusing more on UI and UX design, I started to crave the code. So I attended a Full Stack Web Development bootcamp through SMU... and here we are.
          </Typography>
        </Paper>
        
        </Grow>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 4000 } : {})}>
        <Card sx={{ 
        bgcolor: 'rgba(82,168,251,0.00)',
        display: 'flex',
        flexDirection: 'column' }}>
          <CardMedia
            component="img"
            height="250"
            width="auto"
            image={Badge}
            alt="SMU Badge"
            sx={{
              display: { xs: 'flex', md: 'flex' },
              width: { xs: 100, md: 125, lg: 150 },
              height: { xs: 100, md: 125, lg: 150 },
            }}
          />
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grow>
      </Grid>

    </Grid>
  );
}