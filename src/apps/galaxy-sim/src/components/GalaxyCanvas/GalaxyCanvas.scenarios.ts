import { WindowDimensions, InitialStarType } from '../../types';
import p5 from 'p5'
import { Star } from './Star'
import helper from './GalaxyCanvas.helper'

export function randomScenario(pfive: p5, window: WindowDimensions, types: InitialStarType, stars: Array<Star>) {
    let xMin = window.width * .25
    let xMax = window.width * .75
    let yMin = window.height * .05
    let yMax = window.height * .75

    console.log(`xMin: ${xMin} xMax: ${xMax}`)
    console.log(`yMin: ${xMin} yMax: ${xMax}`)
    for (let i = 0; i < types.redDwarfs; i++) {
        // Red Dwarf
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(1, 100)));
    }
    for (let i = 0; i < types.yellows; i++) {
        // Yellow Stars
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(101, 300)));
    }
    for (let i = 0; i < types.blues; i++) {
        // Red Giants
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(301, 500)));
    }
    for (let i = 0; i < types.blueGiants; i++) {
        // Blue Giants
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, helper.getRandomValue(501, 999)));
    }
    for (let i = 0; i < types.blackHoles; i++) {
        let x = helper.getRandomValue(xMax, xMin);
        let y = helper.getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, 1000, [0, 0]));
    }
}

export function drawRandomScenario(pfive: p5, gravConst: string, stars: Array<Star>){
        console.log(`Grav Const: ${gravConst}`)

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
                helper.calcAttractionForces(stars[i], stars[j], pfive, gravConst);
            }
        }
}

export function simpleOrbit(pfive: p5, window: WindowDimensions, stars: Array<Star>){
    let x = window.width;
    let y = window.height;

    // yellow star in center of window
    stars.push(new Star(x * .50, y * .50, pfive, 1000, [0, 0]));
}