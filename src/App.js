import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { baseUrl, xForwardedHost } from "./utils/fetch";


function App() {
  const [stateVariable, setStateVariable] = useState("");
  
  useEffect(() => {
    console.log("base url:", baseUrl);
    console.log("x-forwarded-host:", xForwardedHost);
    fetch(`${baseUrl}/hosts`, {
      mode: "cors",
      headers: {
        "x-forwarded-host": xForwardedHost
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStateVariable(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;