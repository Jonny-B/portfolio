import '../components/GalaxyCanvas/GalaxyCanvas.css'
import P5 from 'p5'
import Vector from './Vector';
import { InitialScenario } from '../types';

export default class Star {
    x: number;
    y: number;
    p5: P5;
    mass: number;
    pos: Vector;
    vel: Vector;
    acc: Vector;

    constructor(x: number, y: number, pfive: P5, mass: number = 1, initVel: Array<number> = [0, 0]) {
        this.x = x;
        this.y = y;
        this.p5 = pfive;
        this.mass = mass;
        this.pos = new Vector(x, y);
        this.vel = new Vector(initVel[0], initVel[1])
        this.acc = new Vector(0, 0);
    }

    update(): void {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };
};
