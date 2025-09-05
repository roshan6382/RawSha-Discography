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
