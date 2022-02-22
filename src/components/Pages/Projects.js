import * as React from 'react';

import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// Images
import passPic from '../../static/images/passGen.jpg';
import herfQuiz from '../../static/images/herfQuiz.jpg';
import docHub from '../../static/images/docHub.jpg';



// color: '#14ffaf',
const proDescriptionA = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: { xs: 12, md: 18, },
    }}>Author: Gabe L'Herault
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: { xs: 12, md: 18, },
    }}>Written in Javascript, Password Generator is a simple app used to create customized safe passwords from parameters chosen by the user.
    </Typography>
  </Box>
);

const proDescriptionB = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: { xs: 12, md: 18, },
    }}>Author: Gabe L'Herault
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: { xs: 12, md: 18, },
    }}>Written in Javascript, Herf-Man Quiz Lord is by far the worst way you could spend several minutes of your life.
    </Typography>
  </Box>
);

const proDescriptionC = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: { xs: 12, md: 18, },
    }}>Authors: Gabe L'Herault & Thomas White
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: { xs: 12, md: 18, },
    }}>A React application using MUI, currently a work in progress that will allow users to view, rate and revise technical documentation.
    </Typography>
  </Box>
);

export default function Projects() {


  const [checked, setChecked] = React.useState(false);
  const [franked, setFranked] = React.useState(false);
  const [tom, setTom] = React.useState(false);

  const [display, setDisplay] = React.useState('none');
  const [herfdisplay, setHerf] = React.useState('none');
  const [docdisplay, setDoc] = React.useState('none');



  const passwordDisplayChange = () => {
    if (display === 'none') {
      setDisplay('flex');
      showOne();
    } if (display === 'flex') {
      showOne();
      setDisplay('none');
    }
  };

  const herfDisplayChange = () => {
    if (herfdisplay === 'none') {
      setHerf('flex');
      showTwo();
    } if (herfdisplay === 'flex') {
      showTwo();
      setHerf('none');
    }
  };

  const docDisplayChange = () => {
    if (docdisplay === 'none') {
      setDoc('flex');
      showThree();
    } if (docdisplay === 'flex') {
      showThree();
      setDoc('none');
    }
  };

  const showOne = () => {
    setChecked((prev) => !prev);
  };

  const showTwo = () => {
    setFranked((prev) => !prev);
  };

  const showThree = () => {
    setTom((prev) => !prev);
  };


  return (
    <Box sx={{ flexGrow: 1, }}>
      <Grid container sx={{
        display: 'flex',
        spacing: { xs: 2, md: 4 },
        padding: { xs: 0, md: 4 },
        mixWidth: 375,
      }}>
        <Grid item xs={12} md={4}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1000 } : {})}>
            <Card sx={{
              maxWidth: { xs: 400, md: 500 },
              bgcolor: 'rgba(82,168,251,0.00)',
              display: 'flex'
            }}>
              <CardMedia component="img"
                alt="herfman"
                image={herfQuiz} sx={{
                  display: { xs: 'flex', md: 'flex' },
                  maxWidth: { xs: 125, md: 150, lg: 200 },
                  maxHeight: { xs: 125, md: 150, lg: 200 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: 18, md: 32, },
                  color: '#14ffaf',
                }}>
                  Herf-Man Quiz Lord
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: 12, md: 18, },
                  color: '#48b0ff',
                }}>
                  This Meme of an application really cranks up the cringe
                </Typography>
                <CardActions>
                  <Button size="small" variant="outlined" href="https://github.com/SherlockTheHomie/HerfQuiz" sx={{ color: '#e3ef30', marginRight: 1, }}>
                    Visit Repo
                  </Button>
                  <Button size="small" variant="outlined" onClick={herfDisplayChange} sx={{ color: '#e3ef30' }}>
                    More
                  </Button>
                </CardActions>

              </CardContent>
            </Card>
          </Grow>
          <Card sx={{
            maxWidth: { xs: 400, md: 500 },
            bgcolor: 'rgba(82,168,251,0.00)',
            display: herfdisplay,
            flexDirection: 'row',
            padding: 1,
          }}>
            <Grow in={franked} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(franked ? { timeout: 2000 } : {})}>
              <Button href="https://sherlockthehomie.github.io/HerfQuiz/" size="small" variant="outlined" sx={{
                margin: 1,
                height: 50,
                color: '#38ef30',
                borderColor: '#38ef30',
              }}>Open</Button>
            </Grow>
            <Grow in={franked} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(franked ? { timeout: 2500 } : {})}>
              {proDescriptionB}
            </Grow>
          </Card>
        </Grid>


        <Grid item xs={12} md={4}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 2000 } : {})}>
            <Card sx={{
              maxWidth: { xs: 400, md: 500 },
              bgcolor: 'rgba(82,168,251,0.00)',
              display: 'flex'
            }}>
              <CardMedia component="img"
                alt="green iguana"
                image={docHub} sx={{
                  display: { xs: 'flex', md: 'flex' },
                  maxWidth: { xs: 125, md: 150, lg: 200 },
                  maxHeight: { xs: 125, md: 150, lg: 200 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: 18, md: 32, },
                  color: '#14ffaf',
                }}>
                  Documentation Hub
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: 12, md: 18, },
                  color: '#48b0ff',
                }}>
                  Rate, review and revise documentation. Current WIP
                </Typography>
                <CardActions>
                  <Button size="small" variant="outlined" href="https://github.com/T0mWhite/dochub" sx={{ color: '#e3ef30', marginRight: 1, }}>
                    Visit Repo
                  </Button>
                  <Button size="small" variant="outlined" onClick={docDisplayChange} sx={{ color: '#e3ef30' }}>
                    More
                  </Button>
                </CardActions>

              </CardContent>
            </Card>
          </Grow>
          <Card sx={{
            maxWidth: { xs: 400, md: 500 },
            bgcolor: 'rgba(82,168,251,0.00)',
            display: docdisplay,
            flexDirection: 'row',
            padding: 1,
          }}>
            <Grow in={tom} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(tom ? { timeout: 2000 } : {})}>
              <Button href="https://documentationhub.herokuapp.com/" size="small" variant="outlined" sx={{
                margin: 1,
                height: 50,
                color: '#38ef30',
                borderColor: '#38ef30',
              }}>Open</Button>
            </Grow>
            <Grow in={tom} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(tom ? { timeout: 2500 } : {})}>
              {proDescriptionC}
            </Grow>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout:3000 } : {})}>
            <Card sx={{
              maxWidth: { xs: 400, md: 500 },
              bgcolor: 'rgba(82,168,251,0.00)',
              display: 'flex'
            }}>
              <CardMedia component="img"
                alt="green iguana"
                image={passPic} sx={{
                  display: { xs: 'flex', md: 'flex' },
                  maxWidth: { xs: 125, md: 150, lg: 200 },
                  maxHeight: { xs: 125, md: 150, lg: 200 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: 18, md: 32, },
                  color: '#14ffaf',
                }}>
                  Password Generator
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: 12, md: 18, },
                  color: '#48b0ff',
                }}>
                  Generate custom secure passwords
                </Typography>
                <CardActions>
                  <Button size="small" variant="outlined" href="https://github.com/SherlockTheHomie/Password-Gen" sx={{ color: '#e3ef30', marginRight: 1, }}>
                    Visit Repo
                  </Button>
                  <Button size="small" variant="outlined" onClick={passwordDisplayChange} sx={{ color: '#e3ef30' }}>
                    More
                  </Button>
                </CardActions>

              </CardContent>
            </Card>
          </Grow>
          <Card sx={{
            maxWidth: { xs: 400, md: 500 },
            bgcolor: 'rgba(82,168,251,0.00)',
            display: display,
            flexDirection: 'row',
            padding: 1,
          }}>
            <Grow in={checked} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(checked ? { timeout: 2000 } : {})}>
              <Button href="https://sherlockthehomie.github.io/Password-Gen/" size="small" variant="outlined" sx={{
                margin: 1,
                height: 50,
                color: '#38ef30',
                borderColor: '#38ef30',
              }}>Open</Button>
            </Grow>
            <Grow in={checked} sx={{ fontSize: 12 }} style={{ transformOrigin: '0 0 0' }}{...(checked ? { timeout: 2500 } : {})}>
              {proDescriptionA}
            </Grow>
          </Card>
        </Grid>
{/* new projects here */}
      </Grid>
    </Box>
  );
}