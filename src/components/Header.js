import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';
import Login from './LandingPage/Login';
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import saved from '../assets/save.png';
import book from '../assets/book.png';
import '../style/header.css';

const Header = props => {
  const token = localStorage.getItem('token');

  useEffect(() => {

  }, [token])

  return (
  

  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <div className="nav-link">        
        {localStorage.getItem('token') ? <Logout/>  : ''}
 
      {console.log(props.state)}

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
)};

const mapStateToProps = state => {
  return {
      state: state,
  }
}
export default connect(mapStateToProps, {})(Header);
