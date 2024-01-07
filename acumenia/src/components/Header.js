import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGlobe} style={{color: "#000000", marginRight:'7px'}} />
            Our Story
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
