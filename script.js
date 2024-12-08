const canvas = document.getElementById("effectsCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particles for fire and bubbles
const particles = [];
const colors = ["#ff4500", "#ff6347", "#ff8c00", "#ffa500", "#ffdab9"];

class Particle {
  constructor(x, y, color, size) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
    this.speedY = Math.random() * -2 - 1;
    this.speedX = (Math.random() - 0.5) * 2;
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.size *= 0.95; // Shrink over time
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createParticles() {
  for (let i = 0; i < 5; i++) {
    particles.push(
      new Particle(
        canvas.width / 2,
        canvas.height,
        colors[Math.floor(Math.random() * colors.length)],
        Math.random() * 10 + 5
      )
    );
  }
}

function handleParticles() {
  particles.forEach((particle, index) => {
    if (particle.size < 0.5) particles.splice(index, 1); // Remove tiny particles
    particle.update();
    particle.draw();
  });
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createParticles();
  handleParticles();
  requestAnimationFrame(animate);
}

// Resize canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();
