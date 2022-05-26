import React, { useState } from 'react';
import Sketch from 'react-p5';
import { Star } from './Star'
import { Button } from 'react-bootstrap'
import p5 from 'p5'

const GalaxyCanvas = () => {
    let stars = [];

    let [shouldDraw, setShouldDraw] = useState(false)

    const setup = (pfive, parentRef) => {
        pfive.createCanvas(2500, 2500).parent(parentRef);
        for (let i = 0; i < 525; i++) {
            let x = getRandomCoord(100);
            let y = getRandomCoord(100);
            stars.push(new Star(x + 1000, y + 1000, pfive, getRandomCoord(800)));
        }

        stars.push(new Star(1050, 1050, pfive, 1000, [0, 0]));
        stars.push(new Star(1040, 1040, pfive, 800, [1, 1]));
    };

    const draw = (pfive) => {
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

    function calcAttractionForces(target1, target2, pfive) {
        var force = p5.Vector.sub(target2.pos, target1.pos);
        var dsquared = force.magSq();
        dsquared = pfive.constrain(dsquared, 5, 9000);
        var G = 0.0006674;
        var m1 = target1.mass;
        var m2 = target2.mass;
        var magnitue = G * ((m1 * m2) / dsquared);
        force.setMag(magnitue);
        target1.acc.add(p5.Vector.div(force, target1.mass));
        target2.acc.add(p5.Vector.div(force, -target2.mass));
    }

    function getRandomCoord(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <>
            <Button onClick={() => { setShouldDraw(true) }}>Try It</Button>
            {shouldDraw ? <Sketch setup={setup} draw={draw} /> : <></>}
        </>
    );
}

export default GalaxyCanvas;