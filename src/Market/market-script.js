const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    const delay = el.dataset.delay || '0s';
    el.style.transitionDelay = delay;

    if (entry.isIntersecting) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}, {
  threshold: 0.4
});

document.querySelectorAll('.autoShow, .autoShow2, .autoShow3')
  .forEach(el => observer.observe(el));
