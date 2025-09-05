const items = document.querySelectorAll('.timeline-item');

function checkTimeline() {
  const triggerBottom = window.innerHeight * 0.85;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < triggerBottom) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkTimeline);
checkTimeline();
