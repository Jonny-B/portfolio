import './GalaxyCanvas.css'
import P5 from 'p5'

export class Star {
    x: number;
    y: number;
    p5: P5;
    mass: number;
    pos: P5.Vector;
    vel: P5.Vector;
    acc: P5.Vector;

    constructor(x: number, y: number, pfive: P5, m: number = 1, v: Array<number> = [0, 0]) {
        this.x = x;
        this.y = y;
        this.p5 = pfive;
        this.mass = m;
        this.pos = this.p5.createVector(x, y);
        // this.vel = this.p5.createVector(this.#getRandomCoord(1), this.#getRandomCoord(1))
        this.vel = this.p5.createVector(v[0], v[0])
        this.acc = this.p5.createVector();
    }

    update(): void {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    show(): void {
        if (this.mass <= 100) {
            // Red Dwarf
            this.p5.stroke(245, 171, 171)
            this.p5.strokeWeight(2);
        }
        else if (this.mass <= 300) {
            // Yellow Main Sequence
            this.p5.stroke(255)
            this.p5.strokeWeight(2);
        }
        else if (this.mass <= 500) {
            // Red Gaint
            this.p5.stroke(250, 162, 135)
            this.p5.strokeWeight(2);
        }
        else if (this.mass <= 999) {
            // Blue Giant
            this.p5.stroke(160, 184, 250)
            this.p5.strokeWeight(2);
        }
        else {
            // Black Hole
            this.p5.stroke(0);
            this.p5.strokeWeight(1);
        }
        
        this.p5.point(this.pos.x, this.pos.y)
    };
};