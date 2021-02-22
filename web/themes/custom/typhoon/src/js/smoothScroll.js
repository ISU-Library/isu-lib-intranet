// import SmoothScroll from 'smooth-scroll';
// var scroll = new SmoothScroll('a[href*="#"]');

// todo: Change focus to selected section
/// todo: If I really wanted to remove smooth scroll, I could try and set data-attributes vs anchors and ID's
// todo: Doesn't really work well in safari, especially without SmoothScroll
// todo: Clean this code! It's a mess and jumble of things right now.

const scrollTriggers = document.querySelectorAll('.js-scrollTrigger');
const scrollTargets = document.querySelectorAll('.js-scrollTarget');
const departmentNav = document.querySelector('.department-nav');


window.onscroll = function () {

  scrollTargets.forEach(target => {
    const sectionID = target.id;
    const triggerEl = document.querySelector(`a[href='#${sectionID}']`);
    const spanEl = triggerEl.querySelector('span');
    const targetHeight = target.offsetHeight;
    const targetBottom = target.offsetTop + targetHeight

    if (targetBottom - window.scrollY > 0 && target.offsetTop - window.scrollY < 0) {
      spanEl.classList.remove('hidden');
      triggerEl.classList.add('is-active');
    } else {
      spanEl.classList.add('hidden');
      triggerEl.classList.remove('is-active');
    }
  });

  scrollTriggers.forEach((trigger, index) => {
    const id = trigger.getAttribute('href');
    const spanEl = trigger.querySelector('span');
    const target = document.querySelector(`${id}`);
    const targetHeight = target.offsetHeight;
    const targetBottom = target.offsetTop + targetHeight;

    if (index == 0 && targetBottom - window.scrollY > 0) {
      trigger.classList.add('is-active')
      spanEl.classList.remove('hidden');
    }
  });
}

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
    departmentNav.classList.add('is-open');
  }
});

scrollTriggers.forEach((trigger, index) => {
  const id = trigger.getAttribute('href');
  const spanEl = trigger.querySelector('span');
  const target = document.querySelector(`${id}`)
  const targetHeight = target.offsetHeight;
  const targetBottom = target.offsetTop + targetHeight;

  if (index == 0 && targetBottom - window.scrollY > 0) {
    trigger.classList.add('is-active');
    spanEl.classList.remove('hidden');
  }

  trigger.addEventListener('click', function (e) {
    if (window.innerWidth <= 1024) {
      e.preventDefault();

      if (departmentNav.classList.contains('is-open')) {
        e.stopPropagation();

        departmentNav.classList.remove('is-open');

        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  })
});
