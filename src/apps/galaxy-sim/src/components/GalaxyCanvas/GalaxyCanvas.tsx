import { useState } from 'react';
import Sketch from 'react-p5';
import p5 from 'p5'
import { Star } from './Star'
import { Button, Form } from 'react-bootstrap'
import helper from './GalaxyCanvas.helper'

type P5 = import("p5");

const GalaxyCanvas = () => {
    let stars: Array<Star> = [];

    let [shouldDraw, setShouldDraw] = useState(false)
    let [windowDimensions, setWindowDimensions] = useState(helper.getWindowDimensions(window))

    const setup = (pfive: P5, parentRef: Element) => {
        pfive.createCanvas(windowDimensions.width, windowDimensions.height).parent(parentRef);
        stars = helper.createStarField(pfive, windowDimensions)
    };

    const draw = (pfive: P5) => {
        pfive.background(0);
        pfive.stroke(255);
        pfive.strokeWeight(4);
        for (let i = 0; i < stars.length; i++) {
            stars[i].show();
            stars[i].update()
        }
        for (let i = 0; i < stars.length - 1; i++) {
            for (let j = 0 + i; j < stars.length; j++) {
                // We don't want to calculate the same star against itself
                if (i === j) continue;
                calcAttractionForces(stars[i], stars[j], pfive);
            }
        }

    };

    function handleReset() {
        setShouldDraw(false)
        setWindowDimensions(helper.getWindowDimensions(window))
    }

    function calcAttractionForces(target1: Star, target2: Star, pfive: P5): void {
        var force = p5.Vector.sub(target2.pos, target1.pos);
        var dsquared = force.magSq();
        dsquared = pfive.constrain(dsquared, 5, 9000);
        var G = 0.006674;
        var m1 = target1.mass;
        var m2 = target2.mass;
        var magnitue = G * ((m1 * m2) / dsquared);
        force.setMag(magnitue);
        target1.acc.add(p5.Vector.div(force, target1.mass));
        target2.acc.add(p5.Vector.div(force, -target2.mass));
    }


    return (
        <div className="galaxy-canvas">
            <Button onClick={() => { setShouldDraw(true) }}>Try It</Button>
            <Form className="initial-condition-modifier">
                <fieldset>
                    <Form.Group className="mb-3 initial-condition-modifier">
                        <Form.Label className="initial-condition-modifier-label">Stars</Form.Label>
                        <Form.Control className="initial-condition-modifier-form" placeholder="# of Stars" />
                    </Form.Group>
                    <Form.Group className="mb-3 initial-condition-modifier">
                        <Form.Label className="l">Black Holes</Form.Label>
                        <Form.Control className="" placeholder="# of Black Holes" />
                    </Form.Group>
                    <Button onClick={handleReset}>Reset</Button>
                </fieldset>
            </Form>
            {shouldDraw ? <Sketch setup={setup} draw={draw} /> : <></>}
        </div>
    );
}

export default GalaxyCanvas;