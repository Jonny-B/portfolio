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
import influencerList from "./influencerList";
// import nothingGif from "../../nothing.gif";
import jonnyFace from "./jonnyFace.png";
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

        <div className={classes.topImage}>
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
            <Row>
              <Col>
                <Card id={"portfolioStarship"} className={classes.portfolioCard}>
                  <a href={"https://codepen.io/jonny-b/pen/zYwwZBq"}>
                    <Card.Body>
                      <Card.Img className={classes.portfolioImage} variant="top" src={starship} />
                      <Card.Title>Starship - HTML/JSS/CSS</Card.Title>
                      <Card.Text>
                        I'm a fan of SpaceX so I built a simple little project mixing Javascript and CSS animations of a Starship launch.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
              <Col>
                <Card id={"portfolioGalaxySim"} className={classes.portfolioCard}>
                  <a href={"/galaxy-sim/"}>
                    <Card.Body>
                      <Card.Img className={classes.portfolioImage} variant="top" src={galaxy} />
                      <Card.Title>Galaxy Sim - React/Typescript</Card.Title>
                      <Card.Text>
                        Another space themed project. Here I attempt to simulate the phycisc of stars within a galaxy.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card id={"influencersJonny"} className={classes.jonnyCard}>
          <Card.Body>ityuokljlyli
            <Card.Title>My Influencers</Card.Title>
            <Container>
              <Row>
                {influencerList.map((influencer) => {
                  return <Col>
                    <Card className={"influencerCard"}>
                      <Card.Img variant="top" src={influencer.image} />
                      <Card.Body>
                        <Card.Title>{influencer.name}</Card.Title>
                        <Card.Text >
                          {influencer.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                })}

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
      </Container >
    </span >
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
  topImage: {
    width: "100%",
    textAlign: "center"
  },
  navDivider: {
    margin: "11px 5px 0 5px",
    height: "20px",
    border: "rgba(255,255,255,.55) solid 1px",
  },
  portfolioCard: {
    width: '500px',
  },
  portfolioImage: {
    borderRadius: '3%',
    width: '460px',
    height: '300px'
  },
  influencerCard: {
    width: "18rem",
    margin: "8px"
  }
});
