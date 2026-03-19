// Set year and mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  // Set copyright year(s)
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const year2 = document.getElementById('year2');
  if (year2) year2.textContent = new Date().getFullYear();


  // Adjust body padding to account for fixed header
  function adjustHeaderSpacing() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const h = header.offsetHeight || parseInt(getComputedStyle(header).height, 10) || 72;
    document.documentElement.style.setProperty('--header-height', h + 'px');
    document.body.style.paddingTop = h + 'px';
  }

  adjustHeaderSpacing();
  window.addEventListener('resize', adjustHeaderSpacing);
  window.addEventListener('load', adjustHeaderSpacing);

  // Scroll-reveal animation using IntersectionObserver
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Reveal sections and hero
  document.querySelectorAll('main section, .hero').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Animate navigation links with a slight stagger
  document.querySelectorAll('.primary-nav a').forEach((link, idx) => {
    link.classList.add('reveal');
    link.style.transitionDelay = `${idx * 0.05}s`;
    revealObserver.observe(link);
  });
});
