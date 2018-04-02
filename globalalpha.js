
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
console.log(ctx.canvas);

function draw() {
  for (let i = 0; i < 75; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 50, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
ctx.save();
ctx.globalAlpha = 0.1;
ctx.fillStyle = "blue";
draw();
ctx.globalAlpha = 0.9;
ctx.fillStyle = "orange";
draw();
ctx.globalAlpha = 0.8;
ctx.fillStyle = "green";
draw();
ctx.restore();
ctx.fillStyle = "lemonchiffon";
draw();
