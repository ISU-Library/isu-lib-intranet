// elements animation
import * as mobileNav from './mobileNav.js';
import * as thirdLevelNav from './thirdLevelNavSelect.js';
import * as searchButtonShow from './searchButton.js';
import * as sideNav from './sideNav.js';

import * as accordion from './accordion.js';
import * as scrollSpy from './scrollSpy.js';
import * as imgModal from './imgModal.js';

// Todo: split into new file
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const root = document.documentElement;

const resizeObserverHeader = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const height = Math.floor(entry.contentRect.height);
    root.style.setProperty('--header-height', `${height}px`);
  });
});

// initially set headerHeight
root.style.setProperty('--header-height', `${headerHeight}px`);

// Change headerHeight on height change
resizeObserverHeader.observe(header);

// show search button
searchButtonShow;

// all Js for mobile menu
mobileNav;
thirdLevelNav;
sideNav;
scrollSpy;

// accordion
accordion;

// capacity
// capacity;
