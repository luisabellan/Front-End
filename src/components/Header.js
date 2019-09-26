import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import saved from '../assets/save.png';
import book from '../assets/book.png';
import '../style/header.css';

const Header = props => (
  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <div className="nav-link">

      <NavLink className="link" key={'001'} to={'/home'}>
        <img src={home} className="link-icon" alt="logo" />
        <div>Home</div>
      </NavLink>

      <NavLink className="link" key={'002'} to={'/saved'}>
        <img src={saved} className="link-icon" alt="logo" />
        <div>My Books</div>
      </NavLink>

      <NavLink className="link" key={'003'} to={'/topbooks'}>
        <img src={book} className="link-icon" alt="logo" />
        <div>Top Books</div>
      </NavLink>
    </div>
  </div>
);

export default Header;
