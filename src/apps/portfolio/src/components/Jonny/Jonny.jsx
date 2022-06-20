import React from "react";
import { createUseStyles } from "react-jss";
import {
  Card,
  Container,
  Image,
  Nav,
  Navbar,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import jonnyFace from "./jonnyFace.png";
import nothingGif from "../../nothing.gif";
import starship from "./starship.jpg";
import galaxy from "./galaxySimClip.jpg";

export default function Jonny() {
  const classes = useStyles();

  return (
    <span id={"jonny"} className={classes.jonny}>
      <Container>
        <Navbar variant="dark" className={classes.jonnyNav}>
          <Navbar.Brand href="#Jonny">Jonny</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutJonny">About</Nav.Link>
              <Nav.Link href="#portfolioJonny">Portfolio</Nav.Link>
              <Nav.Link href="#influencersJonny">Influencers</Nav.Link>
              <Nav.Link href="#resumeJonny">Resume</Nav.Link>
              <div className={classes.navDivider} />
              <Nav.Link href="#blewitt">Blewitts</Nav.Link>
              <Nav.Link href="#leah">Leah</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div style={{ paddingLeft: "200px" }}>
          <Image src={jonnyFace} />
        </div>

        <Card id={"aboutJonny"} className={classes.jonnyCard}>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              I am passionate about learning and exploring new things and am
              always open to talking about new opportunities. I am one of the
              few who can say that they truly love what they do. Everyday I feel
              thankful that I get to write code for a living. In my personal
              life I love learning about science, logic, critical thinking, and
              history. I have been a Christian for 20 years now and it is the
              hope on which my life is built. I am always open to talking about
              my faith, particularly about how faith, logic, science, and
              critical thinking intersect. Check out <a href={"https://jonnyblewitt.wordpress.com"}>my blog</a> if you are interested
              in some of my code babble.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card id={"portfolioJonny"} className={classes.jonnyCard}>
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card id={"portfolioStarship"} className={classes.portfolioCard}>
              <a href={"https://codepen.io/jonny-b/pen/zYwwZBq"}>
                <Card.Body>
                  <Card.Img className={classes.portfolioImage} variant="top" src={starship} />
                  <Card.Title>Starship - HTML/JSS/CSS</Card.Title>
                  <Card.Text>
                    I'm a big fan of SpaceX so I decided to build a simple little project of mixed Javascript and CSS animations of a Starship lunch.
                  </Card.Text>
                </Card.Body>
              </a>
              <a href={"http://localhost:9000/galaxy-sim/"}>
                <Card.Body>
                  <Card.Img className={classes.portfolioImage} variant="top" src={galaxy} />
                  <Card.Title>Galaxy Sim - React/Typescript</Card.Title>
                  <Card.Text>
                    Another space themed project. Here I attempt to simulate the phycisc of stars within a galaxy.
                  </Card.Text>
                </Card.Body>
              </a>
            </Card>
          </Card.Body>
        </Card>

        <Card id={"influencersJonny"} className={classes.jonnyCard}>
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
                      <Card.Title>Leah Blewitt</Card.Title>
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
                      <Card.Title>William A. Blewitt II</Card.Title>
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
                      <Card.Title>Brian Lees</Card.Title>
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
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <Card id={"resumeJonny"} className={classes.jonnyCard}>
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
  jonny: {
    color: "white",
  },
  jonnyNav: {
    backgroundColor: "transparent !important",
  },
  jonnyCard: {
    color: "#29262a",
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
  },
  navDivider: {
    margin: "11px 5px 0 5px",
    height: "20px",
    border: "rgba(255,255,255,.55) solid 1px",
  },
  portfolioCard: {
    width: '500px'
  },
  portfolioImage: {
    borderRadius: '3%',
    width: '100%'
  }
});
