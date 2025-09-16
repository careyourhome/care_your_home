// script.js - CareYourHome
// Small JS for nav toggle, sidebar toggle, and product filtering

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  // Simple chip filters for products
  const chips = document.querySelectorAll('.chip');
  const products = document.querySelectorAll('.card[data-cat]');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      // toggle active class
      const isAll = chip.dataset.filter === 'all';
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.dataset.filter;
      products.forEach(card => {
        if (isAll) {
          card.style.display = '';
        } else {
          card.style.display = card.dataset.cat.includes(filter) ? '' : 'none';
        }
      });
      // scroll to products on small devices for better UX
      const grid = document.querySelector('.product-grid');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Simple contact form handler (dummy)
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const msg = contactForm.querySelector('textarea[name="message"]').value.trim();
      if (!name || !email || !msg) {
        alert('Please fill all fields.');
        return;
      }
      // For now, just simulate success
      contactForm.reset();
      alert('Thanks! Your message has been received. We will contact you soon.');
    });
  }
});
// Mobile menu toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}
