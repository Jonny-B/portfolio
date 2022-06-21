import { Star } from './Star'
import p5 from 'p5'
import { WindowDimensions, InitialStarType, InitialScenario } from '../../types';
import { randomScenario } from './GalaxyCanvas.scenarios';



const helper = {
    createStarField: (pfive: p5, window: WindowDimensions, types: InitialStarType, scenario: InitialScenario): Array<Star> => {
        let stars: Array<Star> = [];

        switch (scenario) {
            case 'Random Distribution':
                randomScenario(pfive, window, types, stars)
                break;
            case 'Simple Orbit':
                // simpleOrbit(pfive, window, types, stars)
                break;
            case 'Solar System':
                // solarSystem(pfive, window, types, stars)
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
    getWindowDimensions: (window: Window): WindowDimensions => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
}

export default helper;
