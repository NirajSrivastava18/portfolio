import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Hero from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Works from '../components/Works/Works';
import Exp from '../components/Experience/Exp';
import Blogs from '../components/Blogs/Blogs';
import Comments from '../components/Comments/Comments';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';

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
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
