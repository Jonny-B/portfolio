import React, { useEffect, useState } from 'react';
import Sketch from 'react-p5';
import Star from '../../simulation/Star'
import { Button, Form, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import helper from './GalaxyCanvas.helper'
import { calcAttractionForces } from '../../simulation/simulation'
import { InitialScenario, InitialStarType } from '../../types'
type P5 = import("p5");

const GalaxyCanvas = () => {
    let mousePressXCoords: number = 0;
    let mousePressYCoords: number = 0;

    let [scenario, setScenario] = useState<InitialScenario>('Simple Orbit')
    let [shouldDraw, setShouldDraw] = useState<boolean>(false)
    let [blackHoles, setBlackHoles] = useState<number>(1)
    let [blueGiants, setBlueGiants] = useState<number>(12)
    let [blues, setBlues] = useState<number>(50)
    let [yellows, setYellows] = useState<number>(150)
    let [redDwarfs, setRedDwarfs] = useState<number>(350)
    let [starFieldX] = useState<number>(1024)
    let [starFieldY] = useState<number>(1132)
    let [gravConst, setGravConst] = useState<string>('0.0006674')
    let [initialStarTypes, setInitialStarTypes] = useState<InitialStarType>({ blackHoles: 0, blueGiants: 0, blues: 0, yellows: 0, redDwarfs: 0 });
    let [showOrbitTrails, setShowOrbitTrails] = useState(false);
    let [interactiveMode, setInteractiveMode] = useState(false);
    let [interactiveStarMass, setInteractiveStarMass] = useState(1000);
    let [stars, setStars] = useState<Array<Star>>([])
    let [canvas, setCanvas] = useState<any>();

    const setup = (pfive: P5, parentRef: Element) => {
        setCanvas(pfive.createCanvas(starFieldX, starFieldY).parent(parentRef));
        setStars(helper.createStarField({ width: starFieldX, height: starFieldY }, initialStarTypes, scenario))
    };

    useEffect(() => {
        setInitialStarTypes({ blackHoles, blueGiants, blues, yellows, redDwarfs })
    }, [blackHoles, blueGiants, blues, yellows, redDwarfs])

    const draw = (pfive: P5) => {
        // Redrawing background will remove trails
        if (!showOrbitTrails) {
            pfive.clear()
        }
        pfive.stroke(255);
        pfive.strokeWeight(4);
        // This should go in simulate
        for (let i = 0; i < stars.length; i++) {
            helper.show(scenario, stars[i], pfive);
            stars[i].update();
            for (let j = 0 + i; j < stars.length; j++) {
                // We don't want to calculate the same star against itself
                if (i === j) continue;
                calcAttractionForces(stars[i], stars[j], parseFloat(gravConst));
            }
        }
    };

    function handleReset() {
        setShouldDraw(false)
    }

    function handleScenarioSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        setScenario(e.currentTarget.value as InitialScenario)
        let s = e.currentTarget.value
        if (s === 'Simple Orbit' || s === 'Solar System') {
            setGravConst('0.0006674')
            setShowOrbitTrails(true);
        }
        else if (s === 'Earth|Moon|Sun Orbit') {
            setGravConst('0.0006674')
            setShowOrbitTrails(false);
        }
        else if (s === 'Galaxy') {
            setGravConst('0.0002674')
            setShowOrbitTrails(false);
        }
        else if (s === 'Solar System Collision') {
            setGravConst('0.00006674')
            setShowOrbitTrails(false);
        }
        else {
            setShowOrbitTrails(false);
        }
    }

    function mousePress(e: any) {
        if (canvas) {
            let xCoords = [0, 0];
            let yCoords = [0, 0];
            let position = canvas.position()
            let height = canvas.height
            let width = canvas.width
            xCoords = [position.x, position.x + width]
            yCoords = [position.y, position.y + height]

            let clickInsideCanvas = (e.mouseX >= xCoords[0] && e.mouseX <= xCoords[1]) && (e.mouseY >= yCoords[0] && e.mouseY <= yCoords[1])

            if (interactiveMode && clickInsideCanvas) {
                mousePressXCoords = e.mouseX;
                mousePressYCoords = e.mouseY;
            }
        }
        return false;
    }

    function mouseRelease(e: any) {
        if (canvas) {
            let xCoords = [0, 0];
            let yCoords = [0, 0];
            let position = canvas.position()
            let height = canvas.height
            let width = canvas.width
            xCoords = [position.x, position.x + width]
            yCoords = [position.y, position.y + height]

            let clickInsideCanvas = (e.mouseX >= xCoords[0] && e.mouseX <= xCoords[1]) && (e.mouseY >= yCoords[0] && e.mouseY <= yCoords[1])

            if (interactiveMode && clickInsideCanvas) {
                let velX = (e.mouseX - mousePressXCoords) / 100
                let velY = (e.mouseY - mousePressYCoords) / 100
                console.log(`[${velX},  ${velY}]`)
                // Need to contain the click to only inside the canvas
                let newStar = new Star(e.mouseX, e.mouseY, interactiveStarMass, [velX, velY])
                stars.push(newStar);
            }
        }
        return false;

    }

    return (
        <Container fluid className="galaxy-container">
            <Row>
                <Col xxl={0} xl={0} />
                <Col xxl={12} xl={8}>
                    <div className="initial-condition-modifier">
                        <OverlayTrigger
                            key={'right'}
                            placement={'right'}
                            overlay={
                                <Tooltip id={`tooltip-right`}>
                                    Click 'Try It' to start the simulation. To start a new scenario click Reset first.'
                                </Tooltip>
                            }
                        >
                            <Form.Label>Get Started / Reset Scenario</Form.Label>
                        </OverlayTrigger>

                        <br />
                        <Button size={'sm'} onClick={() => { setShouldDraw(true) }}>Try It</Button>
                        <Button size={'sm'} onClick={handleReset}>Reset</Button>
                        <br />
                        <OverlayTrigger
                            key={'right'}
                            placement={'right'}
                            overlay={
                                <Tooltip id={`tooltip-right`}>
                                    When you select a scenario from the dropdown and click the 'try it' button, the initial conditions and the number of stars in the simulation will change based on the selected scenario
                                </Tooltip>
                            }
                        >
                            <Form.Label>Scenarios</Form.Label>
                        </OverlayTrigger>

                        <Form.Select size={'sm'} defaultValue={'Simple Orbit'} onChange={(e) => { handleScenarioSelect(e) }}>
                            <option>Random Distribution</option>
                            <option>Simple Orbit</option>
                            <option>Earth|Moon|Sun Orbit</option>
                            <option>Solar System</option>
                            <option>Solar System Collision</option>
                            <option>Galaxy</option>
                        </Form.Select>
                        {
                            scenario === 'Random Distribution' ?
                                <>
                                    <Form.Label># Stars</Form.Label>
                                    {/* <Form.Control disabled size={'sm'} type="number" value={750} /> */}

                                    <Form.Label>Star # By Type</Form.Label>
                                    <Form.Label>Black Holes</Form.Label>
                                    <Form.Control size={'sm'} type="number" defaultValue={1} onChange={(e) => { setBlackHoles(parseInt(e.currentTarget.value)) }} />
                                    <Form.Label>Blue Giant</Form.Label>
                                    <Form.Control size={'sm'} type="number" defaultValue={12} onChange={(e) => { setBlueGiants(parseInt(e.currentTarget.value)) }} />
                                    <Form.Label>Blue</Form.Label>
                                    <Form.Control size={'sm'} type="number" defaultValue={50} onChange={(e) => { setBlues(parseInt(e.currentTarget.value)) }} />
                                    <Form.Label>Yellow</Form.Label>
                                    <Form.Control size={'sm'} type="number" defaultValue={150} onChange={(e) => { setYellows(parseInt(e.currentTarget.value)) }} />
                                    <Form.Label>Red Dwarf</Form.Label>
                                    <Form.Control size={'sm'} type="number" defaultValue={350} onChange={(e) => { setRedDwarfs(parseInt(e.currentTarget.value)) }} />

                                </>
                                :
                                <></>
                        }
                        <br />
                        <OverlayTrigger
                            key={'right'}
                            placement={'right'}
                            overlay={
                                <Tooltip id={`tooltip-right`}>
                                    Click to enter Interactive Mode. This allows you to modify the simulation in real time by adding new stars or orbit lines.
                                </Tooltip>
                            }
                        >
                            <Form.Label>Interactive Mode</Form.Label>
                        </OverlayTrigger>
                        <Form.Check value={"false"} type="switch" checked={interactiveMode} onChange={() => { setInteractiveMode(!interactiveMode) }} />
                        {interactiveMode ?
                            <div className="interactive-mode">
                                <OverlayTrigger
                                    key={'right'}
                                    placement={'right'}
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Modifies the mass of the star that can be added in. You can also adjust the initial velocity of the star you add by clicking, dragging your mouse and realeasing.
                                        </Tooltip>
                                    }
                                >
                                    <Form.Label>Star Mass</Form.Label>
                                </OverlayTrigger>
                                <Form.Control defaultValue={interactiveStarMass} type="number" onChange={(e) => setInteractiveStarMass(parseInt(e.target.value))} />
                                <br />
                                <OverlayTrigger
                                    key={'right'}
                                    placement={'right'}
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Add Orbit lines that trail behind the stars as they move.
                                        </Tooltip>
                                    }
                                >
                                    <Form.Label>Show Orbit Lines</Form.Label>
                                </OverlayTrigger>
                                <Form.Check value={"true"} type="switch" checked={showOrbitTrails} onChange={() => { setShowOrbitTrails(!showOrbitTrails) }} />
                                <br />
                                <OverlayTrigger
                                    key={'right'}
                                    placement={'right'}
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Modify the strength of the Gravitational Constant
                                        </Tooltip>
                                    }
                                >
                                    <Form.Label>Gravitational Constant</Form.Label>
                                </OverlayTrigger>
                                <Form.Control size={'sm'} type="number" value={gravConst} onChange={(e) => { setGravConst(e.currentTarget.value) }} />
                            </div> :
                            null}
                        <br />
                    </div>
                    {shouldDraw ? <Sketch setup={setup} draw={draw} mousePressed={mousePress} mouseReleased={mouseRelease} className={`galaxy-canvas ${scenario}`} /> : null}</Col>
                <Col xxl={0} xl={2} />
            </Row>

        </Container >
    );
}

export default GalaxyCanvas;
