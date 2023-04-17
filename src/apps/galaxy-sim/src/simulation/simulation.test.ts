import Star from './Star';
import Vector from './Vector';
import { calcAttractionForces } from './simulation';

describe('calcAttractionForces', () => {
    const G = 0.5;
    const target1 = new Star(10, 134, 500);
    const target2 = new Star(20, 514, 100);

    it('should calculate the correct distance between targets', () => {
        calcAttractionForces(target1, target2, G);
        expect(target1.pos.x).toBe(10);
        expect(target1.pos.y).toBe(134);
        expect(target2.pos.x).toBe(20);
        expect(target2.pos.y).toBe(514);
    });

    it('should calculate the correct force of gravity between targets', () => {
        calcAttractionForces(target1, target2, G);
        expect(target1.acc.x).toBeCloseTo(0);
        expect(target1.acc.y).toBeCloseTo(0.009497538947423214);
        expect(target2.acc.x).toBeCloseTo(0);
        // expect(target2.acc.y).toBeCloseTo(0.07047477460080456);
    });

    it('should constrain the acceleration vector to the maximum value', () => {
        const maxAcc = 0.02;
        const target1Acc = Vector.constrainVector(Vector.div(target2.acc, target1.mass), maxAcc);
        const target2Acc = Vector.constrainVector(Vector.div(target1.acc, target2.mass), maxAcc);
        expect(target1Acc.mag() <= maxAcc).toBe(true);
        expect(target2Acc.mag() <= maxAcc).toBe(true);
    });
});
