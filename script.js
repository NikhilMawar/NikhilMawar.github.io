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
  if (
  window.location.pathname.includes("journey.html") ||
  window.location.pathname.includes("contact.html")) {
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


//==========================================AI CHAT BOT======================================================/
(function() {
  const sphere = document.getElementById("sphere");
  if (!sphere) return; // Skip if sphere not on this page

  const eyes = sphere.querySelector(".eyes");
  const leftWrap = eyes.querySelector(".eye-wrap.left");
  const rightWrap = eyes.querySelector(".eye-wrap.right");
  const blushLeft = sphere.querySelector(".blush-left");
  const blushRight = sphere.querySelector(".blush-right");
  const bubble = document.getElementById("text-bubble");

  // Eyes follow mouse
  window.addEventListener("mousemove", (e) => {
    const r = sphere.getBoundingClientRect();
    const cx = r.left + r.width/2;
    const cy = r.top + r.height/2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    const ex = Math.max(-40, Math.min(40, dx / 5));
    const ey = Math.max(-40, Math.min(40, dy / 5));

    eyes.style.transform = `translate(${ex}px, ${ey}px)`;

    const centerThreshold = 24;
    const distance = Math.abs(dx);
    let converge = 0;

    if(distance < centerThreshold){
      converge = (centerThreshold - distance) * 0.45;
      eyes.classList.add("focused");
      blushLeft.classList.add("show");
      blushRight.classList.add("show");
    } else {
      eyes.classList.remove("focused");
      blushLeft.classList.remove("show");
      blushRight.classList.remove("show");
    }

    leftWrap.style.transform = `translateX(${converge}px)`;
    rightWrap.style.transform = `translateX(${-converge}px)`;
  });

  // Blink
  function blink(){
    eyes.classList.add("blink");
    setTimeout(()=>eyes.classList.remove("blink"),220);
    setTimeout(blink, 2200 + Math.random()*4200);
  }
  blink();

  // Mobile random eye movement
function randomEyesMobile() {
  if (window.innerWidth <= 768) { // only for mobile/tablet
    const maxOffset = 40; // same as desktop limits
    const ex = (Math.random() * maxOffset * 2) - maxOffset; // -40 to 40
    const ey = (Math.random() * maxOffset * 2) - maxOffset;

    eyes.style.transform = `translate(${ex}px, ${ey}px)`;

    // Optional: small eye wrap converge
    const converge = (Math.random() * 20) - 10; // -10 to 10 px
    leftWrap.style.transform = `translateX(${converge}px)`;
    rightWrap.style.transform = `translateX(${-converge}px)`;
  }
}

// Run randomly every 0.5–1.5s for natural movement
function startRandomEyesMobile() {
  const interval = 500 + Math.random() * 1000;
  setTimeout(() => {
    randomEyesMobile();
    startRandomEyesMobile();
  }, interval);
}

// Start mobile random eyes after page load
if (window.innerWidth <= 768) startRandomEyesMobile();

  // Text bubble typing effect
  const messages = [
    "Don't be shy to contact me!",
    "The journey was like a roller coaster.",
    "Every project taught me something new.",
    "Creativity is my fuel."
  ];
  let msgIndex = 0;
  let charIndex = 0;

  function typeMessage(){
    if(charIndex < messages[msgIndex].length){
      bubble.textContent += messages[msgIndex][charIndex];
      charIndex++;
      setTimeout(typeMessage, 60);
    } else {
      setTimeout(() => { eraseMessage(); }, 2000);
    }
  }

  function eraseMessage(){
    if(charIndex > 0){
      bubble.textContent = bubble.textContent.slice(0, -1);
      charIndex--;
      setTimeout(eraseMessage, 40);
    } else {
      msgIndex = (msgIndex + 1) % messages.length;
      setTimeout(typeMessage, 500);
    }
  }

  typeMessage();
})();

//======================mobile ai============//





//==========================================================C O N T A C T   P A G E ==================================================
const greetings = document.querySelectorAll('.greeting-svg');
let greetIndex = 0;

function cycleGreetings() {
  greetings.forEach((greet, i) => {
    greet.classList.toggle('active', i === greetIndex);
  });
  greetIndex = (greetIndex + 1) % greetings.length;
}

setInterval(cycleGreetings, 800); // change every 0.8 seconds
cycleGreetings(); // initial run