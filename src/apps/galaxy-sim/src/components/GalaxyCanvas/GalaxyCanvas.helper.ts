import Star from '../../simulation/Star'
import p5 from 'p5'
import { WindowDimensions, InitialStarType, InitialScenario } from '../../types';
import {
    createEarthMoonSunOrbit,
    createRandomScenario,
    createSimpleOrbit,
    createSolarSystem,
    createSolarSystemCollision,
    createGalaxy
} from './GalaxyCanvas.scenarios';

const helper = {
    show: (scenario: InitialScenario, star: Star): void => {
        switch (scenario) {
            case 'Random Distribution':
                randomScenario(star);
                break;
            case 'Simple Orbit':
                simpleOrbit(star);
                break;
            case 'Earth|Moon|Sun Orbit':
                earthMoonSunOrbit(star);
                break;
            case 'Solar System':
                solarSystem(star);
                break;
            case 'Solar System Collision':
                solarSystemCollision(star);
                break;
            case 'Galaxy':
                galaxy(star);
                break;
            default:
                randomScenario(star);
                break;
        }
    },
    createStarField: (pfive: p5, window: WindowDimensions, types: InitialStarType, scenario: InitialScenario): Array<Star> => {
        let stars: Array<Star> = [];

        switch (scenario) {
            case 'Random Distribution':
                createRandomScenario(pfive, types, stars)
                break;
            case 'Simple Orbit':
                createSimpleOrbit(pfive, window, stars)
                break;
            case 'Earth|Moon|Sun Orbit':
                createEarthMoonSunOrbit(pfive, window, stars)
                break;
            case 'Solar System':
                createSolarSystem(pfive, window, stars)
                break;
            case 'Solar System Collision':
                createSolarSystemCollision(pfive, window, stars)
                break;
            case 'Galaxy':
                createGalaxy(pfive, window, stars)
                break;
            default:
                createRandomScenario(pfive, types, stars)
                break;
        }
        return stars;
    },
    getWindowDimensions: (window: Window): WindowDimensions => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    },
    getRandomValue: (min: number, max: number): number => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
}

function randomScenario(star: Star): void {
    if (star.mass <= 100) {
        // Red Dwarf
        star.p5.stroke(245, 171, 171)
        star.p5.strokeWeight(2);
    }
    else if (star.mass <= 300) {
        // Yellow
        star.p5.stroke(255)
        star.p5.strokeWeight(2);
    }
    else if (star.mass <= 500) {
        // Blue
        star.p5.stroke(234, 240, 240)
        star.p5.strokeWeight(2);
    }
    else if (star.mass <= 999) {
        // Blue Giant
        star.p5.stroke(160, 184, 250)
        star.p5.strokeWeight(2);
    }
    else {
        // Black Hole
        star.p5.stroke(0);
        star.p5.strokeWeight(1);
    }

    star.p5.point(star.pos.x, star.pos.y)
}

function simpleOrbit(star: Star): void {
    if (star.mass > 999) {
        star.p5.stroke(255, 255, 128)
        star.p5.strokeWeight(10);
    }
    else {
        star.p5.stroke(160, 184, 250)
        star.p5.strokeWeight(4);
    }

    star.p5.point(star.pos.x, star.pos.y)
}

function earthMoonSunOrbit(star: Star): void {
    // Sun
    if (star.mass > 10000) {
        star.p5.stroke(255, 255, 128)
        star.p5.strokeWeight(10);
    }
    // Earth
    else if (star.mass > 999) {
        star.p5.stroke(160, 184, 250)
        star.p5.strokeWeight(5);
    }
    // Moon
    else {
        star.p5.stroke(136, 136, 136)
        star.p5.strokeWeight(3);
    }

    star.p5.point(star.pos.x, star.pos.y)
}

function solarSystem(star: Star): void {
    if (star.mass > 10000) {
        star.p5.stroke(255)
        star.p5.strokeWeight(10);
    }
    else if (star.mass > 999) {
        star.p5.stroke(160, 184, 250)
        star.p5.strokeWeight(4);
    }
    else {
        star.p5.stroke(124, 252, 0)
        star.p5.strokeWeight(2);
    }

    star.p5.point(star.pos.x, star.pos.y)
}

function solarSystemCollision(star: Star): void {
    if (star.mass > 999) {
        star.p5.stroke(255, 255, 128)
        star.p5.strokeWeight(5);
    }
    else {
        star.p5.stroke(102, 153, 153)
        star.p5.strokeWeight(4);
    }

    star.p5.point(star.pos.x, star.pos.y)
}

function galaxy(star: Star): void {
    if (star.mass <= 100) {
        // Red Dwarf
        star.p5.stroke(245, 171, 171)
        star.p5.strokeWeight(2);
    }
    else if (star.mass <= 300) {
        // Yellow
        star.p5.stroke(255)
        star.p5.strokeWeight(2);
    }
    else if (star.mass <= 500) {
        // Blue
        star.p5.stroke(234, 240, 240)
        star.p5.strokeWeight(2);
    }
    else if (star.mass <= 999) {
        // Blue Giant
        star.p5.stroke(160, 184, 250)
        star.p5.strokeWeight(2);
    }
    else {
        // Black Hole
        star.p5.stroke(0, 0, 51);
        star.p5.strokeWeight(10);
    }

    star.p5.point(star.pos.x, star.pos.y)

    star.p5.point(star.pos.x, star.pos.y)
}

export default helper;
