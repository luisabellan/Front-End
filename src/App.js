import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import particles from './components/particles';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Particles params={particles}/>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;