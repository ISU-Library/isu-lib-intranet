import { slideToggle } from './slide.js';

const mobileMenuButton = document.querySelector('.js-mobile-nav-btn');
const mobileMenu = document.querySelector('.js-mobile-menu');
const mainNavEl = document.querySelectorAll('.js-main-nav-select');

function resetNavOnDektop(e) {
  const width = window.innerWidth;
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  // !change this to use custom property
  if (window.innerWidth !== width) {
    if (mediaQuery.matches) {
      mobileMenu.style.right = '0';
    } else {
      mobileMenu.style.right = '-100vw';
    }
  }
}

mobileMenuButton.addEventListener('click', e => {
  const body = document.querySelector('body');
  const mobBtnTop = document.querySelector('.mob-btn-top');
  const mobBtnMiddle = document.querySelector('.mob-btn-middle');
  const mobBtnBottom = document.querySelector('.mob-btn-bottom');

  body.classList.toggle('overflow-hidden');

  if (mobileMenu.classList.contains('js-mobile-open')) {
    mobileMenu.classList.remove('js-mobile-open');
    mobileMenu.classList.add('js-mobile-close');
    mobileMenu.style.right = '-100vw';

    mobileMenuButton.classList.add('flex');
    mobileMenuButton.classList.remove('block');

    mobBtnTop.classList.remove(
      'absolute',
      '-translate-y-1/2',
      '-translate-x-1/2',
      'top-1/2',
      'left-1/2',
      'rotate-45'
    );
    mobBtnMiddle.classList.remove('hidden');
    mobBtnBottom.classList.remove(
      'absolute',
      '-translate-y-1/2',
      '-translate-x-1/2',
      'top-1/2',
      'left-1/2',
      '-rotate-45'
    );
  } else if (mobileMenu.classList.contains('js-mobile-close')) {
    mobileMenu.style.right = '48px';
    mobileMenu.classList.remove('js-mobile-close');
    mobileMenu.classList.add('js-mobile-open');

    mobileMenuButton.classList.add('block');
    mobileMenuButton.classList.remove('flex');

    mobBtnTop.classList.add(
      'absolute',
      '-translate-y-1/2',
      '-translate-x-1/2',
      'top-1/2',
      'left-1/2',
      'rotate-45'
    );
    mobBtnMiddle.classList.add('hidden');
    mobBtnBottom.classList.add(
      'absolute',
      '-translate-y-1/2',
      '-translate-x-1/2',
      'top-1/2',
      'left-1/2',
      '-rotate-45'
    );
  }
});

mainNavEl.forEach(subNav => {
  const navTrigger = subNav.querySelector('.icon-wrap');
  const subPages = subNav.querySelector('ul.main-nav--sub-list');
  const icon = subNav.querySelector('i');
  const openIcon = 'fa-plus';
  const closeIcon = 'fa-minus';

  navTrigger.addEventListener('click', function (e) {
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

window.addEventListener('resize', resetNavOnDektop);
