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

    <Box display='flex' flexDirection='column' maxHeight='95vh' maxWidth='95vw' sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="outlined" onClick={contactDisplay} sx={{ marginTop: 4 }}>Click Me</Button>
      <Card sx={{
        maxWidth: { xs: 300, md: 350, lg: 400 },
        bgcolor: 'rgba(82,168,251,0.00)',
        display: displayContact,
        flexDirection: 'column',
        padding: 1,
      }}>
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          <Button variant="outlined" sx={{ margin:2 }}><Link href="mailto:glherault@tcmsolutions.net">Email</Link></Button>
        </Slide>

        <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
          <Box sx={{margin: 1}}>
            <ArrowCircleDownIcon sx={{ color: '#e3ef30' }}/><Link href="../../static/documents/Gabe L'Herault - FS Resume 2022.docx" download>Download Resume DOC</Link>
          </Box>
        </Slide>

        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          <Box sx={{ margin: 1}}>
            <ArrowCircleDownIcon sx={{ color: '#e3ef30'}} /><Link href="../../static/documents/Gabe L'Herault - FS Resume 2022.pdf" download>Download Resume PDF</Link>
          </Box>
        </Slide>
      </Card>
    </Box>



  );
}