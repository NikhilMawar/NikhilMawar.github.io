// Toggle sticky class when scrolling past threshold
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("floatingNavbar");
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Smooth scroll to contact section
function scrollToContact() {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
  }
}

//cursor
const cursor = document.querySelector('.cursor');
const cursorBg = document.querySelector('.cursor-bg');

let mouseX = 0;
let mouseY = 0;
let curX = 0;
let curY = 0;
let bgX = 0;
let bgY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Main image cursor follows fast
  curX += (mouseX - curX) * 0.3;
  curY += (mouseY - curY) * 0.3;

  // Background circle trails behind
  bgX += (mouseX - bgX) * 0.1;
  bgY += (mouseY - bgY) * 0.1;

  cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
  cursorBg.style.transform = `translate(${bgX}px, ${bgY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover effect for links and buttons
const hoverTargets = document.querySelectorAll('a, button');

hoverTargets.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorImg.classList.add('grow');
  });
  el.addEventListener('mouseleave', () => {
    cursorImg.classList.remove('grow');
  });
});