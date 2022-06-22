import React, { useEffect, useState } from 'react';
import Sketch from 'react-p5';
import { Star } from './Star'
import { Button, Form } from 'react-bootstrap'
import helper from './GalaxyCanvas.helper'
import { InitialScenario, InitialStarType } from '../../types'
type P5 = import("p5");

const GalaxyCanvas = () => {
    let stars: Array<Star> = [];

    let [windowDimensions, setWindowDimensions] = useState(helper.getWindowDimensions(window))
    let [scenario, setScenario] = useState<InitialScenario>('Random Distribution')
    let [shouldDraw, setShouldDraw] = useState<boolean>(false)
    let [blackHoles, setBlackHoles] = useState<number>(1)
    let [blueGiants, setBlueGiants] = useState<number>(12)
    let [blues, setBlues] = useState<number>(50)
    let [yellows, setYellows] = useState<number>(150)
    let [redDwarfs, setRedDwarfs] = useState<number>(350)
    let [starFieldX, setStarFieldX] = useState<number>(windowDimensions.width)
    let [starFieldY, setStarFieldY] = useState<number>(windowDimensions.height)
    let [gravConst, setGravConst] = useState<string>('0.006674')
    let [initialStarTypes, setInitialStarTypes] = useState<InitialStarType>({ blackHoles: 0, blueGiants: 0, blues: 0, yellows: 0, redDwarfs: 0 });
    let [showOrbitTrails, setShowOrbitTrails] = useState(false);

    const setup = (pfive: P5, parentRef: Element) => {
        pfive.createCanvas(starFieldX, starFieldY).parent(parentRef);
        stars = helper.createStarField(pfive, { width: starFieldX, height: starFieldY }, initialStarTypes, scenario)
        pfive.background(0);
    };

    useEffect(() => {
        setInitialStarTypes({ blackHoles, blueGiants, blues, yellows, redDwarfs })
    }, [blackHoles, blueGiants, blues, yellows, redDwarfs])

    const draw = (pfive: P5) => {
        // Redrawing background will remove trails
        if (!showOrbitTrails) pfive.background(0);

        pfive.stroke(255);
        pfive.strokeWeight(4);
        for (let i = 0; i < stars.length; i++) {
            stars[i].show(scenario);
            stars[i].update()
        }
        for (let i = 0; i < stars.length - 1; i++) {
            for (let j = 0 + i; j < stars.length; j++) {
                // We don't want to calculate the same star against itself
                if (i === j) continue;
                helper.calcAttractionForces(stars[i], stars[j], pfive, gravConst);
            }
        }
    };

    function handleReset() {
        setShouldDraw(false)
        setWindowDimensions(helper.getWindowDimensions(window))
    }

    function handleScenarioSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        setScenario(e.currentTarget.value as InitialScenario)
        let s = e.currentTarget.value
        if (s === 'Simple Orbit' || s === 'Solar System') {
            setGravConst('0.0006674')
            setShowOrbitTrails(true);
        }
        if (e.currentTarget.value === 'Earth|Moon|Sun Orbit') {
            setGravConst('0.0006674')
        }
    }

    return (
        <div className="galaxy-canvas">
            <Button size={'sm'} onClick={() => { setShouldDraw(true) }}>Try It</Button>
            <Button size={'sm'} onClick={handleReset}>Reset</Button>

            <div className="initial-condition-modifier">
                <Form.Label>Scenarios</Form.Label>
                <Form.Select defaultValue={'Random Distribution'} onChange={(e) => { handleScenarioSelect(e) }}>
                    <option>Simple Orbit</option>
                    <option>Earth|Moon|Sun Orbit</option>
                    <option>Solar System</option>
                    <option>Galaxy</option>
                    <option>Colliding Galaxies</option>
                    <option>Random Distribution</option>
                </Form.Select>
                {
                    scenario === 'Random Distribution' ?
                        <>
                            <Form.Label># Stars</Form.Label>
                            <Form.Control disabled size={'sm'} type="number" value={750} />

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

                <Form.Label>Gravitational Constant</Form.Label>
                <Form.Control size={'sm'} type="number" value={gravConst} onChange={(e) => { setGravConst(e.currentTarget.value) }} />

                <Form.Label>Show Orbit Lines</Form.Label>
                <Form.Check value={"true"} type="switch" checked={showOrbitTrails} onChange={() => { setShowOrbitTrails(!showOrbitTrails) }} />

                <Form.Label>Stars Field Dimensions</Form.Label>
                <Form.Control size={'sm'} type="number" placeholder={'x'} defaultValue={windowDimensions.width} onChange={(e) => { setStarFieldX(parseInt(e.currentTarget.value)) }} />
                <Form.Control size={'sm'} type="number" placeholder={'y'} defaultValue={windowDimensions.height} onChange={(e) => { setStarFieldY(parseInt(e.currentTarget.value)) }} />



            </div>
            {shouldDraw ? <Sketch setup={setup} draw={draw} /> : <></>}
        </div>
    );
}

export default GalaxyCanvas;