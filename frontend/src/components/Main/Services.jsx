import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Services/Hero'
import Footer from '../Footer/Footer'
import BgImage from '../../assets/website/services_bg.png'


const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgoundRepeat: "no-repeat",
    backgoundSize: "cover",
    backgoundPosition: "center",
    backgoundAttachment: "fixed",
  };


const Services = () => {
  return (
    <>
    <div style={bgStyle}>
        <Navbar />
        <Hero />
        <Footer />
    </div>
    </>
  )
}

export default Services