import React, { useState } from 'react';
import Sketch from 'react-p5';
import { Star } from './Star'
import { Button } from 'react-bootstrap'
import p5 from 'p5'

type P5 = import("p5");

const GalaxyCanvas = () => {
    let stars: Array<Star> = [];

    let [shouldDraw, setShouldDraw] = useState(false)

    const setup = (pfive: P5, parentRef: Element) => {
        pfive.createCanvas(2500, 2500).parent(parentRef);
        for (let i = 0; i < 350; i++) {
            let x = getRandomCoord(1000, 500);
            let y = getRandomCoord(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomCoord(0, 100)));
        }
        for (let i = 0; i < 150; i++) {
            let x = getRandomCoord(1000, 500);
            let y = getRandomCoord(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomCoord(0, 300)));
        }
        for (let i = 0; i < 50; i++) {
            let x = getRandomCoord(1000, 500);
            let y = getRandomCoord(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomCoord(0, 500)));
        }
        for (let i = 0; i < 12; i++) {
            let x = getRandomCoord(1000, 500);
            let y = getRandomCoord(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomCoord(0, 999)));
        }

        stars.push(new Star(1050, 1050, pfive, 1000, [0, 0]));
        stars.push(new Star(1040, 1040, pfive, 800, [1, 1]));
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

    function calcAttractionForces(target1: Star, target2: Star, pfive: P5): void {
        var force = p5.Vector.sub(target2.pos, target1.pos);
        var dsquared = force.magSq();
        dsquared = pfive.constrain(dsquared, 5, 9000);
        var G = 0.6674;
        var m1 = target1.mass;
        var m2 = target2.mass;
        var magnitue = G * ((m1 * m2) / dsquared);
        force.setMag(magnitue);
        target1.acc.add(p5.Vector.div(force, target1.mass));
        target2.acc.add(p5.Vector.div(force, -target2.mass));
    }

    function getRandomCoord(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    return (
        <>
            <Button onClick={() => { setShouldDraw(true) }}>Try It</Button>
            {shouldDraw ? <Sketch setup={setup} draw={draw} /> : <></>}
        </>
    );
}

export default GalaxyCanvas;