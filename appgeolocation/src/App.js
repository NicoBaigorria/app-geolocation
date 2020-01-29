import React from 'react';
import './App.css';

import Navigation from './Components/Navigation';
import Map from './Components/Map';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
        <Map />
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
