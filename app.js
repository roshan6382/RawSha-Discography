// Tracks
fetch("tracks.json")
  .then(res => res.json())
  .then(tracks => {
    const trackContainer = document.getElementById("tracks-container");
    tracks.forEach(t => {
      const card = document.createElement("div");
      card.className = "track-card";
      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}">
        <h3>${t.name}</h3>
        <a href="${t.spotify_url}" target="_blank">Listen on Spotify</a>
      `;
      trackContainer.appendChild(card);
    });
  })
  .catch(console.error);

// NAVBAR HIDE/SHOW ON SCROLL
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// OPTIONAL: Particle canvas (if you have particle code)
// Example placeholder
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Sample particles for background effect
let particlesArray = [];
class Particle {
  constructor(x, y, size, color, velocityX, velocityY){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.vx = velocityX;
    this.vy = velocityY;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
    if(this.x > canvas.width) this.x = 0;
    if(this.x < 0) this.x = canvas.width;
    if(this.y > canvas.height) this.y = 0;
    if(this.y < 0) this.y = canvas.height;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

function initParticles(num=80){
  particlesArray = [];
  for(let i=0;i<num;i++){
    const size = Math.random()*2 + 1;
    const x = Math.random()*canvas.width;
    const y = Math.random()*canvas.height;
    const color = 'rgba(0,255,234,0.7)';
    const vx = (Math.random()-0.5)*0.5;
    const vy = (Math.random()-0.5)*0.5;
    particlesArray.push(new Particle(x,y,size,color,vx,vy));
  }
}
initParticles();

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

