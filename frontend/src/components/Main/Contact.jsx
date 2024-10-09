import React from 'react'
import BgImage from '../../assets/website/contact.png'
import Navbar from '../Navbar/Navbar';
import Hero from '../Contact/Hero';
import Footer from '../Footer/Footer';


const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgoundRepeat: "no-repeat",
    backgoundSize: "cover",
    backgoundPosition: "center",
    backgoundAttachment: "fixed",
  };


const Contact = () => {
  return (
    <>
    <div style={bgStyle}>
        <Navbar />
        <Hero />
    </div>
        <Footer />
    </>
  )
}

export default Contact