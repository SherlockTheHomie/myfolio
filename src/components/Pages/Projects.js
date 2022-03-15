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
import dateNite from '../../static/images/datenite.jpg';
import weChill from '../../static/images/weChill.jpg';
import readYou from '../../static/images/readyou.jpg';



// color: '#14ffaf',
const proDescriptionA = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: '.80rem',
    }}>Author: Gabe L'Herault
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: '.70rem',
    }}>Written in Javascript, Password Generator is a simple app used to create customized safe passwords from parameters chosen by the user.
    </Typography>
  </Box>
);

const proDescriptionB = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: '.80rem',
    }}>Author: Gabe L'Herault
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: '.70rem',
    }}>Written in Javascript, Herf-Man Quiz Lord is by far the worst way you could spend several minutes of your life.
    </Typography>
  </Box>
);

const proDescriptionC = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: '.80rem',
    }}>Authors: Gabe L'Herault & Thomas White
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: '.70rem',
    }}>A React application using MUI, currently a work in progress that will allow users to view, rate and revise technical documentation.
    </Typography>
  </Box>
);

const proDescriptionD = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: '.80rem',
    }}>Authors: Gabe L'Herault
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: '.70rem',
    }}>Refactored from a group project from my SMU bootcamp made with Jason Day and Stephanie Sanders. This refactor uses React and MUI and utilizes API's to generate some very bad combinations for the evening.
    </Typography>
  </Box>
);

const proDescriptionE = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: '.80rem',
    }}>Authors: Gabe L'Herault
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: '.70rem',
    }}>We chill is my personal project I started to learn Firebase and implement a realtime chat feature. Still a work in progress but I'm getting there.
    </Typography>
  </Box>
);

const proDescriptionF = (
  <Box>
    <Typography sx={{
      color: '#48b0ff',
      fontSize: '.80rem',
    }}>Authors: Gabe L'Herault
    </Typography>
    <Typography sx={{
      color: '#e4f2ff',
      fontSize: '.70rem',
    }}>READYou - The Readme Generator is a command line prompt, that asks the users a series of questions about their application and then generates a readme based on their response.
    </Typography>
  </Box>
);

export default function Projects() {


  const [checked, setChecked] = React.useState(false);
  const [franked, setFranked] = React.useState(false);
  const [tom, setTom] = React.useState(false);
  const [date, setDate] = React.useState(false);
  const [chill, setChill] = React.useState(false);
  const [read, setRead] = React.useState(false);

  const [display, setDisplay] = React.useState('none');
  const [herfdisplay, setHerf] = React.useState('none');
  const [docdisplay, setDoc] = React.useState('none');
  const [dateDisplay, setDateDisplay] = React.useState('none');
  const [chillDisplay, setChillDisplay] = React.useState('none');
  const [readDisplay, setReadDisplay] = React.useState('none');



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

  const dateDisplayChange = () => {
    if (dateDisplay === 'none') {
      setDateDisplay('flex');
      showFour();
    } if (dateDisplay === 'flex') {
      showFour();
      setDateDisplay('none');
    }
  };

  const chillDisplayChange = () => {
    if (chillDisplay === 'none') {
      setChillDisplay('flex');
      showFive();
    } if (chillDisplay === 'flex') {
      showFive();
      setChillDisplay('none');
    }
  };

  const readDisplayChange = () => {
    if (readDisplay === 'none') {
      setReadDisplay('flex');
      showSix();
    } if (readDisplay === 'flex') {
      showSix();
      setReadDisplay('none');
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

  const showFour = () => {
    setDate((prev) => !prev);
  };

  const showFive = () => {
    setChill((prev) => !prev);
  };

  const showSix = () => {
    setRead((prev) => !prev);
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
                  maxWidth: { xs: 100, md: 125, lg: 150 },
                  maxHeight: { xs: 100, md: 125, lg: 150 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: '1.10rem', md: '1.50rem', lg: '1.75rem' },
                  color: '#14ffaf',
                }}>
                  Herf-Man Quiz Lord
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: '.75rem', md: '1.00rem', lg: '1.00rem' },
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
                  maxWidth: { xs: 100, md: 125, lg: 150 },
                  maxHeight: { xs: 100, md: 125, lg: 150 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: '1.10rem', md: '1.50rem', lg: '1.75rem' },
                  color: '#14ffaf',
                }}>
                  Documentation Hub
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: '.75rem', md: '1.00rem', lg: '1.00rem' },
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
                  maxWidth: { xs: 100, md: 125, lg: 150 },
                  maxHeight: { xs: 100, md: 125, lg: 150 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: '1.10rem', md: '1.50rem', lg: '1.75rem' },
                  color: '#14ffaf',
                }}>
                  Password Generator
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: '.75rem', md: '1.00rem', lg: '1.00rem' },
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
        <Grid item xs={12} md={4}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout:4000 } : {})}>
            <Card sx={{
              maxWidth: { xs: 400, md: 500 },
              bgcolor: 'rgba(82,168,251,0.00)',
              display: 'flex'
            }}>
              <CardMedia component="img"
                alt="green iguana"
                image={dateNite} sx={{
                  display: { xs: 'flex', md: 'flex' },
                  maxWidth: { xs: 100, md: 125, lg: 150 },
                  maxHeight: { xs: 100, md: 125, lg: 150 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: '1.10rem', md: '1.50rem', lg: '1.75rem' },
                  color: '#14ffaf',
                }}>
                  DateNite
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: '.75rem', md: '1.00rem', lg: '1.00rem' },
                  color: '#48b0ff',
                }}>
                  Generate very random pairings
                </Typography>
                <CardActions>
                  <Button size="small" variant="outlined" href="https://github.com/SherlockTheHomie/DateNite" sx={{ color: '#e3ef30', marginRight: 1, }}>
                    Visit Repo
                  </Button>
                  <Button size="small" variant="outlined" onClick={dateDisplayChange} sx={{ color: '#e3ef30' }}>
                    More
                  </Button>
                </CardActions>

              </CardContent>
            </Card>
          </Grow>
          <Card sx={{
            maxWidth: { xs: 400, md: 500 },
            bgcolor: 'rgba(82,168,251,0.00)',
            display: dateDisplay,
            flexDirection: 'row',
            padding: 1,
          }}>
            <Grow in={date} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(date ? { timeout: 2000 } : {})}>
              <Button href="https://sherlockthehomie.github.io/DateNite/" size="small" variant="outlined" sx={{
                margin: 1,
                height: 50,
                color: '#38ef30',
                borderColor: '#38ef30',
              }}>Open</Button>
            </Grow>
            <Grow in={date} sx={{ fontSize: 12 }} style={{ transformOrigin: '0 0 0' }}{...(date ? { timeout: 2500 } : {})}>
              {proDescriptionD}
            </Grow>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout:5000 } : {})}>
            <Card sx={{
              maxWidth: { xs: 400, md: 500 },
              bgcolor: 'rgba(82,168,251,0.00)',
              display: 'flex'
            }}>
              <CardMedia component="img"
                alt="green iguana"
                image={weChill} sx={{
                  display: { xs: 'flex', md: 'flex' },
                  maxWidth: { xs: 100, md: 125, lg: 150 },
                  maxHeight: { xs: 100, md: 125, lg: 150 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: '1.10rem', md: '1.50rem', lg: '1.75rem' },
                  color: '#14ffaf',
                }}>
                  weChill
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: '.75rem', md: '1.00rem', lg: '1.00rem' },
                  color: '#48b0ff',
                }}>
                  Live Chat, No History
                </Typography>
                <CardActions>
                  <Button size="small" variant="outlined" href="https://github.com/SherlockTheHomie/Hoods" sx={{ color: '#e3ef30', marginRight: 1, }}>
                    Visit Repo
                  </Button>
                  <Button size="small" variant="outlined" onClick={chillDisplayChange} sx={{ color: '#e3ef30' }}>
                    More
                  </Button>
                </CardActions>

              </CardContent>
            </Card>
          </Grow>
          <Card sx={{
            maxWidth: { xs: 400, md: 500 },
            bgcolor: 'rgba(82,168,251,0.00)',
            display: chillDisplay,
            flexDirection: 'row',
            padding: 1,
          }}>
            <Grow in={chill} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(chill ? { timeout: 2000 } : {})}>
              <Button href="https://github.com/SherlockTheHomie/Hoods" size="small" variant="outlined" sx={{
                margin: 1,
                height: 50,
                color: '#38ef30',
                borderColor: '#38ef30',
              }}>Open</Button>
            </Grow>
            <Grow in={chill} sx={{ fontSize: 12 }} style={{ transformOrigin: '0 0 0' }}{...(chill ? { timeout: 2500 } : {})}>
              {proDescriptionE}
            </Grow>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout:5000 } : {})}>
            <Card sx={{
              maxWidth: { xs: 400, md: 500 },
              bgcolor: 'rgba(82,168,251,0.00)',
              display: 'flex'
            }}>
              <CardMedia component="img"
                alt="read you splash"
                image={readYou} sx={{
                  display: { xs: 'flex', md: 'flex' },
                  maxWidth: { xs: 100, md: 125, lg: 150 },
                  maxHeight: { xs: 100, md: 125, lg: 150 },
                }}>
              </CardMedia>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                  fontSize: { xs: '1.10rem', md: '1.50rem', lg: '1.75rem' },
                  color: '#14ffaf',
                }}>
                  READYou
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{
                  fontSize: { xs: '.75rem', md: '1.00rem', lg: '1.00rem' },
                  color: '#48b0ff',
                }}>
                  Readme? More like... easy
                </Typography>
                <CardActions>
                  <Button size="small" variant="outlined" href="https://github.com/SherlockTheHomie/READYOU" sx={{ color: '#e3ef30', marginRight: 1, }}>
                    Visit Repo
                  </Button>
                  <Button size="small" variant="outlined" onClick={readDisplayChange} sx={{ color: '#e3ef30' }}>
                    More
                  </Button>
                </CardActions>

              </CardContent>
            </Card>
          </Grow>
          <Card sx={{
            maxWidth: { xs: 400, md: 500 },
            bgcolor: 'rgba(82,168,251,0.00)',
            display: readDisplay,
            flexDirection: 'row',
            padding: 1,
          }}>
            <Grow in={read} duration="1000" style={{ transformOrigin: '0 0 0' }}{...(read ? { timeout: 2000 } : {})}>
              <Button href="https://github.com/SherlockTheHomie/Hoods" size="small" variant="outlined" sx={{
                margin: 1,
                height: 50,
                color: '#38ef30',
                borderColor: '#38ef30',
              }}>Open</Button>
            </Grow>
            <Grow in={read} sx={{ fontSize: 12 }} style={{ transformOrigin: '0 0 0' }}{...(read ? { timeout: 2500 } : {})}>
              {proDescriptionF}
            </Grow>
          </Card>
        </Grid>
{/* new projects here */}
      </Grid>
    </Box>
  );
}