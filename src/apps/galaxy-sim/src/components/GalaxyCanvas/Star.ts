import './GalaxyCanvas.css'
import P5 from 'p5'
import { InitialScenario } from '../../types';

export class Star {
    x: number;
    y: number;
    p5: P5;
    mass: number;
    pos: P5.Vector;
    vel: P5.Vector;
    acc: P5.Vector;

    constructor(x: number, y: number, pfive: P5, mass: number = 1, initVel: Array<number> = [0, 0]) {
        this.x = x;
        this.y = y;
        this.p5 = pfive;
        this.mass = mass;
        this.pos = this.p5.createVector(x, y);
        // this.vel = this.p5.createVector(this.#getRandomCoord(1), this.#getRandomCoord(1))
        this.vel = this.p5.createVector(initVel[0], initVel[1], 0)
        this.acc = this.p5.createVector();
    }

    update(): void {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    show(scenario: InitialScenario): void {
        switch (scenario) {
            case 'Random Distribution':
                this.randomScenario();
                break;
            case 'Simple Orbit':
                this.simpleOrbit();
                break;
            case 'Earth|Moon|Sun Orbit':
                break;
            case 'Solar System':
                this.solarSystem();
                break;
            case 'Solar System Collision':
                this.solarSystemCollision();
                break;
            case 'Galaxy':
                this.galaxy();
                break;
            default:
                this.randomScenario();
                break;
        }
    };

    // Internal Functions
    randomScenario(): void {
        if (this.mass <= 100) {
            // Red Dwarf
            this.p5.stroke(245, 171, 171)
            this.p5.strokeWeight(2);
        }
        else if (this.mass <= 300) {
            // Yellow
            this.p5.stroke(255)
            this.p5.strokeWeight(2);
        }
        else if (this.mass <= 500) {
            // Blue
            this.p5.stroke(234, 240, 240)
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
    }

    simpleOrbit(): void {
        if (this.mass > 999) {
            this.p5.stroke(255)
            this.p5.strokeWeight(10);
        }
        else {
            this.p5.stroke(160, 184, 250)
            this.p5.strokeWeight(4);
        }

        this.p5.point(this.pos.x, this.pos.y)
    }

    earthMoonSunOrbit(): void {
        if (this.mass > 10000) {
            this.p5.stroke(255)
            this.p5.strokeWeight(10);
        }
        else if (this.mass > 999) {
            this.p5.stroke(160, 184, 250)
            this.p5.strokeWeight(4);
        }
        else {
            this.p5.stroke(124, 252, 0)
            this.p5.strokeWeight(2);
        }

        this.p5.point(this.pos.x, this.pos.y)
    }

    solarSystem(): void {
        if (this.mass > 10000) {
            this.p5.stroke(255)
            this.p5.strokeWeight(10);
        }
        else if (this.mass > 999) {
            this.p5.stroke(160, 184, 250)
            this.p5.strokeWeight(4);
        }
        else {
            this.p5.stroke(124, 252, 0)
            this.p5.strokeWeight(2);
        }

        this.p5.point(this.pos.x, this.pos.y)
    }

    solarSystemCollision(): void {
        if (this.mass > 10000) {
            this.p5.stroke(255)
            this.p5.strokeWeight(10);
        }
        else if (this.mass > 999) {
            this.p5.stroke(160, 184, 250)
            this.p5.strokeWeight(4);
        }
        else {
            this.p5.stroke(124, 252, 0)
            this.p5.strokeWeight(2);
        }

        this.p5.point(this.pos.x, this.pos.y)
    }

    galaxy(): void {
        if (this.mass <= 1000) {
            this.p5.stroke(255)
            this.p5.strokeWeight(3);
        }
        else {
            // Black Hole
            this.p5.stroke(255)
            this.p5.strokeWeight(10);
        }

        this.p5.point(this.pos.x, this.pos.y)

        this.p5.point(this.pos.x, this.pos.y)
    }
};