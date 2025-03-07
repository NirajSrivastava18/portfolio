import React from 'react';
import './Footer.css';
import star from '../../assets/star.svg';
import arrow from '../../assets/arrow.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="marquee-container">
        <div className="marquee">
          <span className="outlined-text">
            <img src={star} alt="star" /> FIGMA <img src={star} alt="star" />{' '}
            DESIGNER <img src={star} alt="star" /> DEVELOPER{' '}
            <img src={star} alt="star" /> WEBFLOW
          </span>
          <span className="outlined-text">
            <img src={star} alt="star" /> FIGMA <img src={star} alt="star" />{' '}
            DESIGNER <img src={star} alt="star" /> DEVELOPER{' '}
            <img src={star} alt="star" /> WEBFLOW
          </span>
        </div>
      </div>

      <div className="footer-content">
        <h1 className="footer-heading">LET’S TALK!</h1>
        <a href="mailto:rehanurraihan@gmail.com" className="footer-email">
          rehanurraihan@gmail.com <img src={arrow} alt="arrow" />
        </a>
      </div>

      {/* Social Links */}
      <div className="footer-social">
        <p>© Rehan Raihan - 2023</p>
        <div className="links">
          <a href="/">Dribbble</a>
          <a href="/">Behance</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
