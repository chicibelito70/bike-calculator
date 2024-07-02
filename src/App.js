import React, { useState } from 'react';
import Menu from './components/Menu';
import Calculadora from './components/Calculadora';
import Bienvenida from './components/Bienvenida';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('Bienvenida');

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Menu onMenuClick={handleMenuClick} />
      <div className="content">
        {activeSection === 'Bienvenida' && <Bienvenida />}
        {activeSection === 'calculadora' && <Calculadora />}
      </div>
    </div>
  );
};

export default App;
