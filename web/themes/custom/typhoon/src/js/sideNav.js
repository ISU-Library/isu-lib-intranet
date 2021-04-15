import { slideToggle } from './slide.js';

const sideNavEl = document.querySelectorAll('.js-side-nav-select');

sideNavEl.forEach(subNav => {
  const openIcon = 'fa-plus';
  const closeIcon = 'fa-minus';
  const navTrigger = subNav.querySelector('.icon-wrap');
  const icon = subNav.querySelector('i');
  const subPages = subNav.querySelector('ul.side-nav--sub-list');

  navTrigger.addEventListener('click', e => {
    slideToggle(subPages, 300);
    if (icon.classList.contains(openIcon)) {
      icon.classList.remove(openIcon);
      icon.classList.add(closeIcon);
      subPages.setAttribute('aria-expanded', true);
    } else if (icon.classList.contains(closeIcon)) {
      icon.classList.remove(closeIcon);
      icon.classList.add(openIcon);
      subPages.setAttribute('aria-expanded', false);
    } else {
      return;
    }
  });
});
