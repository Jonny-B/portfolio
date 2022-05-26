// Any time you need a operation function not on this.p5
import p5 from 'p5'
import './GalaxyCanvas.css'

export class Star {
    constructor(x, y, pfive, m = 1, v = [0, 0]) {
        this.x = x;
        this.y = y;
        this.p5 = pfive;
        this.mass = m;
        this.pos = this.p5.createVector(x, y);
        // this.vel = this.p5.createVector(this.#getRandomCoord(1), this.#getRandomCoord(1))
        this.vel = this.p5.createVector(v[0], v[0])
        this.acc = this.p5.createVector();
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    show() {
        if (this.mass <= 100) {
            // Red Dwarf
            this.p5.stroke(128, 0, 0)
            this.p5.strokeWeight(1);
        }
        else if (this.mass <= 300) {
            // Yellow Main Sequence
            this.p5.stroke(255)
            this.p5.strokeWeight(1);
        }
        else if (this.mass <= 500) {
            // Red Gaint
            this.p5.stroke(178, 34, 34)
            this.p5.strokeWeight(1);
        }
        else if (this.mass <= 999) {
            // Blue Giant
            this.p5.stroke(0, 0, 255)
            this.p5.strokeWeight(1);
        }
        else {
            // Black Hole
            this.p5.stroke(0);
            this.p5.strokeWeight(1);
        }
        this.p5.point(this.pos.x, this.pos.y)
    };

    #getRandomCoord(max) {
        return Math.round(Math.random() * 100) / 100;
    }

};