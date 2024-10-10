import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navgigate = useNavigate()
function handleBook(){
  navgigate('/bookingform')
}

  return (
    <header className="header">
      <div className="logo"> {/* Replace with actual logo */}
        <img src={logo} alt="Logo" />
      </div>
      
      <div className="circuit-house-name">
        Circuit House Dantewada
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>

      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <button onClick={handleBook} className="book-now">Book Now</button>
      </nav>
    </header>
  );
};

export default Header;
