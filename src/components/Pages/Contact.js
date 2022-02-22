import React, { bounds, useState } from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function Contact() {

  const [checked, setChecked] = React.useState(false);
  const [displayContact, setContact] = React.useState('none');

  const contactDisplay = () => {
    if (displayContact === 'none') {
      setContact('flex');
      showCon();
    } if (displayContact === 'flex') {
      showCon();
      setContact('none');
    }
  };

  const showCon = () => {
    setChecked((prev) => !prev);
  };

  // Set the drag hook and define component movement based on gesture data.


  return ( 
   
    <Box display='flex' flexDirection='column' maxHeight='95vh' maxWidth='95vw' sx={{ alignItems: 'center', justifyContent: 'center'}}>
     <Button variant="outlined" onClick={contactDisplay} sx={{marginTop: 4}}>Contact Me</Button>
     <Card sx={{
      maxWidth: {xs:300, md: 350, lg: 400},
      bgcolor: 'rgba(82,168,251,0.00)',
      display: displayContact,
      flexDirection: 'column',
      padding: 1,
     }}>
       <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        <Button variant="outlined" sx={{marginTop: 2}}><Link href="mailto:glherault@tcmsolutions.net">Email</Link></Button>
        </Slide>

        <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        <Button variant="outlined" sx={{marginTop: 2}}><ArrowCircleDownIcon/>Download My Resume</Button>
        </Slide>

        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        <Button variant="outlined" sx={{marginTop: 2}}>Email</Button>
        </Slide>
      
      
     </Card>
    </Box>
    


  );
}