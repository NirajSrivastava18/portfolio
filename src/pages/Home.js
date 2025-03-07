import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Hero from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Works from '../components/Works/Works';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Works />
    </>
  );
};

export default Home;
