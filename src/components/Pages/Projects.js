import * as React from 'react';
import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Images
import passPic from '../../static/images/passGen.png';
import herfQuiz from '../../static/images/herfQuiz.png';
import docHub from '../../static/images/docHub.png';





export default function Projects() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const herf = open ? 'simple-popover' : undefined;
  const dochub = open ? 'simple-popover' : undefined;


  return (
    <Box sx={{ flexGrow: 1, marginLeft: 10, marginRight: 10,}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1000 } : {})}>
        <Card sx={{
          maxWidth: 500,
          bgcolor: 'rgba(82,168,251,0.00)',
          display: 'flex'
        }}>
          <CardMedia component="img"
            height="auto"
            width="auto"
            image={passPic}
            alt="green iguana"
            sx={{
              flexGrow: 1,
              maxWidth: 200,
              width: 200,
            }}>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{
              color: '#14ffaf',
            }}>
              Password Generator
            </Typography>
            <CardActions sx={{
              display: 'flex',
            }}>
              <Button size="small">Open App</Button>
              <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
                Learn More
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}>
                <Typography sx={{
                  p: 2,
                  width: 340,
                  textWrap: "wrap",
                }}>Password Generator is a fully functioning encrypting machine. Giving the user total control of the length and characters used in generating a safe secure password.</Typography>
              </Popover>
            </CardActions>
          </CardContent>
        </Card>
      </Grow>
        </Grid>
        <Grid item xs={12} md={4}>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 1500 } : {})}>
        <Card sx={{
          maxWidth: 500,
          bgcolor: 'rgba(82,168,251,0.00)',
          display: 'flex'
        }}>
          <CardMedia component="img"
            height="auto"
            width="auto"
            image={herfQuiz}
            alt="green iguana"
            sx={{
              maxWidth: 200,
              width: 200,
            }}>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{
              color: '#14ffaf',
            }}>
              Herf-Man Quiz Lord
            </Typography>
            <CardActions sx={{
              display: 'flex',
            }}>
              <Button size="small">Open App</Button>
              <Button aria-describedby={herf} variant="outlined" onClick={handleClick}>
                Learn More
              </Button>
              <Popover
                id={herf}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}>
                <Typography sx={{
                  p: 2,
                  width: 340,
                  textWrap: "wrap",
                }}>This intense RPG meme with 4K graphics written in Javascript is exactly what you need right now.</Typography>
              </Popover>
            </CardActions>
          </CardContent>
        </Card>
      </Grow>
        </Grid>
        <Grid item xs={12} md={4}>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }}{...(true ? { timeout: 2000 } : {})}>
        <Card sx={{
          maxWidth: 500,
          bgcolor: 'rgba(82,168,251,0.00)',
          display: 'flex'
        }}>
          <CardMedia component="img"
            height="auto"
            width="auto"
            image={docHub}
            alt="green iguana"
            sx={{
              flexGrow: 1,
              maxWidth: 200,
              width: 200,
            }}>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{
              color: '#14ffaf',
            }}>
              Documentation Hub
            </Typography>
            <CardActions sx={{
              display: 'flex',
            }}>
              <Button size="small">Open App</Button>
              <Button aria-describedby={dochub} variant="outlined" onClick={handleClick}>
                Learn More
              </Button>
              <Popover
                id={dochub}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}>
                <Typography sx={{
                  p: 2,
                  width: 340,
                  textWrap: "wrap",
                }}>Password Generator is a fully functioning encrypting machine. Giving the user total control of the length and characters used in generating a safe secure password.</Typography>
              </Popover>
            </CardActions>
          </CardContent>
        </Card>
      </Grow>  
        </Grid>
        <Grid item xs={6} md={8}>
          {/* <Item>xs=6 md=8</Item> */}
        </Grid>
      </Grid>
    </Box>
    // <Container sx={{ flexGrow: 1, display: 'flex', flexdirection: 'column', padding: 3, alignitems: 'center'}}>
      
      
    // </Container>
  );
}