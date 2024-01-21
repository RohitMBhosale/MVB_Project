function toggleMenu() {
    console.log('Toggle menu function called');
    const navLinks = document.querySelector('.nav-links');
    console.log(navLinks);
    navLinks.classList.toggle('show');
    console.log('Toggle class show');
  }
  