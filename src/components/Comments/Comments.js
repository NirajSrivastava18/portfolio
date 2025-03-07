import React from 'react';
import './Comments.css';
import star from '../../assets/star.svg';
import user from '../../assets/person.svg';
import quote from '../../assets/quote.svg';

const comments = () => {
  return (
    <div className="CommentContainer">
      <h3>
        <img src={star} alt="star" /> What they Say
      </h3>
      <div className="Comment">
        <div className="Commentleft">
          <img src={user} alt="person" />
          <div className="Comment-Content">
            <h5>Floyd Miles</h5>
            <p>ebay</p>
          </div>
        </div>
        <div className="Commentright">
          <img className="quote" src={quote} alt="quote" />
          <h4>
            Synergy's resume builder is fantastic. It helped me create a
            professional resume that stood out to employers. Synergy's resume
            builder is fantastic. It helped me create a professional resume that
            stood out to employers.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default comments;
