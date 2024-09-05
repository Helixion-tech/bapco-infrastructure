import React from 'react'
import Home from './components/Main/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/Main/About';
import Services from './components/Main/Services';

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden font-montserrat'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App