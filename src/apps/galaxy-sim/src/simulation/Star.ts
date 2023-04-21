import '../components/GalaxyCanvas/GalaxyCanvas.css'
import Vector from './Vector';

export default class Star {
    x: number;
    y: number;
    mass: number;
    pos: Vector;
    vel: Vector;
    acc: Vector;

    constructor(x: number, y: number, mass: number = 1, initVel: Array<number> = [0, 0]) {
        this.x = x;
        this.y = y;
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

    clone(): Star {
        const pos = new Vector(this.pos.x, this.pos.y);
        const vel = new Vector(this.vel.x, this.vel.y);
        return new Star(pos.x, pos.y, this.mass, [vel.x, vel.y]);
    }

};
