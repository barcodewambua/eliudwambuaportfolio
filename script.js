// Minimal JS: set year and mobile nav toggle
document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
  // Custom nav toggle (no Bootstrap)
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.classList.toggle('open');
    });
  }

  // Adjust body padding to account for fixed header so content isn't hidden
  function adjustHeaderSpacing(){
    const header = document.querySelector('.site-header');
    if(!header) return;
    const h = header.offsetHeight || parseInt(getComputedStyle(header).height,10) || 72;
    // set CSS variable (fallback) and inline body padding
    document.documentElement.style.setProperty('--header-height', h + 'px');
    document.body.style.paddingTop = h + 'px';
  }

  // run initially and on resize to handle responsive header height
  adjustHeaderSpacing();
  window.addEventListener('resize', adjustHeaderSpacing);
  window.addEventListener('load', adjustHeaderSpacing);

  // Gallery modal: open clicked gallery images in a Bootstrap modal
  const galleryImages = document.querySelectorAll('.gallery-img');
  const modalImage = document.getElementById('modalImage');
  const imageModalEl = document.getElementById('imageModal');
  let bsModal;
  if (imageModalEl && window.bootstrap) {
    bsModal = new bootstrap.Modal(imageModalEl);
  }
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      const full = img.dataset.full || img.src;
      if (modalImage) {
        modalImage.src = full;
        modalImage.alt = img.alt || '';
        if (bsModal) bsModal.show();
      }
    });
  });

  // simple scroll‑reveal animation using IntersectionObserver
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // elements we want to animate: all sections plus hero
  const toReveal = document.querySelectorAll('main section, .hero');
  toReveal.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // animate navigation links with a slight stagger
  const navLinks = document.querySelectorAll('.primary-nav a');
  navLinks.forEach((link, idx) => {
    link.classList.add('reveal');
    link.style.transitionDelay = `${idx * 0.05}s`;
    revealObserver.observe(link);
  });

  // also apply to every element inside <body>, except background video and scripts/styles
  const allBodyEls = document.body.querySelectorAll('*');
  allBodyEls.forEach(el => {
    const tag = el.tagName.toLowerCase();
    if (tag === 'script' || tag === 'style' || el.id === 'bg-video') return;
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    }
  });

});
