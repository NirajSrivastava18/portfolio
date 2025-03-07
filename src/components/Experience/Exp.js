import React from 'react';
import './Exp.css';
import star from '../../assets/star.svg';

const Exp = () => {
  return (
    <div className="ExpContainer">
      <h2>
        <img src={star} alt="star" /> Experience
      </h2>

      <div className="Experience">
        <h3>Lead Product Designer</h3>
        <div className="Experience-dates">
          <h4>Fortknox</h4>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />
      <div className="Experience">
        <h3>Intern Designer</h3>
        <div className="Experience-dates">
          <h4>OmniSafe</h4>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />

      <div className="Experience">
        <h3>UI Designer</h3>
        <div className="Experience-dates">
          <h4>Doradesign</h4>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />

      <div className="Experience">
        <h3>Frontend Developer</h3>
        <div className="Experience-dates">
          <h4>Opacity Author</h4>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Exp;
