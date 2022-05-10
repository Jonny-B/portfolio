import React, { useRef, useEffect } from 'react'

const GalaxyCanvas = props => {
  
  const canvasRef = useRef(null)
  let stars;
  let dt; 
  let gravConst = (6.674 * Math.pow(10, -11))
  // let solarMass = Math.pow(10, 30);
  // let lightYear = 9.5 * Math.pow(10, 15)
  let solarMass = 1;
  let lightYear = 1;
  let yearCounter;

  useEffect(() => {
     stars = [{x: 10, y: 75, m: 1, v:0}, {x: 40, y: 75, m: 1, v:0}]
     dt = 10000000;
     yearCounter = 0;
  }, [])

  let calculateGravAccel = (star, stars) => {
    // stars.forEach((s) => {
      // (6.674×10−11)(Mass1*Mass2/Distance between2)

      // Force on current star by all other star sources (newtons)
      let m1 = (stars[0].m*solarMass)
      let m2 = (stars[1].m*solarMass)
      let distance = ((stars[0].x - stars[1].x) * lightYear)
      let xDistance = (stars[0].x - stars[1].x)
      let f = gravConst * ( m1 * m2 ) / Math.pow(distance, 2);
      console.log(f);
      // Convert velocity to account for the fact that the force is now coming from behind
      // New velocity of current star
      star.v = distance < 0 ? star.v + f / m1 * dt : star.v - f / m1 * dt;
      // Position
      star.x = star.x + (star.v * dt)
      // Ellapsed Time
      yearCounter += dt

    // })
  }

  const drawStar = (stars, ctx) => {
    console.log(`x:${stars[0].x} y: ${stars[0].y} v: ${stars[0].v}`)
    ctx.beginPath()
    ctx.arc(stars[0].x, stars[0].y, 5, 0, 2 * Math.PI);
    ctx.arc(stars[1].x, stars[1].y, 5, 0, 2 * Math.PI);
    ctx.fill()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const draw = (ctx, frameCount) => {
    // console.log(frameCount)
    if (frameCount % 30 === 0){
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = '#ffffff'
      // stars.forEach((star) => {
      calculateGravAccel(stars[0], stars)
      drawStar(stars, ctx)
      // })
    }
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      animationFrameId = window.requestAnimationFrame(render)
      draw(context, frameCount)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} width="1500" height="3000"  {...props}/>
}

export default GalaxyCanvas