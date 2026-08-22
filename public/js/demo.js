/* Aldea SOS Paraguay — Demo Mode framework
   ----------------------------------------------------------------
   This module provides the in-browser mock for:
   - Form submissions (donate, sponsor, volunteer, contact, etc.)
   - Demo authentication (mock portal)
   - Client-side search across JSON data
   - Donation flow UI controller (4-step)
   - Sponsor flow UI controller (signup + login + dashboard)
   ----------------------------------------------------------------
   All money/identity actions are SIMULATED. No network calls,
   no real payments, no real emails. On handoff, the org replaces
   `submit()` and `login()` calls with their real provider adapters.
*/

(function() {
  'use strict';

  /* ============================================================
     1. Mock submit — single entry point for ALL forms
     ============================================================ */
  window.Demo = window.Demo || {};

  Demo.submit = async function(formType, payload) {
    // Simulate network latency
    await new Promise(r => setTimeout(r, 600 + Math.random() * 600));
    // Always succeed — for demo. In production, this would POST to /api/forms
    return {
      ok: true,
      formType,
      payload,
      receiptId: 'DEMO-' + Date.now().toString(36).toUpperCase(),
      timestamp: new Date().toISOString(),
      message: 'Tu solicitud fue recibida en el demo. En la versión real, este envío se procesa a través del sistema oficial de la organización.'
    };
  };

  /* ============================================================
     2. Demo auth — localStorage-based
     ============================================================ */
  Demo.auth = {
    storageKey: 'demo-portal-session',
    demoUser: {
      email: 'demo@aldeas-sos.paragu-ai.com',
      password: 'demo',  // public demo password, clearly labeled
      name: 'Cuenta Demo',
      role: 'donor'
    },
    login(email, password) {
      if (email === this.demoUser.email && password === this.demoUser.password) {
        const session = { email, name: this.demoUser.name, loggedInAt: Date.now() };
        localStorage.setItem(this.storageKey, JSON.stringify(session));
        return { ok: true, session };
      }
      return { ok: false, error: 'Email o contraseña incorrectos. (Demo: demo@aldeas-sos.paragu-ai.com / demo)' };
    },
    logout() {
      localStorage.removeItem(this.storageKey);
    },
    current() {
      try { return JSON.parse(localStorage.getItem(this.storageKey)); } catch { return null; }
    },
    isLoggedIn() { return !!this.current(); }
  };

  /* ============================================================
     3. Search — fetches JSON files and indexes them
     ============================================================ */
  Demo.search = {
    index: null,
    async load() {
      if (this.index) return this.index;
      const files = ['programs', 'aldeas', 'stories', 'news'];
      const index = [];
      for (const f of files) {
        try {
          const resp = await fetch(`/data/${f}.json`);
          if (!resp.ok) continue;
          const data = await resp.json();
          const items = data.stories || data.posts || data;
          for (const item of items) {
            index.push({
              source: f,
              id: item.id || item.name || '',
              title: item.title || item.name || item.summary || '',
              text: [
                item.title, item.summary, item.body_md, item.description || '',
                item.category || '', item.department || '', item.city || ''
              ].filter(Boolean).join(' '),
              url: this.urlFor(f, item),
              emoji: item.image_emoji || ''
            });
          }
        } catch (e) { /* skip missing files */ }
      }
      this.index = index;
      return index;
    },
    urlFor(source, item) {
      if (source === 'programs') return `/programs/#${item.id}`;
      if (source === 'aldeas') return `/sobre-nosotros/#${item.id}`;
      if (source === 'stories') return `/historias/${item.id}/`;
      if (source === 'news') return `/noticias/${item.id}/`;
      return '/';
    },
    async query(q) {
      const idx = await this.load();
      if (!q) return [];
      const needle = q.toLowerCase().trim();
      const words = needle.split(/\s+/);
      return idx
        .map(item => {
          const haystack = (item.text + ' ' + item.title).toLowerCase();
          let score = 0;
          for (const w of words) {
            if (haystack.includes(w)) score += 1;
            if (item.title.toLowerCase().includes(w)) score += 2;
          }
          return { item, score };
        })
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12)
        .map(r => r.item);
    }
  };

  /* ============================================================
     4. Donation flow — 4-step controller
     ============================================================ */
  Demo.donate = {
    state: { amount: 50000, frequency: 'monthly', method: null, donor: {} },
    presets: [50000, 100000, 200000, 500000],

    init() {
      // Wire up amount buttons and frequency toggle if present on page
      document.querySelectorAll('[data-donate]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.amount = parseInt(btn.dataset.donate, 10);
          this.render();
        });
      });
      document.querySelectorAll('[data-frequency]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.frequency = btn.dataset.frequency;
          this.render();
        });
      });
      this.render();
    },

    selectMethod(m) {
      this.state.method = m;
    },

    async submit(donorInfo) {
      this.state.donor = donorInfo;
      return await Demo.submit('donation', this.state);
    },

    render() {
      // Update amount display
      const amountDisplay = document.getElementById('donate-amount');
      if (amountDisplay) {
        amountDisplay.textContent = new Intl.NumberFormat('es-PY').format(this.state.amount);
      }
      // Highlight selected amount button
      document.querySelectorAll('[data-donate]').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.donate, 10) === this.state.amount);
      });
      // Highlight selected frequency
      document.querySelectorAll('[data-frequency]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.frequency === this.state.frequency);
      });
      // Update frequency label
      const freqLabel = document.getElementById('frequency-label');
      if (freqLabel) {
        freqLabel.textContent = this.state.frequency === 'monthly' ? 'mensual' : 'única';
      }
    }
  };

  /* ============================================================
     5. Theme — no longer used (light-only). Stub retained for
        backward compatibility with any older page that references
        Demo.theme.toggle(). Always no-op.
     ============================================================ */
  Demo.theme = {
    set(_t) { /* no-op */ },
    current() { return 'light'; },
    toggle() { /* no-op */ }
  };

  /* ============================================================
     6. Navigation toggle
     ============================================================ */
  Demo.nav = {
    init() {
      const toggleBtn = document.querySelector('.nav-toggle');
      const nav = document.querySelector('.primary-nav');
      if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
          const open = nav.classList.toggle('open');
          toggleBtn.setAttribute('aria-expanded', open);
          toggleBtn.textContent = open ? '✕' : '☰';
        });
      }
      // FAQ accordion
      document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          if (item) item.classList.toggle('open');
        });
      });
    }
  };

  /* ============================================================
     7. Smooth scroll
     ============================================================ */
  Demo.smoothScroll = function() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
      link.addEventListener('click', (e) => {
        const t = document.getElementById(link.getAttribute('href').substring(1));
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  };

  /* ============================================================
     8. Boot
     ============================================================ */
  Demo.boot = function() {
    Demo.nav.init();
    Demo.smoothScroll();

    // Initialize donate flow if on donate page
    if (document.querySelector('[data-donate]')) {
      Demo.donate.init();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Demo.boot);
  } else {
    Demo.boot();
  }
})();