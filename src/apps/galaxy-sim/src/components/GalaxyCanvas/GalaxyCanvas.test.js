import helper from "./GalaxyCanvas.helper"
import p5 from 'p5'

describe('GalaxyCanvas', () => {
    describe('createStarField', () => {
        it('should return an array of 563 stars', () => {
            let result = helper.createStarField({ createVector: () => { } })

            expect(result.length).toBe(563)
        })
    })
})