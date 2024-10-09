import React from 'react'
import Hero from '../About/Hero';
import BgImage from '../../assets/website/about_bg.png'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Aboutus from '../About/Aboutus';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgoundRepeat: "no-repeat",
  backgoundSize: "cover",
  backgoundPosition: "center",
  backgoundAttachment: "fixed",
};

const About = () => {
  return (
    <>
      <div style={bgStyle}>
          <Navbar />
          <Hero />
      </div>
          <Aboutus />
          <Footer />
    </>
  )
}

export default About