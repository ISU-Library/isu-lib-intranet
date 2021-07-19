// import SmoothScroll from 'smooth-scroll';
// var scroll = new SmoothScroll('a[href*="#"]');

// todo: Change focus to selected section
// todo: If I really wanted to remove smooth scroll, I could try and set data-attributes vs anchors and ID's
// todo: Doesn't really work well in safari, especially without SmoothScroll
// todo: Clean this code! It's a mess and jumble of things right now.
const scrollTriggers = document.querySelectorAll('.js-scrollTrigger');
const scrollTargets = document.querySelectorAll('.js-scrollTarget');
const scrollSpyNav = document.querySelector('.js-scrollSpyNav');

// * cleans user input and set it as section ID
function sanitizeId() {
  scrollTargets.forEach(target => {
    const id = target.id;
    const idCleaned = id
      .replace(/\W+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase();
    target.id = idCleaned;
  });
}

// * cleans user input and set it as nav HREF anchor
function sanitizeHref() {
  scrollTriggers.forEach(trigger => {
    const id = trigger.getAttribute('href');
    const hrefCleaned = id
      .replace(/\W+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase();
    trigger.setAttribute('href', `#${hrefCleaned}`);
  });
}

// * scrolls to target section on click
function scrollOnClick(target, breakpoint) {
  const targetNav = document.querySelector(`${target}`);

  scrollTriggers.forEach((trigger, index) => {
    const id = trigger.getAttribute('href');
    const spanEl = trigger.querySelector('span');
    const target = document.querySelector(`${id}`);
    const targetHeight = target.offsetHeight;
    const targetBottom = target.offsetTop + targetHeight;

    // *sets the first trigger on click
    if (index == 0 && targetBottom - window.scrollY > 0) {
      trigger.classList.add('is-active');
      spanEl.classList.remove('hidden');
    }

    // * makes the scroll spy work on click.
    if (targetNav) {
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= breakpoint) {
          e.preventDefault();

          if (scrollSpyNav.classList.contains('is-open')) {
            e.stopPropagation();

            scrollSpyNav.classList.remove('is-open');

            target.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }
      });
    }
  });
}

export default function scrollSpy(target, breakpoint) {
  const targetNav = document.querySelector(`${target}`);

  // * For BigPipe Data, page needs to be loaded.
  var checkReadyState = setInterval(() => {
    // * cleans user input and set it as section ID
    sanitizeId();

    // * cleans user input and set it as nav HREF anchor
    sanitizeHref();

    // * on mobile, when clicking the scrollSpyNav, show all options
    if (targetNav) {
      scrollSpyNav.addEventListener('click', function (e) {
        if (window.innerWidth <= breakpoint) {
          scrollSpyNav.classList.add('is-open');
        }
      });
    }

    // * this checks if the page is loaded
    if (document.readyState === 'complete') {
      clearInterval(checkReadyState);

      // *Scroll spy works on Scroll
      window.onscroll = function () {
        scrollTargets.forEach((target, index) => {
          const sectionID = target.id;
          const triggerEl = document.querySelector(`a[href='#${sectionID}']`);
          const spanEl = triggerEl.querySelector('span');
          const targetHeight = target.offsetHeight;
          const targetBottom = target.offsetTop + targetHeight;
          const location = window.location.toString().split('#')[0];
          const scrollSpyNavHeight = 58;

          //* updates the URL hash
          // function updateUrlHash() {
          //   history.replaceState(null, null, location + '#' + sectionID);
          // }

          // * checks scroll locations and updates url Hash
          if (
            index == 0 &&
            targetBottom - window.scrollY > scrollSpyNavHeight
          ) {
            // updateUrlHash();

            triggerEl.classList.add('is-active');
            spanEl.classList.remove('hidden');
          } else if (
            // * checks scroll locations and updates url Hash
            targetBottom - window.scrollY > scrollSpyNavHeight &&
            target.offsetTop - window.scrollY < scrollSpyNavHeight
          ) {
            // updateUrlHash();
            // * updates nav indicator
            spanEl.classList.remove('hidden');
            triggerEl.classList.add('is-active');
          } else {
            spanEl.classList.add('hidden');
            triggerEl.classList.remove('is-active');
          }
        });
      };

      // * scrolls to target section on click
      scrollOnClick(target, breakpoint);
    }
  }, 100);

  checkReadyState;
}
