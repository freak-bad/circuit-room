import React from 'react';
import './Footer.css'; // Import the CSS for the footer
import ng from '../assets/nglogo.png';
import nic from '../assets/niclogo.png';
import di from '../assets/dilogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul className="admin-details">
            <li>Name: John Doe</li>
            <li>Post: Admin</li>
            <li>Phone: +123 456 789</li>
            <li>Email: admin@example.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="ownership">
          <p>
            © Dantewada, Chhattisgarh This Website Is Designed And Developed By 
            <a href="https://navgurukul.org/"> NavGurukul Dantewada </a>
            And Managed By 
            <a href="https://nic.in/"> National Informatics Centre </a>, 
            Ministry Of Electronics & Information Technology, Government Of India.
          </p>
          <p>Last Updated: <strong>Oct 09, 2024</strong></p>
          <div className="logos">
            <img src={ng} alt="NavGurukul Logo" />
            <img src={nic} alt="NIC Logo" />
            <img src={di} alt="Digital India Logo" />
          </div>
        </div>
        <div className="social-icons">
          <p>Connect with us on:</p>
          <a href="https://www.facebook.com/Dantewadadist" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/dantewada_district/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
