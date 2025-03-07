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
        <h4>Lead Product Designer</h4>
        <div className="Experience-dates">
          <h5>Fortknox</h5>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />
      <div className="Experience">
        <h4>Intern Designer</h4>
        <div className="Experience-dates">
          <h5>OmniSafe</h5>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />

      <div className="Experience">
        <h4>UI Designer</h4>
        <div className="Experience-dates">
          <h5>Doradesign</h5>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />

      <div className="Experience">
        <h4>Frontend Developer</h4>
        <div className="Experience-dates">
          <h5>Opacity Author</h5>
          <p>Mar 2022 - Oct 2023</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Exp;
