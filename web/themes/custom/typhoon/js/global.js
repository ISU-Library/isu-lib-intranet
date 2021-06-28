/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./themes/custom/typhoon/src/js/accordion.js":
/*!***************************************************!*\
  !*** ./themes/custom/typhoon/src/js/accordion.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordion": function() { return /* binding */ accordion; }
/* harmony export */ });
/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ "./themes/custom/typhoon/src/js/slide.js");

var showItems = document.querySelectorAll('.show--item');
var accordion = showItems.forEach(function (item) {
  var button = document.querySelector('.show--title');
  var ariaValue = button.getAttribute('aria-selected');
  var contentEl = item.querySelector('.show--content');
  item.addEventListener('click', function () {
    (0,_slide_js__WEBPACK_IMPORTED_MODULE_0__.slideToggle)(contentEl, 300);

    if (ariaValue === 'false') {
      button.setAttribute('aria-selected', true);
      contentEl.setAttribute('aria-expanded', true);
    } else {
      button.setAttribute('aria-selected', false);
      contentEl.setAttribute('aria-expanded', false);
    }
  });
});

/***/ }),

/***/ "./themes/custom/typhoon/src/js/global.js":
/*!************************************************!*\
  !*** ./themes/custom/typhoon/src/js/global.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobileNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileNav.js */ "./themes/custom/typhoon/src/js/mobileNav.js");
/* harmony import */ var _thirdLevelNavSelect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdLevelNavSelect.js */ "./themes/custom/typhoon/src/js/thirdLevelNavSelect.js");
/* harmony import */ var _thirdLevelNavSelect_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thirdLevelNavSelect_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _searchButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchButton.js */ "./themes/custom/typhoon/src/js/searchButton.js");
/* harmony import */ var _sideNav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideNav.js */ "./themes/custom/typhoon/src/js/sideNav.js");
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion.js */ "./themes/custom/typhoon/src/js/accordion.js");
/* harmony import */ var _scrollSpy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollSpy.js */ "./themes/custom/typhoon/src/js/scrollSpy.js");
/* harmony import */ var _imgModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgModal.js */ "./themes/custom/typhoon/src/js/imgModal.js");
/* harmony import */ var _imgModal_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imgModal_js__WEBPACK_IMPORTED_MODULE_6__);
// elements animation






 // Todo: split into new file

var header = document.querySelector('header');
var headerHeight = header.offsetHeight;
var root = document.documentElement;
var resizeObserverHeader = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    var height = Math.floor(entry.contentRect.height);
    root.style.setProperty('--header-height', "".concat(height, "px"));
  });
}); // initially set headerHeight

root.style.setProperty('--header-height', "".concat(headerHeight, "px")); // Change headerHeight on height change

resizeObserverHeader.observe(header); // show search button

_searchButton_js__WEBPACK_IMPORTED_MODULE_2__; // all Js for mobile menu

_mobileNav_js__WEBPACK_IMPORTED_MODULE_0__;
_thirdLevelNavSelect_js__WEBPACK_IMPORTED_MODULE_1__;
_sideNav_js__WEBPACK_IMPORTED_MODULE_3__; // * scrollSpy;

(0,_scrollSpy_js__WEBPACK_IMPORTED_MODULE_5__.default)(".toc-nav", 768);
(0,_scrollSpy_js__WEBPACK_IMPORTED_MODULE_5__.default)(".department-nav", 1024); // accordion

_accordion_js__WEBPACK_IMPORTED_MODULE_4__.accordion; // imagModal

_imgModal_js__WEBPACK_IMPORTED_MODULE_6__; // capacity
// capacity;

/***/ }),

/***/ "./themes/custom/typhoon/src/js/imgModal.js":
/*!**************************************************!*\
  !*** ./themes/custom/typhoon/src/js/imgModal.js ***!
  \**************************************************/
/***/ (function() {

var genConImgs = document.querySelectorAll('.js-img-modal');
var modalOuter = document.querySelector('.js-modal-outer');
var modalInner = modalOuter.querySelector('figure');

function handleImgClick(e) {
  var img = e.currentTarget;
  var imgSrc = img.querySelector('img').src;
  var imgAlt = img.querySelector('img').alt;
  modalInner.innerHTML = "\n  <img class=\"max-w-full md:max-h-[90vh] lg:max-h-[80vh] shadow-dark-1 rounded\" src=\"".concat(imgSrc, "\" alt=\"").concat(imgAlt, "\" />\n  <figcaption class=\"text-white text-shadow-1 text-xl\">").concat(imgAlt, "</figcaption>\n  "); // show modal

  modalOuter.classList.add('open', 'fixed', 'opacity-100', 'bg-opacity-50', 'z-50', 'pointer-events-auto');
  modalInner.classList.add('opacity-100');
}

function closeModal() {
  modalOuter.classList.remove('open', 'opacity-100', 'z-50', 'pointer-events-auto');
}

genConImgs.forEach(function (img) {
  return img.addEventListener('click', handleImgClick);
});
modalOuter.addEventListener('click', function (e) {
  var isOutside = !e.target.closest('figure');

  if (isOutside) {
    closeModal();
  }
});
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

/***/ }),

/***/ "./themes/custom/typhoon/src/js/mobileNav.js":
/*!***************************************************!*\
  !*** ./themes/custom/typhoon/src/js/mobileNav.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ "./themes/custom/typhoon/src/js/slide.js");

var mobileMenuButton = document.querySelector('.js-mobile-nav-btn');
var mobileMenu = document.querySelector('.js-mobile-menu');
var mainNavEl = document.querySelectorAll('.js-main-nav-select');

function resetNavOnDesktop(e) {
  var mediaQuery = window.matchMedia('(min-width: 768px)'); // !change this to use custom property

  if (mediaQuery.matches) {
    mobileMenu.style.right = '0';
  } else {
    mobileMenu.style.right = '-100vw';
  }
}

mobileMenuButton.addEventListener('click', function (e) {
  var body = document.querySelector('body');
  var mobBtnTop = document.querySelector('.mob-btn-top');
  var mobBtnMiddle = document.querySelector('.mob-btn-middle');
  var mobBtnBottom = document.querySelector('.mob-btn-bottom');
  body.classList.toggle('overflow-hidden');

  if (mobileMenu.classList.contains('js-mobile-open')) {
    mobileMenu.classList.remove('js-mobile-open');
    mobileMenu.classList.add('js-mobile-close');
    mobileMenu.style.right = '-100vw';
    mobileMenuButton.classList.add('flex');
    mobileMenuButton.classList.remove('block');
    mobBtnTop.classList.remove('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', 'rotate-45');
    mobBtnMiddle.classList.remove('hidden');
    mobBtnBottom.classList.remove('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', '-rotate-45');
  } else if (mobileMenu.classList.contains('js-mobile-close')) {
    mobileMenu.style.right = '48px';
    mobileMenu.classList.remove('js-mobile-close');
    mobileMenu.classList.add('js-mobile-open');
    mobileMenuButton.classList.add('block');
    mobileMenuButton.classList.remove('flex');
    mobBtnTop.classList.add('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', 'rotate-45');
    mobBtnMiddle.classList.add('hidden');
    mobBtnBottom.classList.add('absolute', '-translate-y-1/2', '-translate-x-1/2', 'top-1/2', 'left-1/2', '-rotate-45');
  }
});
mainNavEl.forEach(function (subNav) {
  var navTrigger = subNav.querySelector('.icon-wrap');
  var subPages = subNav.querySelector('ul.main-nav--sub-list');
  var icon = subNav.querySelector('i');
  var openIcon = 'fa-plus';
  var closeIcon = 'fa-minus';
  navTrigger.addEventListener('click', function (e) {
    (0,_slide_js__WEBPACK_IMPORTED_MODULE_0__.slideToggle)(subPages, 300);

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
window.addEventListener('resize', resetNavOnDesktop);

/***/ }),

/***/ "./themes/custom/typhoon/src/js/scrollSpy.js":
/*!***************************************************!*\
  !*** ./themes/custom/typhoon/src/js/scrollSpy.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ scrollSpy; }
/* harmony export */ });
// import SmoothScroll from 'smooth-scroll';
// var scroll = new SmoothScroll('a[href*="#"]');
// todo: Change focus to selected section
// todo: If I really wanted to remove smooth scroll, I could try and set data-attributes vs anchors and ID's
// todo: Doesn't really work well in safari, especially without SmoothScroll
// todo: Clean this code! It's a mess and jumble of things right now.
var scrollTriggers = document.querySelectorAll('.js-scrollTrigger');
var scrollTargets = document.querySelectorAll('.js-scrollTarget');
var scrollSpyNav = document.querySelector('.js-scrollSpyNav'); // * cleans user input and set it as section ID

function sanitizeId() {
  scrollTargets.forEach(function (target) {
    var id = target.id;
    var idCleaned = id.replace(/\W+/g, '-').replace(/^-|-$/g, '').toLowerCase();
    target.id = idCleaned;
  });
} // * cleans user input and set it as nav HREF anchor


function sanitizeHref() {
  scrollTriggers.forEach(function (trigger) {
    var id = trigger.getAttribute('href');
    var hrefCleaned = id.replace(/\W+/g, '-').replace(/^-|-$/g, '').toLowerCase();
    trigger.setAttribute('href', "#".concat(hrefCleaned));
  });
} // * scrolls to target section on click


function scrollOnClick(target, breakpoint) {
  var targetNav = document.querySelector("".concat(target));
  scrollTriggers.forEach(function (trigger, index) {
    var id = trigger.getAttribute('href');
    var spanEl = trigger.querySelector('span');
    var target = document.querySelector("".concat(id));
    var targetHeight = target.offsetHeight;
    var targetBottom = target.offsetTop + targetHeight; // *sets the first trigger on click

    if (index == 0 && targetBottom - window.scrollY > 0) {
      trigger.classList.add('is-active');
      spanEl.classList.remove('hidden');
    } // * makes the scroll spy work on click.


    if (targetNav) {
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= breakpoint) {
          e.preventDefault();

          if (scrollSpyNav.classList.contains('is-open')) {
            e.stopPropagation();
            scrollSpyNav.classList.remove('is-open');
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    }
  });
}

function scrollSpy(target, breakpoint) {
  var targetNav = document.querySelector("".concat(target)); // * For BigPipe Data, page needs to be loaded.

  var checkReadyState = setInterval(function () {
    // * cleans user input and set it as section ID
    sanitizeId(); // * cleans user input and set it as nav HREF anchor

    sanitizeHref(); // * on mobile, when clicking the scrollSpyNav, show all options

    if (targetNav) {
      scrollSpyNav.addEventListener('click', function (e) {
        if (window.innerWidth <= breakpoint) {
          scrollSpyNav.classList.add('is-open');
        }
      });
    } // * this checks if the page is loaded


    if (document.readyState === 'complete') {
      clearInterval(checkReadyState); // *Scroll spy works on Scroll

      window.onscroll = function () {
        scrollTargets.forEach(function (target, index) {
          var sectionID = target.id;
          var triggerEl = document.querySelector("a[href='#".concat(sectionID, "']"));
          var spanEl = triggerEl.querySelector('span');
          var targetHeight = target.offsetHeight;
          var targetBottom = target.offsetTop + targetHeight;
          var location = window.location.toString().split('#')[0];
          var scrollSpyNavHeight = 58; //* updates the URL hash

          function updateUrlHash() {
            history.replaceState(null, null, location + '#' + sectionID);
          } // * checks scroll locations and updates url Hash


          if (index == 0 && targetBottom - window.scrollY > scrollSpyNavHeight) {
            updateUrlHash();
            triggerEl.classList.add('is-active');
            spanEl.classList.remove('hidden');
          } else if ( // * checks scroll locations and updates url Hash
          targetBottom - window.scrollY > scrollSpyNavHeight && target.offsetTop - window.scrollY < scrollSpyNavHeight) {
            updateUrlHash(); // * updates nav indicator

            spanEl.classList.remove('hidden');
            triggerEl.classList.add('is-active');
          } else {
            spanEl.classList.add('hidden');
            triggerEl.classList.remove('is-active');
          }
        });
      }; // * scrolls to target section on click


      scrollOnClick(target, breakpoint);
    }
  }, 100);
  checkReadyState;
}

/***/ }),

/***/ "./themes/custom/typhoon/src/js/searchButton.js":
/*!******************************************************!*\
  !*** ./themes/custom/typhoon/src/js/searchButton.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ "./themes/custom/typhoon/src/js/slide.js");

var searchButton = document.querySelector('.js-main-search-button');

function handleSearchButtonClick(e) {
  var searchInput = document.querySelector('.js-search-wrapper');
  (0,_slide_js__WEBPACK_IMPORTED_MODULE_0__.slideToggle)(searchInput);
}

searchButton.addEventListener('click', handleSearchButtonClick);

/***/ }),

/***/ "./themes/custom/typhoon/src/js/sideNav.js":
/*!*************************************************!*\
  !*** ./themes/custom/typhoon/src/js/sideNav.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ "./themes/custom/typhoon/src/js/slide.js");

var sideNavEl = document.querySelectorAll('.js-side-nav-select');
sideNavEl.forEach(function (subNav) {
  var openIcon = 'fa-plus';
  var closeIcon = 'fa-minus';
  var navTrigger = subNav.querySelector('.icon-wrap');
  var icon = subNav.querySelector('i');
  var subPages = subNav.querySelector('ul.side-nav--sub-list');
  navTrigger.addEventListener('click', function (e) {
    (0,_slide_js__WEBPACK_IMPORTED_MODULE_0__.slideToggle)(subPages, 300);

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

/***/ }),

/***/ "./themes/custom/typhoon/src/js/slide.js":
/*!***********************************************!*\
  !*** ./themes/custom/typhoon/src/js/slide.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideUp": function() { return /* binding */ slideUp; },
/* harmony export */   "slideDown": function() { return /* binding */ slideDown; },
/* harmony export */   "slideToggle": function() { return /* binding */ slideToggle; }
/* harmony export */ });
var slideUp = function slideUp(element, duration) {
  element.style.height = element.offsetHeight + 'px';
  element.style.transitionProperty = "height, margin, padding";
  element.style.transitionDuration = duration + 'ms';
  element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  window.setTimeout(function () {
    element.style.display = 'none';
    element.style.removeProperty('height');
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property'); // resolve(false);
  }, duration);
};

var slideDown = function slideDown(element, duration) {
  element.style.removeProperty('display');
  var display = window.getComputedStyle(element).display;
  if (display === 'none') display = 'block';
  element.style.display = display;
  var height = element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.offsetHeight;
  element.style.transitionProperty = "height, margin, padding";
  element.style.transitionDuration = duration + 'ms';
  element.style.height = height + 'px';
  element.style.removeProperty('padding-top');
  element.style.removeProperty('padding-bottom');
  element.style.removeProperty('margin-top');
  element.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    element.style.removeProperty('height');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
  }, duration);
};

var slideToggle = function slideToggle(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (window.getComputedStyle(element).display === 'none') {
    return slideDown(element, duration);
  } else {
    return slideUp(element, duration);
  }
};



/***/ }),

/***/ "./themes/custom/typhoon/src/js/thirdLevelNavSelect.js":
/*!*************************************************************!*\
  !*** ./themes/custom/typhoon/src/js/thirdLevelNavSelect.js ***!
  \*************************************************************/
/***/ (function() {

// third-level nav
var mainNavItem = document.querySelectorAll('.main-nav--item'); // todo: Only works with mouseover, needs to work with screenreaders

mainNavItem.forEach(function (navItem) {
  var mainNavDropdown = navItem.querySelector('.main-nav--dropdown');
  var secondNavEls = navItem.querySelectorAll('.second-nav--item');
  navItem.addEventListener('mouseover', function () {
    navItem.setAttribute('aria-expanded', 'true');
  });
  navItem.addEventListener('mouseout', function () {
    navItem.setAttribute('aria-expanded', 'false');
  });
  navItem.addEventListener('focusin', function () {
    navItem.setAttribute('aria-expanded', 'true');
  });
  navItem.addEventListener('focusout', function () {
    navItem.setAttribute('aria-expanded', 'false');
  });
  secondNavEls.forEach(function (secondNavEl) {
    secondNavEl.addEventListener('mouseover', function () {
      var thirdList = secondNavEl.querySelector('ul');
      secondNavEls.forEach(function (allSecondNavEls) {
        allSecondNavEls.classList.remove('js-active'); // * sets min-height on dropdown based on 3rd level element height
        // * prevents list from being clipped

        if (thirdList) {
          var thirdListHeight = thirdList.offsetHeight;
          mainNavDropdown.style.minHeight = "".concat(thirdListHeight, "px");
        }
      });
      secondNavEl.classList.add('js-active');
      secondNavEl.setAttribute('aria-expanded', 'true');
    });
    secondNavEl.addEventListener('mouseout', function () {
      secondNavEl.setAttribute('aria-expanded', 'false');
    });
    secondNavEls.forEach(function (secondNavEl) {
      secondNavEl.addEventListener('focusin', function () {
        secondNavEl.setAttribute('aria-expanded', 'true');
      });
    });
    secondNavEl.addEventListener('focusout', function () {
      secondNavEl.setAttribute('aria-expanded', 'false');
    });
  });
});

/***/ }),

/***/ "./themes/custom/typhoon/src/scss/global.scss":
/*!****************************************************!*\
  !*** ./themes/custom/typhoon/src/scss/global.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./themes/custom/typhoon/src/tailwind/tailwind.css":
/*!*********************************************************!*\
  !*** ./themes/custom/typhoon/src/tailwind/tailwind.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/global": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./themes/custom/typhoon/src/js/global.js"],
/******/ 			["./themes/custom/typhoon/src/scss/global.scss"],
/******/ 			["./themes/custom/typhoon/src/tailwind/tailwind.css"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkiowa_state_library_intranet"] = self["webpackChunkiowa_state_library_intranet"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=global.js.map