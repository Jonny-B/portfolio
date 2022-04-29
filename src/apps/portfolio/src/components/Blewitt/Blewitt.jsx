import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Navbar, Nav, Container, Card, Image } from "react-bootstrap";
import holdingHands from "./holdingHands.png";
import notHoldingHands from "./notHoldingHands.png";
import { helper } from "./Blewitt.helper";

export default (props) => {
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    helper.setInitialTitleImageOpacity();
  }, []);

  const handleScroll = () => {
    helper.updateTitleImagesOpacity(window.pageYOffset);
  };

  return (
    <span id={"blewitt"} className={classes.blewitt}>
      <Container>
        <Navbar variant="dark" className={classes.blewittNav}>
          <Navbar.Brand href="#home">The Blewitts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#jonny">Jonny</Nav.Link>
              <Nav.Link href="#leah">Leah</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={classes.titleImage} style={{ marginLeft: "-175px" }}>
          <Image
            id={"titleImage1"}
            className={classes.titleImage1}
            src={holdingHands}
          />
          <Image
            id={"titleImage2"}
            className={classes.titleImage2}
            src={notHoldingHands}
          />
        </div>

        <Card className={classes.blewittCard}>
          <Card.Body>
            <Card.Title>About Us</Card.Title>
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
        <Card id={"aboutJonny"} className={classes.blewittCard}>
          <Card.Body>
            <Card.Title>Lorem ipsum</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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
      </Container>

      <Container>
        <a href={"#blewitt"}>
          <div className={`${classes.blewittJonnyLink} ${props.buttonLinks}`}>
            {" "}
          </div>
        </a>
        <a href={"#jonny"}>
          <div className={`${classes.jonnyLink} ${props.buttonLinks}`}></div>
        </a>
        <a href={"#leah"}>
          <div className={`${classes.leahLink} ${props.buttonLinks}`}></div>
        </a>
        <a href={"#blewitt"}>
          <div className={`${classes.blewittLeahLink} ${props.buttonLinks}`}>
            {" "}
          </div>
        </a>
      </Container>
    </span>
  );
};

const useStyles = createUseStyles({
  blewitt: {
    color: "white",
    display: "flex",
    position: "relative",
    height: "auto",
    flexDirection: "column",
  },
  blewittContentCol: {
    margin: "10px",
  },
  blewittNav: {
    backgroundColor: "transparent !important",
  },
  titleImage: {
    display: "flex",
    position: "sticky",
    top: "0",
  },
  blewittCard: {
    color: "#29262a",
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
  },
  blewittJonnyLink: {
    //This Blewitt link is for Jonny -> Blewitt so it will be opposite of Leah -> Blewitt
    borderTopLeftRadius: "200px",
    borderBottomLeftRadius: "200px",
    left: "-100px",
  },
  jonnyLink: {
    borderTopRightRadius: "200px",
    borderBottomRightRadius: "200px",
    left: "0",
  },
  blewittLeahLink: {
    //This Blewitt link is for Leah -> Blewitt so it will be opposite of Jonny -> Blewitt
    borderTopRightRadius: "200px",
    borderBottomRightRadius: "200px",
    right: "-100px",
  },
  leahLink: {
    borderTopLeftRadius: "200px",
    borderBottomLeftRadius: "200px",
    right: "0",
  },
  titleImage1: {
    // position: 'relative',
    zIndex: "1",
  },
  titleImage2: {
    display: "flex",
    position: "absolute",
    zIndex: "2",
  },
});
