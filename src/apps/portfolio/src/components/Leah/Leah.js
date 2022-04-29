import React from "react";
import { createUseStyles } from "react-jss";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import leahFace from "./leahFace.png";
import nothingGif from "../../nothing.gif";

export default function Leah() {
  const classes = useStyles();

  return (
    <span id={"leah"} className={classes.leah}>
      <Container>
        <Navbar variant="dark" className={classes.jonnyNav}>
          <Navbar.Brand href="#Leah">Leah</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutLeah">About</Nav.Link>
              <Nav.Link href="#portfolioLeah">Portfolio</Nav.Link>
              <Nav.Link href="#influencersLeah">Influencers</Nav.Link>
              <Nav.Link href="#resumeLeah">Resume</Nav.Link>
              <div className={classes.navDivider}/>
              <Nav.Link href="#blewitt">Blewitts</Nav.Link>
              <Nav.Link href="#jonny">Jonny</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div style={{ marginBottom: "-300px", paddingLeft: "150px" }}>
          <Image src={leahFace} />
        </div>

        <Card id={"aboutLeah"} className={classes.leahCard}>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Text>
          </Card.Body>
        </Card>

        <Card id={"portfolioLeah"} className={classes.leahCard}>
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Text>
          </Card.Body>
        </Card>

        <Card id={"influencersLeah"} className={classes.leahCard}>
          <Card.Body>
            <Card.Title>My Influencers</Card.Title>
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={nothingGif} />
                    <Card.Body>
                      <Card.Title>Bill Blewitt</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={nothingGif} />
                    <Card.Body>
                      <Card.Title>Darby Dennis</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={nothingGif} />
                    <Card.Body>
                      <Card.Title>Donavan Stanley</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={nothingGif} />
                    <Card.Body>
                      <Card.Title>Bill Blewitt</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={nothingGif} />
                    <Card.Body>
                      <Card.Title>Darby Dennis</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={nothingGif} />
                    <Card.Body>
                      <Card.Title>Donavan Stanley</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Card id={"resumeLeah"} className={classes.leahCard}>
          <Card.Body>
            <Card.Title>Resume</Card.Title>
            <Button>Download</Button>
          </Card.Body>
        </Card>
      </Container>
    </span>
  );
}

const useStyles = createUseStyles({
  leah: {
    color: "white",
  },
  leahNav: {
    backgroundColor: "transparent !important",
  },
  leahCard: {
    color: "#29262a",
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
  },
  navDivider: {
    margin: "11px 5px 0 5px",
    height: "20px",
    border: "rgba(255,255,255,.55) solid 1px",
  }
});
