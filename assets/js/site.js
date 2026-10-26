/* =====================================================================
   Croak and Bloom — site.js
   Tiny vanilla behaviors. No dependencies. ~2.5kb.
   ===================================================================== */

(function () {
  'use strict';

  // -------------------------------------------------------------------
  // Mobile nav toggle
  // -------------------------------------------------------------------
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var drawer = document.getElementById('mobile-nav');
    if (!toggle || !drawer) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.setAttribute('data-open', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        var first = drawer.querySelector('a');
        if (first) first.focus();
      } else {
        toggle.focus();
      }
    }

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });

    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
      }
    });
  }

  // -------------------------------------------------------------------
  // Work-grid filter chips
  // -------------------------------------------------------------------
  function initFilter() {
    var bar = document.querySelector('.filter');
    var grid = document.getElementById('work-grid');
    if (!bar || !grid) return;

    var items = Array.prototype.slice.call(grid.querySelectorAll('.work-grid__item'));

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter__chip');
      if (!btn) return;
      var filter = btn.getAttribute('data-filter');

      bar.querySelectorAll('.filter__chip').forEach(function (chip) {
        chip.setAttribute('aria-pressed', chip === btn ? 'true' : 'false');
      });

      items.forEach(function (item) {
        var match = filter === 'all' || item.getAttribute('data-collection') === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  }

  // -------------------------------------------------------------------
  // Lightbox
  // -------------------------------------------------------------------
  function initLightbox() {
    var box = document.getElementById('lightbox');
    if (!box) return;
    var img = box.querySelector('.lightbox__img');
    var closeBtn = box.querySelector('.lightbox__close');
    var lastFocus = null;

    function open(src, alt) {
      lastFocus = document.activeElement;
      img.setAttribute('src', src);
      img.setAttribute('alt', alt || '');
      box.setAttribute('data-open', 'true');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function close() {
      box.setAttribute('data-open', 'false');
      img.setAttribute('src', '');
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    // Open: any image with data-lightbox
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-lightbox]');
      if (!trigger) return;
      e.preventDefault();
      open(trigger.getAttribute('src') || trigger.getAttribute('href'),
           trigger.getAttribute('alt') || trigger.getAttribute('data-lightbox-alt') || '');
    });

    closeBtn.addEventListener('click', close);
    box.addEventListener('click', function (e) {
      if (e.target === box) close();
    });

    document.addEventListener('keydown', function (e) {
      if (box.getAttribute('data-open') === 'true' && e.key === 'Escape') close();
    });
  }

  // -------------------------------------------------------------------
  // Smooth scroll for in-page anchors
  // -------------------------------------------------------------------
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus();
    });
  }

  // -------------------------------------------------------------------
  // Mark current page in nav (works even when path includes trailing slash)
  // -------------------------------------------------------------------
  function markCurrentNav() {
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    document.querySelectorAll('.nav a, .mobile-nav a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      var clean = href.replace(/\/+$/, '') || '/';
      if (clean === path || (clean !== '/' && path.indexOf(clean) === 0)) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  // -------------------------------------------------------------------
  // Form submission (Web3Forms) via fetch, so the success redirect is
  // handled in-page rather than by the provider. Avoids Web3Forms'
  // same-domain redirect requirement, and keeps the visitor on our
  // /thanks/ page even when previewing on a different host.
  // -------------------------------------------------------------------
  function initForms() {
    var forms = document.querySelectorAll('form[action*="api.web3forms.com"]');
    if (!forms.length) return;

    Array.prototype.forEach.call(forms, function (form) {
      var status = form.querySelector('[data-form-status]');
      if (!status) {
        status = document.createElement('p');
        status.setAttribute('data-form-status', '');
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        status.style.cssText = 'margin-top:var(--space-3);font-size:var(--fs-sm);';
        form.appendChild(status);
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('[type="submit"]');
        var original = btn ? btn.textContent : '';
        status.textContent = '';

        // hCaptcha injects a textarea named h-captcha-response once solved.
        // Web3Forms rejects the submission outright when the form has hCaptcha
        // enabled, so fail here with a readable message instead.
        var captcha = form.querySelector('textarea[name="h-captcha-response"]');
        if (captcha && !captcha.value) {
          status.textContent = 'Please complete the captcha before sending.';
          if (captcha.closest('.h-captcha')) { captcha.closest('.h-captcha').scrollIntoView({ block: 'center' }); }
          return;
        }

        if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

        var payload = Object.fromEntries(new FormData(form));

        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function (r) { return r.json(); })
          .then(function (data) {
            if (data.success) {
              window.location.href = form.getAttribute('data-thanks') || '/thanks/';
            } else {
              status.textContent = data.message || 'Something went wrong. Please email us instead.';
            }
          })
          .catch(function () {
            status.textContent = 'Something went wrong. Please email us instead.';
          })
          .then(function () {
            if (btn) { btn.disabled = false; btn.textContent = original; }
          });
      });
    });
  }

  // -------------------------------------------------------------------
  // Boot
  // -------------------------------------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    initNav();
    initFilter();
    initLightbox();
    initSmoothScroll();
    markCurrentNav();
    initForms();
  }
})();
