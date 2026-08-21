// Aldea SOS Paraguay - Main JS
// Interactivity: nav, theme, FAQ, donation, WhatsApp widget

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

  // === SMOOTH SCROLL ===
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

    const style = document.createElement('style');
    style.textContent = '.in-view { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);
  }

  // === WHATSAPP WIDGET ===
  // Floating WhatsApp button similar to the official site
  if (!document.querySelector('.whatsapp-fab')) {
    const waFab = document.createElement('a');
    waFab.href = 'https://wa.me/595983836906?text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20aldeas%20SOS%20Paraguay';
    waFab.className = 'whatsapp-fab';
    waFab.setAttribute('aria-label', 'Contactar por WhatsApp sobre Aldeas SOS Paraguay');
    waFab.setAttribute('target', '_blank');
    waFab.setAttribute('rel', 'noopener');
    waFab.innerHTML = `
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      <span class="wa-fab-tooltip">¿En qué te podemos ayudar?</span>
    `;
    document.body.appendChild(waFab);

    // Show widget after 5s of inactivity (avoid showing immediately)
    setTimeout(() => {
      waFab.classList.add('visible');
    }, 2500);
  }
})();
