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
const cursorImg = document.querySelector('.cursor-img');

let mouseX = 0;
let mouseY = 0;
let curX = 0;
let curY = 0;
let bgX = 0;
let bgY = 0;
let angle = 0;
let scale = 1;
let targetScale = 1;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Hover effect logic
const hoverTargets = document.querySelectorAll('a, button');
hoverTargets.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    targetScale = 1.8;
  });
  el.addEventListener('mouseleave', () => {
    targetScale = 1;
  });
});

// Animate cursor movement, rotation, and smooth scaling
function animateCursor() {
  curX += (mouseX - curX) * 0.3;
  curY += (mouseY - curY) * 0.3;
  bgX += (mouseX - bgX) * 0.1;
  bgY += (mouseY - bgY) * 0.1;

  // Smooth scale transition
  scale += (targetScale - scale) * 0.15;

  // Continuous rotation
  angle = (angle + 2) % 360;

  cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
  cursorBg.style.transform = `translate(${bgX}px, ${bgY}px) translate(-50%, -50%)`;

  cursorImg.style.transform = `rotate(${angle}deg) scale(${scale})`;

  requestAnimationFrame(animateCursor);
}

animateCursor();