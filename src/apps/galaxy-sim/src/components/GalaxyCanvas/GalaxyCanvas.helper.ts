import { Star } from './Star'
import p5 from 'p5'
import { WindowDimensions, InitialStarType, InitialScenario } from '../../types';
import { earthMoonSunOrbit, randomScenario, simpleOrbit, solarSystem } from './GalaxyCanvas.scenarios';



const helper = {
    createStarField: (pfive: p5, window: WindowDimensions, types: InitialStarType, scenario: InitialScenario): Array<Star> => {
        let stars: Array<Star> = [];

        switch (scenario) {
            case 'Random Distribution':
                randomScenario(pfive, window, types, stars)
                break;
            case 'Simple Orbit':
                simpleOrbit(pfive, window, stars)
                break;
            case 'Earth|Moon|Sun Orbit':
                earthMoonSunOrbit(pfive, window, stars)
                break;
            case 'Solar System':
                solarSystem(pfive, window, stars)
                break;
            case 'Galaxy':
                // galaxy(pfive, window, types, stars)
                break;
            case 'Galactic Collision':
                // galacticCollision(pfive, window, types, stars)
                break;
            default:
                randomScenario(pfive, window, types, stars)
                break;
        }
        return stars;
    },
    calcAttractionForces: (target1: Star, target2: Star, pfive: p5, gravConst: string): void => {
        var force = p5.Vector.sub(target2.pos, target1.pos);
        var dsquared = force.magSq();
        dsquared = pfive.constrain(dsquared, 5, 9999);
        var G = parseFloat(gravConst);
        var m1 = target1.mass;
        var m2 = target2.mass;
        var magnitue = G * ((m1 * m2) / dsquared);
        force.setMag(magnitue);
        target1.acc.add(p5.Vector.div(force, target1.mass));
        target2.acc.add(p5.Vector.div(force, -target2.mass));
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

export default helper;
