import React from 'react';

const MainContent = () => {
  return (
    <div className="container">
      <div className="text" style={{ marginBottom: '1000px', display:'flex',flexDirection:'column' }}>
        <p style={{marginTop:'100px',padding:'0', fontSize:'80px',fontWeight:'bolder'}}>
          <span style={{color:'#C7372F'}}>A</span>cumenia 
          <br />
          <span style={{fontSize:'20px',marginLeft:'140px',marginTop:'-100px'}}>~learn grow and discover</span>
        </p>
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

export default MainContent;
