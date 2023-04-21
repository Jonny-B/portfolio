import React, { useEffect, useState } from 'react';
import Sketch from 'react-p5';
import Star from '../../simulation/Star'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import helper from './GalaxyCanvas.helper'
import { calcAttractionForces } from '../../simulation/simulation'
import { InitialScenario, InitialStarType } from '../../types'
import { PreRenderSim } from '../../simulation/PreRenderSim';
import PreRenderTab from './Tabs/PreRenderTab';
import RealTimeTab from './Tabs/RealTimeTab';
type P5 = import("p5");

const GalaxyCanvas = () => {
    let mousePressXCoords: number = 0;
    let mousePressYCoords: number = 0;

    let [scenario, setScenario] = useState<InitialScenario>('Simple Orbit')
    let [shouldDraw, setShouldDraw] = useState<boolean>(false)
    const [stars, setStars] = useState({
        blackHoles: 1,
        blueGiants: 12,
        blues: 50,
        yellows: 150,
        redDwarfs: 350
    });
    let [starFieldX] = useState<number>(1024)
    let [starFieldY] = useState<number>(1132)
    let [gravConst, setGravConst] = useState<string>('0.0006674')
    let [initialStarTypes, setInitialStarTypes] = useState<InitialStarType>({ blackHoles: 0, blueGiants: 0, blues: 0, yellows: 0, redDwarfs: 0 });
    let [showOrbitTrails, setShowOrbitTrails] = useState(false);
    let [interactiveMode, setInteractiveMode] = useState(false);
    let [interactiveStarMass, setInteractiveStarMass] = useState(1000);
    let [starField, setStarField] = useState<Array<Star>>([])
    let [canvas, setCanvas] = useState<any>();
    let [preRenderTime, setPreRenderTime] = useState<number>(3000);
    let [preRenderSim, setPreRenderSim] = useState<PreRenderSim>(new PreRenderSim(starField, scenario, preRenderTime, gravConst));
    let [isPreRendering, setIsPreRendering] = useState(false);
    let [isPlayingPreRendered, setIsPlayingPreRendered] = useState(false);

    const setup = (pfive: P5, parentRef: Element) => {
        setCanvas(pfive.createCanvas(starFieldX, starFieldY).parent(parentRef));
        setStarField(helper.createStarField({ width: starFieldX, height: starFieldY }, initialStarTypes, scenario))
    };

    useEffect(() => {
        setInitialStarTypes(stars)
    }, [stars])

    useEffect(() => {
        if (isPreRendering) {
            const starField = helper.createStarField({ width: starFieldX, height: starFieldY }, initialStarTypes, scenario)
            const sim = new PreRenderSim(starField, scenario, preRenderTime, gravConst)
            sim.resetRender()
            sim.startRender()
            setPreRenderSim(sim)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPreRendering])

    useEffect(() => {
        if (isPlayingPreRendered) {
            setShouldDraw(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlayingPreRendered])

    const draw = (pfive: P5) => {
        // Redrawing background will remove trails
        if (!showOrbitTrails) {
            pfive.clear()
        }
        pfive.stroke(255);
        pfive.strokeWeight(4);
        if (isPlayingPreRendered) {
            console.log("Playing Pre-rendered Scenario")
            console.log(pfive.frameCount)
            let prStars = preRenderSim.preRenderedSim[pfive.frameCount];
            for (let i = 0; i < prStars.length; i++) {
                console.log(`Star ${i} pos: [${prStars[i].pos.x},${prStars[i].pos.y} ]`)
                helper.show(scenario, prStars[i], pfive);
            }
        }
        else if (shouldDraw) {
            console.log("Running Real Time Simulation")
            for (let i = 0; i < starField.length; i++) {
                helper.show(scenario, starField[i], pfive);
                starField[i].update();
                for (let j = 0 + i; j < starField.length; j++) {
                    // We don't want to calculate the same star against itself
                    if (i === j) continue;
                    calcAttractionForces(starField[i], starField[j], parseFloat(gravConst));
                }
            }
        }
    };

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

    function handleReset(): void {
        setShouldDraw(false)
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
                starField.push(newStar);
            }
        }
        return false;

    }

    return (
        <Container fluid className="galaxy-container">
            {isPreRendering ? <div className="loader" /> : null}
            <Row>
                <Col xxl={0} xl={0} />
                <Col xxl={12} xl={8}>
                    <div className="initial-condition-container">
                        <Tabs
                            defaultActiveKey="RealTimeTab"
                            id="intitial-condition-tabs"
                            className="mb-3"
                        >
                            <Tab eventKey="RealTimeTab" title="Real Time">
                                <RealTimeTab
                                    shouldDraw={shouldDraw}
                                    setShouldDraw={setShouldDraw}
                                    isPreRendering={isPreRendering}
                                    handleScenarioSelect={handleScenarioSelect}
                                    handleReset={handleReset}
                                    setStars={setStars}
                                    stars={stars}
                                    scenario={scenario}
                                    interactiveMode={interactiveMode}
                                    setInteractiveMode={setInteractiveMode}
                                    interactiveStarMass={interactiveStarMass}
                                    setInteractiveStarMass={setInteractiveStarMass}
                                    showOrbitTrails={showOrbitTrails}
                                    setShowOrbitTrails={setShowOrbitTrails}
                                    gravConst={gravConst}
                                    setGravConst={setGravConst}

                                />
                            </Tab>
                            <Tab eventKey="PreRenderTab" title="Pre-Rendered" tabClassName="condition-tab">
                                <PreRenderTab
                                    shouldDraw={shouldDraw}
                                    handleReset={handleReset}
                                    setShouldDraw={setShouldDraw}
                                    isPreRendering={isPreRendering}
                                    setPreRenderTime={setPreRenderTime}
                                    setIsPlayingPreRendered={setIsPlayingPreRendered}
                                    setIsPreRendering={setIsPreRendering}
                                    preRenderSim={preRenderSim}
                                    handleScenarioSelect={handleScenarioSelect}
                                    setStars={setStars}
                                    stars={stars}
                                    scenario={scenario}
                                />
                            </Tab>
                        </Tabs>
                    </div>
                    {shouldDraw ? <Sketch setup={setup} draw={draw} mousePressed={mousePress} mouseReleased={mouseRelease} className={`galaxy-canvas ${scenario}`} /> : null}</Col>
                <Col xxl={0} xl={2} />
            </Row>

        </Container >
    );
}

export default GalaxyCanvas;
