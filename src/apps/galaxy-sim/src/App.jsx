import GalaxyCanvas from './components/GalaxyCanvas/GalaxyCanvas'
import NavBar from './components/NavBar';

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
