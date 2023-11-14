import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };
  
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Hero sectionRefs={sectionRefs} />
    </>
  );
}

export default App;