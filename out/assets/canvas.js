const canvas = document.getElementsByTagName('canvas')[0];
const c = canvas.getContext('2d');
const PR = window.devicePixelRatio || 1;
canvas.width = window.innerWidth * PR * 0.4;
canvas.height = window.innerHeight * PR;
c.scale(PR, PR);
c.globalAlpha = 0.6;
let size = Math.max(canvas.width / 20, 100);
let step = size / 2;
const noise = 100;
const TAU = Math.PI * 2;

function getNextX(prevX) {
  const off = (Math.random() - 0.5) * noise;
  const newX = prevX + off;
  return newX > canvas.width || newX < 0 ? getNextX(prevX) : newX;
}

class Ribbon {
  constructor(si, st) {
    this.numPts = Math.floor(Math.random() * 3) + 3;
    this.size = si || size;
    this.step = st || step;
    this.offset = Math.random();
    this.pts = [];
    this.hue = Math.floor((Math.random() - 0.5) * 0.2); // min 2 points

    this.pts.push({
      x: canvas.width * this.offset + this.step,
      y: 0
    });
    this.pts.push({
      x: canvas.width * this.offset - this.step,
      y: 0
    });

    for (let i = 0; i < this.numPts - 2; i++) {
      this.pts.push({
        x: canvas.width * this.offset + this.step * (Math.random() - 0.5),
        y: 0
      });
    }
  }

  shouldUpdate() {
    return this.pts[this.pts.length - 1].y < canvas.height + this.step;
  }

  update() {
    c.beginPath();
    c.moveTo(this.pts[0].x, this.pts[0].y);

    for (let i = 1; i < this.pts.length; i++) {
      c.lineTo(this.pts[i].x, this.pts[i].y);
    }

    let next = {
      x: getNextX(this.pts[this.pts.length - 1].x),
      y: this.pts[this.pts.length - 1].y + (Math.random() * 2 - 0.25) * this.step
    };
    c.lineTo(next.x, next.y);
    c.closePath();
    this.hue -= TAU / 100;
    let r = Math.sin(this.hue + Math.PI / 3 * 0) * 127 + 128 << 16;
    let g = Math.sin(this.hue + Math.PI / 3 * 1) * 127 + 128 << 8;
    let b = Math.sin(this.hue + Math.PI / 3 * 2) * 127 + 128 << 1;
    c.fillStyle = '#' + (r | g | b).toString(16);
    c.fill();

    for (let i = 0; i < this.pts.length - 1; i++) {
      this.pts[i] = this.pts[i + 1];
    }

    this.pts[this.pts.length - 1] = next;
  }

}

let ribbons = [];

function init() {
  for (let i = 0; i < Math.min(canvas.width / 50, 10); i++) {
    ribbons.push(new Ribbon());
  }

  draw();
}

function draw() {
  let shouldUpdate = false;

  for (let i = 0; i < ribbons.length; i++) {
    if (ribbons[i].shouldUpdate()) {
      ribbons[i].update();
      shouldUpdate = true;
    }
  }

  if (shouldUpdate) requestAnimationFrame(draw);
}

init();