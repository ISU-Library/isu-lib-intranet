// import SmoothScroll from 'smooth-scroll';
// var scroll = new SmoothScroll('a[href*="#"]');

// todo: Change focus to selected section
// todo: If I really wanted to remove smooth scroll, I could try and set data-attributes vs anchors and ID's
// todo: Doesn't really work well in safari, especially without SmoothScroll
// todo: Clean this code! It's a mess and jumble of things right now.

const scrollTriggers = document.querySelectorAll('.js-scrollTrigger');
const scrollTargets = document.querySelectorAll('.js-scrollTarget');
const departmentNav = document.querySelector('.department-nav');

var vh = document.documentElement.clientHeight;
var topMargin = Math.ceil(-0.45 * vh);
var botMargin = Math.ceil(-0.55 * vh);

// *observes if section is on screen
function handleIntersection(entries) {
  entries.map(entry => {
    const sectionID = entry.target.id;
    const triggerEl = document.querySelector(`a[href='#${sectionID}']`);
    const spanEl = triggerEl.querySelector('span');

    // * if on screen, chane url hash, update classes
    if (entry.isIntersecting) {
      const location = window.location.toString().split('#')[0];
      history.replaceState(null, null, location + '#' + sectionID);

      // scrollTriggers.forEach(trigger => {
      //   trigger.classList.remove('is-active');
      //   trigger.querySelector('span').classList.add('hidden');
      // });

      spanEl.classList.remove('hidden');
      triggerEl.classList.add('is-active');
    } else {
      spanEl.classList.add('hidden');
      triggerEl.classList.remove('is-active');
    }
  })
}

// * setting options for observer
const mediaQuery = window.matchMedia('min-width: 1024px');

const options = {
  // threshold: 0.6,
  // rootMargin: topMargin + "px 0px " + botMargin + "px",
  threshold: [0.25, 0.5, 0.75, 1],
}
const optionsHalf = {
  threshold: 0.2,
}
const observer = new IntersectionObserver(
  handleIntersection,
  options,
);


// * calling observe function on sectiions
scrollTargets.forEach(target => {
  observer.observe(target)
});

// * cleans user input and set it as section ID
scrollTargets.forEach(target => {
  const id = target.id
  const idCleaned = id.replace(/\W+/g, '-').replace(/^-|-$/g, '').toLowerCase();
  target.id = idCleaned;
});

// * cleans user input and set it as nav HREF anchor
scrollTriggers.forEach(trigger => {
  const id = trigger.getAttribute('href');
  const hrefCleaned = id.replace(/\W+/g, '-').replace(/^-|-$/g, '').toLowerCase();

  trigger.setAttribute('href', `#${hrefCleaned}`);
});


// * on mobile, when clicking the department nav, show all options

departmentNav.addEventListener('click', function (e) {
  if (window.innerWidth <= 1024) {
    e.preventDefault();
    departmentNav.classList.add('is-open');
  }
});

scrollTriggers.forEach(trigger => {
  const id = trigger.getAttribute('href');
  const target = document.querySelector(`${id}`)

  trigger.addEventListener('click', function (e) {
    if (departmentNav.classList.contains('is-open')) {
      e.stopPropagation();
      departmentNav.classList.remove('is-open');
    }
    target.scrollIntoView({
      behavior: 'smooth'
    });
  })
});

