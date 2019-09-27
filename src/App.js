import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/LandingPage/PrivateRoute';

import LandingPage from './components/LandingPage/LandingPage';
import SavedLists from './components/SavedList/SavedLists';
import SavedBooks from './components/SavedList/SavedBooks';
import DesciptionList from './components/SavedList/DescriptionList';


//Particles.js
import Particles from 'react-particles-js';
import particles from './components/particles';

//Dashboard
import Dashboard from './components/Dashboard';
import TopBooks from './components/TopBooks';

function App() {
 
  const address1 = 1;
  const address2 = 2;

  return (
    <div className="App">
      
      <Header/>
        <Particles params={particles}/>
      <Footer className="footer"/>
      
      <Switch>
        <PrivateRoute exact path='/home' component={Dashboard} />
        <Route exact path = '/' component={LandingPage} />
      </Switch>
      
      <PrivateRoute exact path = '/saved-books' component={SavedLists} />
      <PrivateRoute exact path = '/saved-searches' component={SavedLists} />
      
      <Route path ='/topbooks' component={TopBooks} />
    </div>
  );
}

export default App;
