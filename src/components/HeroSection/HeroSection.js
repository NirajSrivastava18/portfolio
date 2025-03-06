import React from 'react';
import './HeroSection.css';
import hero1 from '../../assets/hero1.svg';
import hero2 from '../../assets/hero2.svg';
import company1 from '../../assets/doradesign.svg';
import company2 from '../../assets/Group.svg';
import company3 from '../../assets/Frame.svg';

const HeroSection = () => {
  return (
    <>
      <div className="heroContainer">
        <h1>
          I AM A
          <span>
            <img src={hero1} alt="placeholder" />
          </span>{' '}
          FREELANCE DESIGNER
          <span>
            <img src={hero2} alt="placeholder" />
          </span>{' '}
          FORM SAN FRANCISCO
        </h1>
      </div>
      <div className="hero-footer">
        <img src={company1} alt="company1" />
        <img src={company2} alt="company2" />
        <img src={company3} alt="company3" />
        <p>
          Welcome to my portfolio. Here, artistry meets functionality. Dive into
          a curated showcase of distinctive branding and web designs, each
          crafted to captivate and inspire.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
