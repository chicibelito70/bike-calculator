import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('cm');
  const [bikeSize, setBikeSize] = useState('');

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const calculateBikeSize = () => {
    let heightInCm;
    if (unit === 'm') {
      heightInCm = height * 100;
    } else if (unit === 'ft') {
      heightInCm = height * 30.48;
    } else {
      heightInCm = height;
    }
    
    let size;

    if (heightInCm < 150) {
      size = 'XS';
    } else if (heightInCm >= 150 && heightInCm < 160) {
      size = 'S';
    } else if (heightInCm >= 160 && heightInCm < 170) {
      size = 'M';
    } else if (heightInCm >= 170 && heightInCm < 180) {
      size = 'L';
    } else if (heightInCm >= 180 && heightInCm < 190) {
      size = 'XL';
    } else {
      size = 'XXL';
    }

    setBikeSize(size);
  };

  return (
    <div className="Calculadora">
      <nav className="header">
        <h1>Calculadora de Talla de Bicicleta</h1>
      </nav>
      <div className="form-container">
        <label>
          Altura:
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
          />
        </label>
        <select value={unit} onChange={handleUnitChange}>
          <option value="cm">cm</option>
          <option value="m">m</option>
          <option value="ft">ft</option>
        </select>
        <button onClick={calculateBikeSize}>Calcular Talla</button>
        {bikeSize && <h2>La talla recomendada de bicicleta es: {bikeSize}</h2>}
      </div>
    </div>
  );
};

export default Calculadora;
