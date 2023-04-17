import {
    createEarthMoonSunOrbit,
    createGalaxy,
    createRandomScenario,
    createSimpleOrbit,
    createSolarSystem,
    createSolarSystemCollision,
} from './GalaxyCanvas.scenarios';
import Star from '../../simulation/Star';
import { InitialScenario, InitialStarType, WindowDimensions } from '../../types';
import helper from './GalaxyCanvas.helper';

describe('createEarthMoonSunOrbit', () => {
    it('returns an array of three stars', () => {
        const window: WindowDimensions = { width: 1000, height: 1000 };
        const stars: Array<Star> = [];
        createEarthMoonSunOrbit(window, stars);
        expect(stars.length).toBe(3);
    });
});

describe('createSimpleOrbit', () => {
    it('returns an array of two stars', () => {
        const window: WindowDimensions = { width: 1000, height: 1000 };
        const stars: Array<Star> = [];
        createSimpleOrbit(window, stars);
        expect(stars.length).toBe(2);
    });
});

describe('createSolarSystem', () => {
    it('returns an array of five stars', () => {
        const window: WindowDimensions = { width: 1000, height: 1000 };
        const stars: Array<Star> = [];
        createSolarSystem(window, stars);
        expect(stars.length).toBe(10);
    });
});

describe('createSolarSystemCollision', () => {
    it('returns an array of three stars', () => {
        const window: WindowDimensions = { width: 1000, height: 1000 };
        const stars: Array<Star> = [];
        createSolarSystemCollision(window, stars);
        expect(stars.length).toBe(24);
    });
});

describe('createRandomScenario', () => {
    it('returns an array of stars with length equal to the input', () => {
        const types: InitialStarType = { blackHoles: 1, blueGiants: 10, blues: 25, yellows: 50, redDwarfs: 100 };
        const stars: Array<Star> = [];
        createRandomScenario(types, stars);
        expect(stars.length).toBe(186);
    });
});

describe('createGalaxy', () => {
    it('returns an array of 100 stars', () => {
        const window: WindowDimensions = { width: 1000, height: 1000 };
        const stars: Array<Star> = [];
        createGalaxy(window, stars);
        expect(stars.length).toBe(219);
    });
});

describe('GalaxyCanvas.helper', () => {
    describe('getRandomValue', () => {
        it('should return a value between min and max, inclusive of min', () => {
            const min = 0;
            const max = 10;
            const randomValue = helper.getRandomValue(min, max);
            expect(randomValue).toBeGreaterThanOrEqual(min);
            expect(randomValue).toBeLessThanOrEqual(max);
        });
    });

    describe('getWindowDimensions', () => {
        it('should return an object with the width and height of the window', () => {
            const mockWindow = { innerWidth: 500, innerHeight: 400 } as unknown as Window;
            const dimensions = helper.getWindowDimensions(mockWindow);
            expect(dimensions).toEqual({ width: 500, height: 400 });
        });
    });

    describe('createStarField', () => {
        it('should return an array of Star objects', () => {
            const windowDimensions = { width: 500, height: 400 };
            const types: InitialStarType = {
                redDwarfs: 5,
                yellows: 5,
                blues: 5,
                blueGiants: 5,
                blackHoles: 1,
            };
            const scenario: InitialScenario = 'Random Distribution';
            const stars = helper.createStarField(windowDimensions, types, scenario);
            expect(stars.length).toEqual(21);
            stars.forEach((star: Star) => expect(star).toBeInstanceOf(Star));
        });
    });
});
