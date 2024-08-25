import React, { useState, useEffect } from 'react';
import Navbar from './components/shared/Navbar';
import Map from './components/Map/Map';
import InstructionModal from './components/InstructionModal';

function App() {
  // const [stateVariable, setStateVariable] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // fetch("/hosts")
    //   .then((response) => response.text())
    //   .then((data) => {
    //     console.log(data);
    //     setStateVariable(data);
    //   });

    // Check if the user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <Map />
      {showModal && <InstructionModal onClose={handleCloseModal} />}
    </>
  );
}

export default App;