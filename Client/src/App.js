import React, { useState } from 'react';
import ParticlesBackground from './Components/Background/ParticlesBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCode from './Components/Navbar/NavbarCode';
import PythonCodeEditor from './Components/PythonIDE/PythonCodeEditor';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Function to render PythonCodeEditor conditionally
  const renderPythonCodeEditor = () => {
    if (isLoggedIn) {
      return <PythonCodeEditor />;
    }
    return null;
  };

  return (
    <>
      <ParticlesBackground />
      <NavbarCode isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {/* Call renderPythonCodeEditor function to render PythonCodeEditor */}
      {renderPythonCodeEditor()}
    </>
  );
}

export default App;
