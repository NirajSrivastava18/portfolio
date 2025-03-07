import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './NavBar.css';
import brand from '../../assets/brand.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navContainer">
      <div className="navlogo">
        <img src={brand} alt="brand" />
      </div>
      <div className={`navLinks ${isOpen ? 'open' : ''}`}>
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
      <div className="navButtons">
        <button>HIRE ME</button>
      </div>
      <div className="menuIcon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>
    </nav>
  );
};

export default NavBar;
