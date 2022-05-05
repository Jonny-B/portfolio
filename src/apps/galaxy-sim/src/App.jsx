import {Navbar, Container} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="Galaxy">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Galaxy Sim
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
    </div>
  );
}

export default App;
