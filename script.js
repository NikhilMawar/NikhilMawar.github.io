//Hero photos scroll
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let currentIndex = 0;

function autoSlide() {
  currentIndex++;

  slideTrack.style.transition = "transform 0.6s ease-in-out";
  slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  // If it's the cloned slide
  if (currentIndex === slideCount - 1) {
    setTimeout(() => {
      slideTrack.style.transition = "none";
      slideTrack.style.transform = "translateX(0)";
      currentIndex = 0;
    }, 600); // match transition duration
  }
}

setInterval(autoSlide, 2000); // Change image every 2 seconds

// Toggle sticky class when scrolling past threshold
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("floatingNavbar");
  const triggerPoint = window.innerHeight - 50;

  // Always sticky for pages that are not index.html
  if (window.location.pathname.includes("journey.html")) {
    navbar.classList.add("sticky");
    return;
  }

  if (window.scrollY > triggerPoint) {
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


// burger menu fix
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById("burgerMenu");
  const navCollapse = document.getElementById("navCollapse");

  burger.addEventListener("click", () => {
    navCollapse.classList.toggle("show");
  });
});

// disable cursor on mobile devices
function disableCustomCursorOnTouch() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    const cursor = document.querySelector('.cursor');
    const cursorBg = document.querySelector('.cursor-bg');
    if (cursor) cursor.style.display = 'none';
    if (cursorBg) cursorBg.style.display = 'none';
  }
}
disableCustomCursorOnTouch();






//======================== J O U R N E Y=====================
const exclamations = document.getElementById("animatedExclamations");
  let count = 0;
  const max = 6;

  function animateExclamations() {
    count = (count + 1) % (max + 1); // Cycle from 0 to 6
    exclamations.textContent = " !".repeat(count);
  }

  setInterval(animateExclamations, 600); // Change every 300ms


// Fan animation
// Fan scroll animation
const fan = document.querySelector(".fan-svg");
const fanTrack = document.querySelector(".fan-track");
const rolesLeft = document.querySelector(".roles-left");
const rolesRight = document.querySelector(".roles-right");

function syncFanHeight() {
  if (window.innerWidth <= 768) {
    const leftHeight = rolesLeft.offsetHeight;
    rolesRight.style.height = `${leftHeight}px`;
    fanTrack.style.height = `100%`;
  } else {
    rolesRight.style.height = null;
    fanTrack.style.height = null;
  }
}

window.addEventListener("load", syncFanHeight);
window.addEventListener("resize", syncFanHeight);

window.addEventListener("scroll", () => {
  syncFanHeight();

  const sectionTop = rolesLeft.offsetTop;
  const sectionHeight = rolesLeft.offsetHeight;
  const fanHeight = fan.offsetHeight;
  const trackHeight = fanTrack.clientHeight;

  // Use window.scrollY for vertical scroll position
  let scrollProgress = (window.scrollY + window.innerHeight - sectionTop) / (sectionHeight + window.innerHeight);
  scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

  const maxTranslate = trackHeight - fanHeight;
  const translateY = scrollProgress * maxTranslate;

  const rotateDeg = scrollProgress * 720;

  fan.style.transform = `translateY(${translateY}px) rotate(${rotateDeg}deg)`;
});