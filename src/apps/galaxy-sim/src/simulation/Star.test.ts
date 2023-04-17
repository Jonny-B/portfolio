import Star from './Star';
import Vector from './Vector';

describe('Star', () => {
    it('should create a new star with the correct properties', () => {
        const star = new Star(100, 200, 5, [10, 20]);

        expect(star.x).toBe(100);
        expect(star.y).toBe(200);
        expect(star.mass).toBe(5);
        expect(star.pos).toEqual(new Vector(100, 200));
        expect(star.vel).toEqual(new Vector(10, 20));
        expect(star.acc).toEqual(new Vector(0, 0));
    });

    it('should update the star correctly', () => {
        const star = new Star(100, 200, 5, [10, 20]);
        star.acc = new Vector(2, 3);

        star.update();

        expect(star.vel).toEqual(new Vector(12, 23));
        expect(star.pos).toEqual(new Vector(112, 223));
        expect(star.acc).toEqual(new Vector(0, 0));
    });
});
