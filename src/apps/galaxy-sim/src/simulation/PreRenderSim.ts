import Star from "./Star";
import { calcAttractionForces } from "./simulation"
import { InitialScenario } from "../types";
export class PreRenderSim {
    scenario: InitialScenario;
    stars: Star[];
    preRenderTime: number;
    gravConst: string;
    preRenderedSim: Star[][] = []

    constructor(stars: Star[], scenario: InitialScenario, preRenderTime: number, gravConst: string) {
        this.scenario = scenario;
        this.stars = stars;
        this.preRenderTime = preRenderTime;
        this.gravConst = gravConst;
    }

    startRender() {
        const startTime = new Date().getTime(); // Get the current time in milliseconds
        let count = 0;
        while (new Date().getTime() - startTime < this.preRenderTime) {
            count++;
            let frame: Star[] = [];
            for (let i = 0; i < this.stars.length; i++) {
                let starClone = this.stars[i].clone();
                frame.push(starClone);
                this.stars[i].update();
                for (let j = 0 + i; j < this.stars.length; j++) {
                    if (i === j) continue;
                    calcAttractionForces(this.stars[i], this.stars[j], parseFloat(this.gravConst));
                }
            }
            this.preRenderedSim.push(frame)
        }
        console.log(`Simulation PreRendered ${count} Frames`)
    }

    resetRender() {
        this.preRenderedSim = []
    }
}
