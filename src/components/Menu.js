import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

const Menu = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (section) => {
    setIsOpen(false);
    onMenuClick(section);
  };

  return (
    <div className="menu-container">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="menu"
          >
            <ul>
            <li><a onClick={() => handleMenuClick('Bienvenida')}>Inicio</a></li>
              <li><a onClick={() => handleMenuClick('calculadora')}>Calculadora</a></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
