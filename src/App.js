import React, { useState, useEffect } from 'react';
import Navbar from './components/shared/Navbar';
import Hero from './components/Hero';
import Map from './components/Map/Map';

function App() {
  const [stateVariable, setStateVariable] = useState("");
  
  useEffect(() => {
    fetch("/hosts")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setStateVariable(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Map />
    </>
  );
}

export default App;