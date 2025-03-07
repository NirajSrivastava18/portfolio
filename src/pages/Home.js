import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Hero from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Works from '../components/Works/Works';
import Exp from '../components/Experience/Exp';
import Blogs from '../components/Blogs/Blogs';
import Comments from '../components/Comments/Comments';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Works />
      <Exp />
      <Blogs />
      <Comments />
    </>
  );
};

export default Home;
