let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    navbar.style.top = "-80px"; // scroll down
  } else {
    navbar.style.top = "0"; // scroll up
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);

const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
hamburger.innerHTML = `<span></span><span></span><span></span>`;
document.querySelector(".navbar").appendChild(hamburger);

const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

