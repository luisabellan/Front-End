import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/LandingPage/PrivateRoute';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
        
        <Header />

        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          <Route exact path = '/' component={LandingPage} />
        </Switch>

      <Footer className="footer" />

    </div>
  );
}

export default App;