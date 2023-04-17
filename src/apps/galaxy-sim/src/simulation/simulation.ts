import Star from './Star'
import Vector from './Vector'


export function calcAttractionForces(target1: Star, target2: Star, gravitationalConstant: number): void {
    // Calculate Distance between targets
    const distance: Vector = Vector.sub(target2.pos, target1.pos);

    // Calculate and Constrain Distance Squared
    const dsquared: number = Vector.constrain(distance.magSq(), 5, 9999);

    // Calculate Force of Gravity Equation and set to force vector
    const G: number = gravitationalConstant;
    const m1: number = target1.mass;
    const m2: number = target2.mass;

    // distancdsquarede.setMag(G * ((m1 * m2) / dsquared));
    distance.setMag(G * ((m1 * m2) / dsquared));
    const force: Vector = distance;

    // Calculate/Constrain the acceleration vector acceleration vector
    const target1Acc = Vector.constrainVector(Vector.div(force, m1), 0.02);
    const target2Acc = Vector.constrainVector(Vector.div(force, m2), 0.02);

    // Update the acceleration of the targets
    target1.acc.add(target1Acc);
    target2.acc.sub(target2Acc);
}
