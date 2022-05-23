let frameCount = 0;
let stars;
let dt;
let gravConst = 6.674 * Math.pow(10, -11);
let yearCounter;
stars = [
  { x: 250, y: 75, m: 1, v: 0 },
  { x: 275, y: 75, m: 1, v: 0 }
];
dt = 50000;
yearCounter = 0;

// Initialize and loop
export const render = () => {
  frameCount++;
  let canvas = document.getElementById("canvasRef");
  const ctx = canvas.getContext("2d");
  draw(ctx, frameCount);
  let animationFrameId = window.requestAnimationFrame(render);
};

// Use canvas context and
const draw = (ctx, frameCount) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#ffffff";
  calcPhysics(stars);
  drawStar(stars, ctx);
};

let calcPhysics = (stars) => {
  // Force on current star by all other star sources (newtons)
  let m1 = stars[0].m;
  let m2 = stars[1].m;
  let dist = (stars[0].x - stars[1].x);
  let f = (gravConst * (m1 * m2)) / Math.pow(dist, 2);
  let breaker = !(dist < 0);
  // Write some meta data to the console to help debuggin
  console.log(
    `dist: ${dist} force: ${f} vel: ${stars[0].v} position: ${stars[0].x}`
  );
  // New velocity of current star
  stars[0].x += stars[0].v * dt;
  // Position - adjust new position based on velocity and delta time.
  stars[0].v =
    dist < 0 ? stars[0].v + (f / m1) * dt : stars[0].v - (f / m1) * dt;
};

const drawStar = (stars, ctx) => {
  ctx.beginPath();
  ctx.arc(stars[0].x, stars[0].y, 5, 0, 2 * Math.PI);
  ctx.arc(stars[1].x, stars[1].y, 5, 0, 2 * Math.PI);
  ctx.fill();
};
