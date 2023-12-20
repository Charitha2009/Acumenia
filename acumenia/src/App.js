// src/App.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header>
      
      <nav>
        <ul>
          
          <li><FontAwesomeIcon icon={faGlobe} style={{color: "#000000", marginRight:'7px'}} />
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
        <p style={{marginTop:'100px',padding:'0', fontSize:'80px',fontWeight:'bolder'}}><span style={{color:'#C7372F'}}>A</span>cumenia <br></br><span style={{fontSize:'20px',marginLeft:'140px',marginTop:'-80px'}}>~learn grow and discover</span></p>
         
        <button style={{ width:'250px',fontSize: '20px', padding: '25px', backgroundColor: 'black', color: 'white', borderRadius: '40px', cursor: 'pointer', marginLeft:'55px' ,marginTop:'-50px' }}>
    Get Started
  </button>
    
      </div>
      <div className="image">
        <img src="acumenia/public/images/blackboard-background-7q4z6ypqigw9nbis.jpg" alt="Your" />
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
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
