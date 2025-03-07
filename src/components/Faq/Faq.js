import React from 'react';
import './Faq.css';
import star from '../../assets/star.svg';

const Faq = () => {
  return (
    <div className="FaqContainer">
      <h3>
        <img src={star} alt="star" /> Frequently asked questions
      </h3>
      <h4>What is your design process?</h4>
      <p>
        My design process typically involves four key phases: research, design,
        prototype, and test. In the research phase, I gather insights about the
        user and their needs. In the design phase, I create wireframes and
        visual designs that meet those needs. In the prototype phase, I create
        interactive models of the design for testing. In the test phase, I
        collect feedback from users to refine the design.
      </p>
      <h4>What tools and software do you use for UX design?</h4>
      <h4>How do you measure the success of your UX designs?</h4>
    </div>
  );
};

export default Faq;
