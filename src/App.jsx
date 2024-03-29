import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import About from './pages/About';
import './../fonts.css';
import Contact from './pages/Contact';
import { BackgroundColorContextProvider } from './context/BackgroundColorContext';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <Router>
        <BackgroundColorContextProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            {/* <Route path="/services" component={Services} /> */}
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
          <Footer />
        </BackgroundColorContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
