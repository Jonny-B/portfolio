import { WindowDimensions, InitialStarType } from '../../types';
import p5 from 'p5'
import { Star } from './Star'

export function getRandomValue(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function randomScenario(pfive: p5, window: WindowDimensions, types: InitialStarType, stars: Array<Star>) {
    let xMin = window.width * .25
    let xMax = window.width * .75
    let yMin = window.height * .05
    let yMax = window.height * .75

    console.log(`xMin: ${xMin} xMax: ${xMax}`)
    console.log(`yMin: ${xMin} yMax: ${xMax}`)
    for (let i = 0; i < types.redDwarfs; i++) {
        // Red Dwarf
        let x = getRandomValue(xMax, xMin);
        let y = getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, getRandomValue(1, 100)));
    }
    for (let i = 0; i < types.yellows; i++) {
        // Yellow Stars
        let x = getRandomValue(xMax, xMin);
        let y = getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, getRandomValue(101, 300)));
    }
    for (let i = 0; i < types.blues; i++) {
        // Red Giants
        let x = getRandomValue(xMax, xMin);
        let y = getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, getRandomValue(301, 500)));
    }
    for (let i = 0; i < types.blueGiants; i++) {
        // Blue Giants
        let x = getRandomValue(xMax, xMin);
        let y = getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, getRandomValue(501, 999)));
    }
    for (let i = 0; i < types.blackHoles; i++) {
        let x = getRandomValue(xMax, xMin);
        let y = getRandomValue(yMax, yMin);
        stars.push(new Star(x, y, pfive, 1000, [0, 0]));
    }
}