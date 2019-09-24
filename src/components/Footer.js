import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/favicon.png';
import '../style/footer.css';

const Footer = props => (
  <div className="footer">
    <div className="content">
      <img src={logo} className="footer-logo" alt="logo" />
    </div>
  </div>
);

export default Footer;
