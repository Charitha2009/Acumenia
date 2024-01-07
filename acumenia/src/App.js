// src/App.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';


import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
