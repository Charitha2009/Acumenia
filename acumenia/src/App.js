// src/App.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import OurStory from './OurStory';

const Header = () => {
  const navigate = useNavigate();

  const redirectToOurStory = () => {
    navigate('/ourStory', { replace: true });
  };
  return (
    <header>
      
      <nav>
        <ul>
          <li><FontAwesomeIcon icon={faHome} style={{ color: '#000000', marginRight:'7px'}} />Home</li>
          <li onClick={redirectToOurStory}><FontAwesomeIcon icon={faGlobe} style={{color: "#000000", marginRight:'7px'}} />
      Our Story</li>
          <li><FontAwesomeIcon icon={faPhone} style={{ color: '#000000', marginRight:'7px'}} />Contact</li>
          <li><FontAwesomeIcon icon={faUser} style={{color: "#000000", marginRight:'7px'}} />Login</li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <div className="container" >
      <div className="text" style={{ marginBottom: '1000px', display:'flex',flexDirection:'column' }}>
        <p style={{marginTop:'100px',padding:'0', fontSize:'80px',fontWeight:'bolder'}}><span style={{color:'#C7372F'}}>A</span>cumenia <br></br><span style={{fontSize:'20px',marginLeft:'140px',marginTop:'-80px'}}>~learn, discover and grow</span></p>
         
        <button style={{ width:'250px',fontSize: '20px', padding: '25px', backgroundColor: 'black', color: 'white', borderRadius: '40px', cursor: 'pointer', marginLeft:'55px' ,marginTop:'-50px' }}>
    Get Started
  </button>
    
      </div>
      <div className="image">
        <img src="/images/Untitled.png" alt="Your" style={{ width: '80%', height: 'auto' }}/>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Your Company</p>
    </footer>
  );
};

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
