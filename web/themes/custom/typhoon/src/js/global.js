// elements animation
import SmoothScroll from 'smooth-scroll';
// import { navHighlight } from './nav-highlight.js';
import * as accordion from './accordion.js';
// import * as capacity from './libCapacity';
// import { mobileNavAnimation } from './mobile-nav.js';

var scroll = new SmoothScroll('a[href*="#"]');

// adds highlight to current page in nav
// navHighlight;

// accordion
accordion;

// capacity
// capacity;

// mobile trigger
// mobileNavAnimation();

const sideNavEl = document.querySelectorAll(".js-side-nav-select");

sideNavEl.forEach((subNav) => {
  const openIcon = 'fa-plus';
  const closeIcon = 'fa-minus';
  const navTrigger = subNav.querySelector('.icon-wrap')
  const icon = subNav.querySelector('i');
  const subPages = subNav.querySelector('ul.side-nav--sub-list');

  navTrigger.addEventListener('click', (e) => {
    if (icon.classList.contains(openIcon)) {
      icon.classList.remove(openIcon);
      icon.classList.add(closeIcon);
      subPages.setAttribute('aria-expanded', true)
      subPages.style.display = 'block';
    } else if (icon.classList.contains(closeIcon)) {
      icon.classList.remove(closeIcon);
      icon.classList.add(openIcon);
      subPages.style.display = 'none'
      subPages.setAttribute('aria-expanded', false)
    } else {
      return
    }
  });
});


