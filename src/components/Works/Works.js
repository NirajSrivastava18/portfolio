import React from 'react';
import './Works.css';
import star from '../../assets/star.svg';
import img1 from '../../assets/work1.svg';
import img2 from '../../assets/work2.svg';
import img3 from '../../assets/work3.svg';
import mail from '../../assets/mail.svg';

const Works = () => {
  return (
    <div className="WorksContainer">
      <div className="headers">
        <h2>
          <img src={star} alt="star" /> Works
        </h2>
        <a href="/" className="view">
          view all
        </a>
      </div>
      <img src={mail} alt="mail" className="mail-backdrop1" />
      <div className="Works-Box">
        <img src={img1} alt="placeholder" />
        <div className="Works-Content">
          <h3>Analysis Application</h3>
          <p>
            With user-centered approach, the goals was to create an intuitive
            interface for enhanced financial intelligence.
          </p>
          <div className="Works-Box-btns">
            <button>FIGMA</button>
            <button>UX</button>
          </div>
          <button className="Case-Study">View Case Study</button>
        </div>
      </div>

      <img src={mail} alt="mail" className="mail-backdrop2" />
      <div className="Works-Box">
        <img src={img2} alt="placeholder" />
        <div className="Works-Content">
          <h3>Fortknox Application</h3>
          <p>
            With user-centered approach, the goals was to create an intuitive
            interface for enhanced financial intelligence.
          </p>
          <div className="Works-Box-btns">
            <button>MOBILE</button>
            <button>WEB</button>
          </div>
          <button className="Case-Study">View Case Study</button>
        </div>
      </div>
      <img src={mail} alt="mail" className="mail-backdrop3" />
      <div className="Works-Box">
        <img src={img3} alt="placeholder" />
        <div className="Works-Content">
          <h3>Zenocide Application</h3>
          <p>
            With user-centered approach, the goals was to create an intuitive
            interface for enhanced financial intelligence.
          </p>
          <div className="Works-Box-btns">
            <button>APP</button>
            <button>WEB</button>
          </div>
          <button className="Case-Study">View Case Study</button>
        </div>
      </div>
    </div>
  );
};

export default Works;
