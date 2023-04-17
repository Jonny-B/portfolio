import Star  from '../../simulation/Star'
import p5 from 'p5'
import { WindowDimensions, InitialStarType, InitialScenario } from '../../types';
import { earthMoonSunOrbit, randomScenario, simpleOrbit, solarSystem, solarSystemCollision, galaxy } from './GalaxyCanvas.scenarios';

const helper = {
    createStarField: (pfive: p5, window: WindowDimensions, types: InitialStarType, scenario: InitialScenario): Array<Star> => {
        let stars: Array<Star> = [];

        switch (scenario) {
            case 'Random Distribution':
                randomScenario(pfive, types, stars)
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
            case 'Solar System Collision':
                solarSystemCollision(pfive, window, stars)
                break;
            case 'Galaxy':
                galaxy(pfive, window, stars)
                break;
            default:
                randomScenario(pfive, types, stars)
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

export default helper;
