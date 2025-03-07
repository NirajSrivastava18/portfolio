import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Hero from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Works from '../components/Works/Works';
import Exp from '../components/Experience/Exp';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Works />
      <Exp />
    </>
  );
};

export default Home;
