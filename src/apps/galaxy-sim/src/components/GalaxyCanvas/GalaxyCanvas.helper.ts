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
    show: (scenario: InitialScenario, star: Star, pfive: p5): void => {
        switch (scenario) {
            case 'Random Distribution':
                randomScenario(star, pfive);
                break;
            case 'Simple Orbit':
                simpleOrbit(star, pfive);
                break;
            case 'Earth|Moon|Sun Orbit':
                earthMoonSunOrbit(star, pfive);
                break;
            case 'Solar System':
                solarSystem(star, pfive);
                break;
            case 'Solar System Collision':
                solarSystemCollision(star, pfive);
                break;
            case 'Galaxy':
                galaxy(star, pfive);
                break;
            default:
                randomScenario(star, pfive);
                break;
        }
    },
    createStarField: (window: WindowDimensions, types: InitialStarType, scenario: InitialScenario): Array<Star> => {
        let stars: Array<Star> = [];

        switch (scenario) {
            case 'Random Distribution':
                createRandomScenario(types, stars)
                break;
            case 'Simple Orbit':
                createSimpleOrbit(window, stars)
                break;
            case 'Earth|Moon|Sun Orbit':
                createEarthMoonSunOrbit(window, stars)
                break;
            case 'Solar System':
                createSolarSystem(window, stars)
                break;
            case 'Solar System Collision':
                createSolarSystemCollision(window, stars)
                break;
            case 'Galaxy':
                createGalaxy(window, stars)
                break;
            default:
                createRandomScenario(types, stars)
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
    },
}

function randomScenario(star: Star, pfive: p5): void {
    if (star.mass <= 100) {
        // Red Dwarf
        pfive.stroke(245, 171, 171)
        pfive.strokeWeight(2);
    }
    else if (star.mass <= 300) {
        // Yellow
        pfive.stroke(255)
        pfive.strokeWeight(2);
    }
    else if (star.mass <= 500) {
        // Blue
        pfive.stroke(234, 240, 240)
        pfive.strokeWeight(2);
    }
    else if (star.mass <= 999) {
        // Blue Giant
        pfive.stroke(160, 184, 250)
        pfive.strokeWeight(2);
    }
    else {
        // Black Hole
        pfive.stroke(0);
        pfive.strokeWeight(1);
    }

    pfive.point(star.pos.x, star.pos.y)
}

function simpleOrbit(star: Star, pfive: p5): void {
    if (star.mass > 999) {
        pfive.stroke(255, 255, 128)
        pfive.strokeWeight(10);
    }
    else {
        pfive.stroke(160, 184, 250)
        pfive.strokeWeight(4);
    }

    pfive.point(star.pos.x, star.pos.y)
}

function earthMoonSunOrbit(star: Star, pfive: p5): void {
    // Sun
    if (star.mass > 10000) {
        pfive.stroke(255, 255, 128)
        pfive.strokeWeight(10);
    }
    // Earth
    else if (star.mass > 999) {
        pfive.stroke(160, 184, 250)
        pfive.strokeWeight(5);
    }
    // Moon
    else {
        pfive.stroke(136, 136, 136)
        pfive.strokeWeight(3);
    }

    pfive.point(star.pos.x, star.pos.y)
}

function solarSystem(star: Star, pfive: p5): void {
    if (star.mass > 10000) {
        pfive.stroke(255)
        pfive.strokeWeight(10);
    }
    else if (star.mass > 999) {
        pfive.stroke(160, 184, 250)
        pfive.strokeWeight(4);
    }
    else {
        pfive.stroke(124, 252, 0)
        pfive.strokeWeight(2);
    }

    pfive.point(star.pos.x, star.pos.y)
}

function solarSystemCollision(star: Star, pfive: p5): void {
    if (star.mass > 999) {
        pfive.stroke(255, 255, 128)
        pfive.strokeWeight(5);
    }
    else {
        pfive.stroke(102, 153, 153)
        pfive.strokeWeight(4);
    }

    pfive.point(star.pos.x, star.pos.y)
}

function galaxy(star: Star, pfive: p5): void {
    if (star.mass <= 100) {
        // Red Dwarf
        pfive.stroke(245, 171, 171)
        pfive.strokeWeight(2);
    }
    else if (star.mass <= 300) {
        // Yellow
        pfive.stroke(255)
        pfive.strokeWeight(2);
    }
    else if (star.mass <= 500) {
        // Blue
        pfive.stroke(234, 240, 240)
        pfive.strokeWeight(2);
    }
    else if (star.mass <= 999) {
        // Blue Giant
        pfive.stroke(160, 184, 250)
        pfive.strokeWeight(2);
    }
    else {
        // Black Hole
        pfive.stroke(0, 0, 51);
        pfive.strokeWeight(10);
    }

    pfive.point(star.pos.x, star.pos.y)

    pfive.point(star.pos.x, star.pos.y)
}

export default helper;
