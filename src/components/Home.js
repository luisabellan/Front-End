import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/dashboard.css';

const Dashboard = props => (
  <div className="dashboard">
      <form>
        <input type="text" className="textbox" placeHolder="Search"></input>
        <input title="Search" value="⚡ Let's Go!" type="submit" className="button"></input>
      </form>
    <div className="popular">
      
    </div>
  </div>
);

export default Dashboard;
