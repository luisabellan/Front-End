import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import saved from '../assets/save.png';
import book from '../assets/book.png';
import '../style/header.css';
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import YoutubeSearchedForOutlinedIcon from '@material-ui/icons/YoutubeSearchedForOutlined';

const Header = props => {

  return (
  

  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <div className="nav-link">   
      <NavLink className="link" key={'001'} to={'/home'}>
        <HouseOutlinedIcon className="link-icon" alt="logo" />
        <div>Home</div>
      </NavLink>

      <NavLink className="link" key={'002'} to={'/saved-books'}>
        <CollectionsBookmarkOutlinedIcon className="link-icon" alt="logo" />
        <div>My Books</div>
      </NavLink>

      <NavLink className="link" key={'003'} to={'/saved-searches'}>
        <YoutubeSearchedForOutlinedIcon className="link-icon" alt="logo" />
        <div>My Searches</div>
      </NavLink>
             
      {localStorage.getItem('token') ? <Logout/>  : ''}
    </div>
  </div>
)};

const mapStateToProps = state => {
  return {
      state: state,
  }
}
export default connect(mapStateToProps, {})(Header);
