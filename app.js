// Load Tracks
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

// Minimal Neon Particles
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
const colors = ["#00ffea","#f3b3c3","#ff00ff"];
for(let i=0;i<40;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-0.5)*0.5,
    dy:(Math.random()-0.5)*0.5,
    color:colors[Math.floor(Math.random()*colors.length)]
  });
}
let mouse={x:null,y:null};
window.addEventListener("mousemove",e=>{mouse.x=e.x;mouse.y=e.y;});
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=p.color;
    ctx.shadowColor=p.color;
    ctx.shadowBlur=6;
    ctx.fill();
    p.x+=p.dx;p.y+=p.dy;
    if(mouse.x&&mouse.y){p.x+=(mouse.x-p.x)*0.0005;p.y+=(mouse.y-p.y)*0.0005;}
    if(p.x>canvas.width)p.x=0;
    if(p.x<0)p.x=canvas.width;
    if(p.y>canvas.height)p.y=0;
    if(p.y<0)p.y=canvas.height;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
