import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Container } from '@mui/material';
import Header from '../src/components/Header';
import About from './pages/About';
import './../fonts.css';


const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          {/* <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
  );
};

export default App;
