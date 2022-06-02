import { Star } from './Star'
import p5 from 'p5'

export function getRandomValue(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const helper = {
    createStarField: (pfive: p5): Array<Star> => {
        let stars: Array<Star> = [];

        for (let i = 0; i < 350; i++) {
            // Red Dwarf
            let x = getRandomValue(1000, 500);
            let y = getRandomValue(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomValue(1, 100)));
        }
        for (let i = 0; i < 150; i++) {
            // Yellow Stars
            let x = getRandomValue(1000, 500);
            let y = getRandomValue(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomValue(101, 300)));
        }
        for (let i = 0; i < 50; i++) {
            // Red Giants
            let x = getRandomValue(1000, 500);
            let y = getRandomValue(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomValue(301, 500)));
        }
        for (let i = 0; i < 12; i++) {
            // Blue Giants
            let x = getRandomValue(1000, 500);
            let y = getRandomValue(1000, 500);
            stars.push(new Star(x, y, pfive, getRandomValue(501, 999)));
        }

        // Black Holes
        stars.push(new Star(1050, 1050, pfive, 1000, [0, 0]));

        return stars;
    }
}

export default helper;
