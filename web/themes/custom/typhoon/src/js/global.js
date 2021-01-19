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

const searchButtonShow = document.querySelector('.js-main-search-button');
function handleSearchButtonClick(e) {
  const searchInput = document.querySelector('.js-search-wrapper')
  searchInput.classList.toggle('hidden');
}
searchButtonShow.addEventListener('click', handleSearchButtonClick)


const body = document.querySelector('body');
const mobileMenuButton = document.querySelector('.js-mobile-nav-btn');
const mobileMenu = document.querySelector('.js-mobile-menu');
const mobBtnTop = document.querySelector('.mob-btn-top');
const mobBtnMiddle = document.querySelector('.mob-btn-middle');
const mobBtnBottom = document.querySelector('.mob-btn-buttom');

mobileMenuButton.addEventListener('click', (e) => {

  if (mobileMenu.classList.contains('js-mobile-open')) {
    body.classList.remove('overflow-hidden');

    mobileMenu.classList.remove('js-mobile-open');
    mobileMenu.classList.add('js-mobile-close');
    mobileMenu.style.right = '-100vw'

    mobileMenuButton.classList.add('flex');
    mobileMenuButton.classList.remove('block');

    mobBtnTop.classList.remove('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', 'rotate-45');
    mobBtnMiddle.classList.remove('hidden');
    mobBtnBottom.classList.remove('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', '-rotate-45');

  } else if (mobileMenu.classList.contains('js-mobile-close')) {
    body.classList.add('overflow-hidden');

    mobileMenu.style.right = '48px'
    mobileMenu.classList.remove('js-mobile-close');
    mobileMenu.classList.add('js-mobile-open');

    mobileMenuButton.classList.add('block');
    mobileMenuButton.classList.remove('flex');

    mobBtnTop.classList.add('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', 'rotate-45');
    mobBtnMiddle.classList.add('hidden');
    mobBtnBottom.classList.add('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', '-rotate-45');
  }
});


const mainNavEl = document.querySelectorAll(".js-main-nav-select");

mainNavEl.forEach((subNav) => {
  const openIcon = 'fa-plus';
  const closeIcon = 'fa-minus';
  const navTrigger = subNav.querySelector('.icon-wrap')
  const icon = subNav.querySelector('i');
  const subPages = subNav.querySelector('ul.main-nav--sub-list');

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

