import GalaxyCanvas from './components/GalaxyCanvas';
import NavBar from './components/NavBar';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="Galaxy">
        <GalaxyCanvas/>
      </div>
    </div>
  );
}

export default App;
