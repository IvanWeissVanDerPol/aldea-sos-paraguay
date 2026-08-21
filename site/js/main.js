// Aldea SOS Paraguay - Main JS
// Interactivity: nav toggle, theme toggle, FAQ, donation calculator

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

  // === THEME TOGGLE ===
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    } else if (stored === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.textContent = '🌙';
    }
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  // === FAQ ===
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
      const expanded = item.classList.contains('open');
      btn.setAttribute('aria-expanded', expanded);
    });
  });

  // === DONATION CALCULATOR ===
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customAmount = document.getElementById('customAmount');
  const freqButtons = document.querySelectorAll('.frequency-toggle button');

  if (amountBtns.length > 0) {
    amountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        amountBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (customAmount) customAmount.value = btn.dataset.amount;
      });
    });
  }

  if (freqButtons.length > 0) {
    freqButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        freqButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  // === SMOOTH SCROLL for anchor links ===
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === ANIMATION ON SCROLL ===
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.card, .program-card, .aldea-card, .step, .stat-tile, .impact-stats .stat-tile').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Add in-view styles
  const style = document.createElement('style');
  style.textContent = `
    .in-view {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
})();
