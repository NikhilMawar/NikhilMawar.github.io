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

document.addEventListener('mousemove', e => {
  const { clientX: x, clientY: y } = e;
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
});