// Aldea SOS Paraguay — site JS (community, non-official)
// Nav toggle. Demo theme toggle removed 2026-08-22 (light-only theme).

(function() {
  'use strict';

  // === NAV TOGGLE ===
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const open = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.textContent = open ? '✕' : '☰';
    });
  }

  // === THEME (light-only, no toggle) ===
  // Ensure no stale dark-mode attributes from prior sessions are honored.
  document.documentElement.removeAttribute('data-theme');

  // === SMOOTH SCROLL for anchor links ===
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', (e) => {
      const t = document.getElementById(link.getAttribute('href').substring(1));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === FAQ ACCORDION ===
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) item.classList.toggle('open');
    });
  });
})();