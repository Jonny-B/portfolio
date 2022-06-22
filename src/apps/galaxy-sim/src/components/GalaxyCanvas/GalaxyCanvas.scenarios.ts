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

export function simpleOrbit(pfive: p5, window: WindowDimensions, stars: Array<Star>){
    let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)
    // yellow star in center of window
    stars.push(new Star(x * .50, y * .50, pfive, 100000, [0, 0]));

    // earth like planet in orbit
    stars.push(new Star(x * .50, y * .40, pfive, 100, [.85, 0]));
}

export function earthMoonSunOrbit(pfive: p5, window: WindowDimensions, stars: Array<Star>){
    let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)
    // yellow star in center of window
    stars.push(new Star(x * .50, y * .50, pfive, 100000, [0, 0]));

    // earth like planet in orbit
    stars.push(new Star(x * .50, y * .30, pfive, 1000, [.85, 0]));

    // Moon in orbit
    stars.push(new Star(x * .51, y * .29, pfive, 1, [1.01, .1]));
}

export function solarSystem(pfive: p5, window: WindowDimensions, stars: Array<Star>){
    let x = window.width;
    let y = window.height;

    console.log(`x: ${x} y: ${y}`)
    // yellow star in center of window
    stars.push(new Star(x * .50, y * .50, pfive, 100000, [-.025, 0]));

    // planets in orbit
    stars.push(new Star(x * .50, y * .15, pfive, 1000, [1.70, 0]));
    stars.push(new Star(x * .50, y * .20, pfive, 500, [1.60, 0]));
    stars.push(new Star(x * .50, y * .29, pfive, 100, [1.31, 0]));
    stars.push(new Star(x * .50, y * .32, pfive, 50, [1.22, 0]));
    stars.push(new Star(x * .50, y * .35, pfive, 25, [1.12, 0]));
    stars.push(new Star(x * .50, y * .41, pfive, 10, [.86, 0]));
    stars.push(new Star(x * .50, y * .45, pfive, 9, [0.99, 0]));
    stars.push(new Star(x * .50, y * .48, pfive, 8, [1.6, 0]));
}