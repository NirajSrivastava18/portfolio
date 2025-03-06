import React from 'react';
import './NavBar.css';
import brand from '../../assets/brand.svg';

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navlogo">
        <img src={brand} alt="brand" />
      </div>
      <div className="navLinks">
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
      <div className="navButtons">
        <button>HIRE ME</button>
      </div>
    </div>
  );
};

export default NavBar;
