import React from 'react'
import './App.css';
import Explore from './ExploreNearby/Explore';
import Home from './Home/Home';
import Live from './LiveAnywhere/Live';

function App() {
  return (
    <div className="App">
      <Home />
      <Explore />
      <Live />
    </div>
  );
}

export default App;
