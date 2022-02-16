import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Badge from '../../static/images/SMUbadge.png';


export default function About() {
  return (
    
    <Grid container spacing={2} sx={{
      padding: { xs: 4, md: 4, },
      alignItems: 'center',
      mixWidth: 375,
    }} >
      
      <Grid item xs={12} md={6} lg={6}>
      <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1000 } : {})}>
        <Box sx={{ display: 'flex', flexGrow: 1, }}>
        <Paper elevation={0} sx={{
          m: 0,
          flexGrow: 1,
          display: 'columns',
          bgcolor: 'rgba(66,163,255,0.2)',
          border: 1,
          borderRadius: 4,
          borderColor: '#52A8FB',
        }}>
          <Typography elevation={1} mt={1} mb={1} sx={{
            textAlign: 'center',
            fontSize: { xs: 15, md: 18 },
            color: '#e4f2ff',
          }}>
            Born in Madison, Wisconsin. I spent my youth shoveling sidewalks, making music and learning how to edit pc games. In Highschool, I played stand up bass in the orchestra and learned a little C+ but still spent most of my time making music. After I graduated from Verona Area High School, I spent a couple of years working with local Hip Hop artists and found myself looking for a change of scenery. After moving to Minnesota and attending IPR, I found it. The vibrant Hip-Hop scene was welcoming and competitive. It was exactly what I needed. I started writing songs, singing, rapping and producing beats under the name "The Cardboard Man". I collaborated with some very talented people, engineered a few side projects and spent the next 7-8 years letting out a lot of creative energy which led to the release of 4 albums. As soon as my 30s were on the horizon, I started to sense I needed to change some things. I needed to find a stable career. Throughout this time I had spent a lot of it sharpening skills I didn't realize were valuable, more specifically, Graphic Design and Video Editing. When I hit 30 and moved to Texas, I found myself falling into Social Media Marketing and content production. One thing led to another and before I knew it, I was doing things I enjoyed and was getting paid for it. After that first year I started building websites. First for myself, then, for clients. Then I was helping a small marketing firm and with a good friend of mine, learning about UI design, UX design and AGILE development.
          </Typography>

        </Paper>
        </Box>
        </Grow>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card sx={{ 
        width: 500,
        height: 350,
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
              width: { xs: 125, md: 150, lg: 200 },
              height: { xs: 125, md: 250, lg: 200 },
            }}
          />
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

    </Grid>
  );
}