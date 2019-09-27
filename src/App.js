import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/LandingPage/PrivateRoute';

import LandingPage from './components/LandingPage/LandingPage';
import SavedList from './components/SavedList/SavedList';

//Particles.js
import Particles from 'react-particles-js';
import particles from './components/particles';

//Dashboard
import Dashboard from './components/Dashboard';
import TopBooks from './components/TopBooks';

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Particles params={particles}/>
      <Footer className="footer"></Footer>
      <Switch>
        <PrivateRoute exact path='/home' component={Dashboard} />
        <Route exact path = '/' component={LandingPage} />
      </Switch>
      <Route path ='/topbooks' component={TopBooks} />
      <PrivateRoute exact path = '/saved' component={SavedList} />
    </div>
  );
}

export default App;
