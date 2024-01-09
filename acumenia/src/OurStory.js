import React from 'react';
import './OurStory.css'; // Create a separate CSS file for styling

const OurStory = () => {
  return (
    <div>
    <div className="our-story-container">
      <div className="content">
        <h1 className="heading">Our Story</h1>
        <p className="medium-text">
          "It's a desire led by curiosity to foster the learning process and stimulate creativity and innovation.
          Our success is not only measured by outcomes but by the journey of learning and developing it.
          For us, challenges become opportunities, and each obstacle is a chance to acquire new skills and insights.
          Our work extends beyond its immediate goals, influencing our individual and collective growth. Together,
          we navigate uncharted territories, driven by the thrill of exploration,
          knowing that every lesson learned is a step closer to achieving excellence and making a lasting
          contribution to our field."
        </p>
      </div>
      <div className="image">
      <img
          src="/images/work.jpeg" // Update the source path based on your project structure
          alt="Our Story Image"
        />
      </div>
    </div>
    <div className="contributors-section">
    <h1 className='contributors-heading'> Nice to meet you!!</h1>
    <h2 className='white-text'>Our Team: Aspiring to build something beautiful</h2>
    <div className='grid-cards'>
      <div className='card'>
        <div className='contributors-image'>
          <img className= "contributors-image" src='images/varsha.jpeg'></img>
        </div>
        <div className='contributors-name'> Varsha Karanam
        varshakaranam@gmail.com
        </div>
      </div>
      <div className='card'>
        <div className='contributors-image'>
          <img className= "contributors-image" src='images/bhoomika.jpeg'></img>
        </div>
        <div className='contributors-name'> Bhoomika Pathapati
        bhoomikapathapati@gmail.com
        </div>
      </div>
      <div className='card'>
        <div className='contributors-image'>
          <img className= "contributors-image" src='images/vedacharitha.jpeg'></img>
        </div>
        <div className='contributors-name'> Veda Charitha Bellam
        vedacharithabellam@gmail.com
        </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default OurStory;
