/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React from 'react';
import GalaxyCanvas from './components/GalaxyCanvas/GalaxyCanvas'
import NavBar from './components/NavBar/NavBar';

export const App = () => {
  return <div className="App">
    <NavBar />
    <div className="Galaxy">
      <GalaxyCanvas />
    </div>
  </div>
}