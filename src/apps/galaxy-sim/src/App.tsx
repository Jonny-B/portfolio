import React from 'react';
import GalaxyCanvas from './components/GalaxyCanvas/GalaxyCanvas'
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return <div className="App">
    <NavBar />
    <div className="Galaxy">
      <GalaxyCanvas />
    </div>
  </div>
}

export default App;