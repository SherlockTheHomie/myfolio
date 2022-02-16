import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const settings = ([
  <Link href="https://github.com/SherlockTheHomie" sx={{ color: '#000000' }}>Github</Link>,
  <Link href="https://www.linkedin.com/in/gabe-l-herault-689b0a139/" sx={{ color: '#000000'}}>LinkedIn</Link>,
  <Link href="https://open.spotify.com/artist/4t8ZjpSfEjYCE8RakAo8wN?autoplay=true" sx={{ color: '#000000'}}>Spotify</Link>
])
 

const Nav = ({ currentPage, handlePageChange }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <>
    <AppBar position="static" sx={{
      bgcolor: 'rgba(0,0,0,0)',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Gabe L'Herault
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key={'Home'} 
                onClick={() => {handlePageChange('Home'); handleCloseNavMenu();}}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem key={'Projects'} 
                onClick={() => {handlePageChange('Projects'); handleCloseNavMenu();}}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                  <Typography textAlign="center">Projects</Typography>
                </MenuItem>
                <MenuItem key={'About'} 
                onClick={() => {handlePageChange('About'); handleCloseNavMenu();}}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem key={'Contact'} 
                onClick={() => {handlePageChange('Contact'); handleCloseNavMenu();}}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Gabe L'Herault
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
                key={'Home'}
                onClick={() => {handlePageChange('Home'); handleCloseNavMenu();}}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Button>
              <Button
              key={'Projects'}
              onClick={() => {handlePageChange('Projects'); handleCloseNavMenu();}}
              sx={{ my: 2, color: 'white', display: 'block' }}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </Button>
            <Button
            key={'About'}
            onClick={() => {handlePageChange('About'); handleCloseNavMenu();}}
            sx={{ my: 2, color: 'white', display: 'block' }}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Button>
          <Button
          key={'Contact'}
          onClick={() => {handlePageChange('Contact'); handleCloseNavMenu();}}
          sx={{ my: 2, color: 'white', display: 'block' }}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography sx={{
              textAlign: 'center',
              float: 'left',
              padding: 1,
              display: { xs: 'none', md: 'block' }
            }}>Check out my</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} disableScrollLock={true} sx={{ p: 0 }}>
                <Avatar sx={{
                  bgcolor: '#00FFFF',
                }}>
                <EmojiPeopleIcon sx={{
                  color: '#000000',
                  fontSize: 'large',
                }}/>
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ bgcolor: '#48b0ff',
                }}>
                  {setting}
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   
    </>
  );
};
export default Nav;