import React from 'react';
import './Blogs.css';
import star from '../../assets/star.svg';
import img1 from '../../assets/work1.svg';
import img2 from '../../assets/work2.svg';
import img3 from '../../assets/work3.svg';

const Blogs = () => {
  return (
    <div className="BlogsContainer">
      <div className="headers">
        <h3>
          <img src={star} alt="star" /> Blogs
        </h3>
        <a href="/">view all</a>
      </div>
      <div className="Blogs-Box">
        <div className="Blogs-left">
          <img src={img1} alt="img1" />

          <div className="Blogs-Content">
            <p>Nov 9, 2023</p>
            <h3>How UX works in web</h3>
            <div className="Blog-Content-btn">
              <button>UI</button>
              <button>UX</button>
            </div>
          </div>
        </div>
        <button className="Read">Read</button>
      </div>
      <div className="Blogs-Box">
        <div className="Blogs-left">
          <img src={img2} alt="img2" />
          <div className="Blogs-Content">
            <p>Aug 18, 2023</p>
            <h3>Case Study - Analysis Application</h3>
            <div className="Blog-Content-btn">
              <button>DESIGN</button>
              <button>PRINT</button>
            </div>
          </div>
        </div>
        <button className="Read">Read</button>
      </div>
      <div className="Blogs-Box">
        <div className="Blogs-left">
          <img src={img3} alt="img3" />
          <div className="Blogs-Content">
            <p>Feb 16, 2023</p>
            <h3>3 ways to develop your skill</h3>
            <div className="Blog-Content-btn">
              <button>FIGMA</button>
              <button>WEB</button>
            </div>
          </div>
        </div>
        <button className="Read">Read</button>
      </div>
    </div>
  );
};

export default Blogs;
