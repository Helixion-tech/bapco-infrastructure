import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Home/Hero.jsx'
import BgImage from '../../assets/website/hero.png'
import Info from '../Home/Info.jsx';
import Services from '../Home/Services';
import Products from '../Home/Products';
import Feedbacks from '../Home/Feedbacks';
import Clients from '../Home/Clients';
import ContactForm from '../Contact/ContactForm';
import Footer from '../Footer/Footer';

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgoundRepeat: "no-repeat",
    backgoundSize: "cover",
    backgoundPosition: "center",
    backgoundAttachment: "fixed",
  };

const Home = () => {
  return (
    <>
    <div style={bgStyle}>
        <Navbar />
        <Hero />
    </div>
      <Info />
      <Services />
      <Products />
      <Clients />
      <Feedbacks />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home