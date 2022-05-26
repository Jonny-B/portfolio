// Any time you need a operation function not on this.p5
import p5 from 'p5'

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
        if (this.mass >= 1000) {
            this.p5.stroke(0)
            this.p5.strokeWeight(15);
        }
        else {
            this.p5.stroke(255);
            this.p5.strokeWeight(4);
        }
        this.p5.point(this.pos.x, this.pos.y)
    };

    #getRandomCoord(max) {
        return Math.round(Math.random() * 100) / 100;
    }

};