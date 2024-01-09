// src/App.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import OurStory from './OurStory';


import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
    <Routes>
      <Route path="/ourStory" element={<OurStory />} />
      </Routes>
  </Router>

  );
}

export default App;
