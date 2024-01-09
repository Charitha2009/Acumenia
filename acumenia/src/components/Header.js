import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, Route } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
        <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} style={{color: "#000000", marginRight:'7px'}} />
              Home
            </Link>
          </li>
          <li>
          <Link to="/ourStory">
              <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000", marginRight: '7px' }} />
              Our Story
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#000000', marginRight:'7px'}} />
            Contact
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} style={{color: "#000000", marginRight:'7px'}} />
            Login
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
