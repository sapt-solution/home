import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './../fonts.css';


const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
    </Router>
  );
};

export default App;
