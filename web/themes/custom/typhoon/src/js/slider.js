export default function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider passed in');
  }

  // Create some variables for working with the slider
  let prev;
  let current;
  let next;
  let next1;

  // select elements needed for slider
  const slides = slider.querySelector('.js-slides');
  const prevButton = slider.querySelector('.js-goToPrev');
  const nextButton = slider.querySelector('.js-goToNext');

  // When this slider is created, run the slider function
  function startSlider() {
    current = slider.querySelector('.js-current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    next1 = next.nextElementSibling || slides.firstElementChild;
  }

  function applyClass() {
    current.classList.add('js-current');
    prev.classList.add('js-prev');
    next.classList.add('js-next');
    next1.classList.add('js-next1');
  }
  // strip all the classes off the current slide
  function move(direction) {
    const classesToRemove = ['js-prev', 'js-current', 'js-next', 'js-next1'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    next1.classList.remove(...classesToRemove);

    if (direction === 'back') {
      // make a new array of the new values, and destructure them over and into the control variables
      [prev, current, next, next1] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
        next,
      ];
      console.log('click');
    } else {
      [prev, current, next, next1] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild,
        next1.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClass();
  }

  startSlider();
  applyClass();

  // event listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', () => move('forward'));
}
