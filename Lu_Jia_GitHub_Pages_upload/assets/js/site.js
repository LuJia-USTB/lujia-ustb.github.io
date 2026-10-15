/* Small, dependency-free enhancements. The full content works without JS. */
'use strict';
document.documentElement.classList.remove('no-js');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.masthead__menu');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}
const topLink = document.querySelector('.back-top');
function updateBackToTop() {
  if (topLink) topLink.classList.toggle('visible', window.scrollY > 650);
}
window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();
const links = Array.from(document.querySelectorAll('.masthead__menu a[href^="#"]'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
function updateCurrentSection() {
  const header = document.querySelector('.masthead');
  const offset = (header ? header.offsetHeight : 64) + 28;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) current = section;
  }
  if (!current) return;
  links.forEach(a => {
    const active = a.getAttribute('href') === '#' + current.id;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'location');
    else a.removeAttribute('aria-current');
  });
}
let scrollQueued = false;
window.addEventListener('scroll', () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => {
    updateCurrentSection();
    scrollQueued = false;
  });
}, { passive: true });
window.addEventListener('resize', updateCurrentSection, { passive: true });
updateCurrentSection();
