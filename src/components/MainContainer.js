import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme ({
    palette: {
      type: 'light',
      primary: {
        main: 'rgba(66,163,255,0.89)',
        contrastText: '#95fbff',
      },
      secondary: {
        main: '#49eeff',
        contrastText: '#000000',
        dark: '#000000',
      },
      background: {
        paper: 'rgba(116,229,255,0.64)',
        default: '#000000',
      },
      error: {
        main: '#d60e00',
        contrastText: '#e2e2e2',
      },
      text: {
        primary: '#000000',
        secondary: '#f7f5f5',
      },
    },
  });
  

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
        {/* We are passing the currentPage from state and the function to update it */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </ThemeProvider>
    );
  }





