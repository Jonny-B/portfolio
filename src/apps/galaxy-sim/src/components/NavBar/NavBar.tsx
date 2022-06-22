import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Galaxy-Sim</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Features" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://jonnyblewitt.wordpress.com/2022/05/10/javascript-galaxy-sim-part-1/">Galaxy Sim Development Blog</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.gamedev.net/forums/topic/712267-gravitational-acceleration-calculation/5447733/">Forum Discussions</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=OAcXnzRNiCY&t=1584s">Coding Challenge #56: Attraction and Repulsion Forces</NavDropdown.Item>
                            <NavDropdown.Item href="https://en.wikipedia.org/wiki/Force#Newtonian_mechanics">Wikipedia: Force</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.wikihow.com/Calculate-Force-of-Gravity">Wikihow: Calculating Gravity</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Related Resources" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://jonnyblewitt.wordpress.com/2022/05/10/javascript-galaxy-sim-part-1/">Galaxy Sim Development Blog</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.gamedev.net/forums/topic/712267-gravitational-acceleration-calculation/5447733/">Forum Discussions</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=OAcXnzRNiCY&t=1584s">Coding Challenge #56: Attraction and Repulsion Forces</NavDropdown.Item>
                            <NavDropdown.Item href="https://en.wikipedia.org/wiki/Force#Newtonian_mechanics">Wikipedia: Force</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.wikihow.com/Calculate-Force-of-Gravity">Wikihow: Calculating Gravity</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="http://www.theblewitts.online/#jonny">
                            About Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;