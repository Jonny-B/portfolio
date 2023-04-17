import Star  from './Star'
import Vector from './Vector'


export function calcAttractionForces(target1: Star, target2: Star, gravConst: number): void {
    // Calculate Distance between targets
    const distance: Vector = Vector.sub(target2.pos, target1.pos);

    // Calculate Distance Squared
    let dsquared: number = distance.magSq();

    // Constrain distance squared
    dsquared = Vector.constrain(dsquared, 5, 9999);

    // Calculate Force of Gravity Equation and set to force vector
    const G: number = gravConst;
    const m1: number = target1.mass;
    const m2: number = target2.mass;
    // distancdsquarede.setMag(G * ((m1 * m2) / dsquared));
    distance.setMag(G * ((m1 * m2) / dsquared));
    const force: Vector = distance;

    // F / M = Acceleration
    target1.acc.add(Vector.div(force, m1));
    target2.acc.add(Vector.div(force, -m2));

    // counter += 1;
    // console.log(counter)
    // if (counter % 15 === 0) {
    //     console.log(`stars.push(new Star(${target1.pos.x}, ${target1.pos.y}, pfive, 100, [${target1.vel.x}, ${target1.vel.y}]))`)
    // }
}
