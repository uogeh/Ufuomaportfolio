document.addEventListener('DOMContentLoaded', () => {
  console.log("Website loaded successfully.");

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle mobile nav
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    navLinks.classList.toggle('active');
  });

  // Close nav when any nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Close nav when clicking outside the menu and hamburger
  document.addEventListener('click', (e) => {
    if (
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove('active');
    }
  });
});
