function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth scroll to contact section
function scrollToContact() {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu if open
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
  }
}