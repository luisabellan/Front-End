import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import particles from './components/particles';

import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { Register } from './components/Register';


function App() {
  return (
    <div className="App">
    
      <Header></Header>
        <Particles params={particles}/>
      <Footer className="footer"></Footer>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Better Reads
        </p>
        <PrivateRoute exact path='/register' component={Register}/>
        <Route exact path ='/' component={Register} />
      </header>

    </div>
  );
}

export default App;