// third-level nav
const mainNavItem = document.querySelectorAll('.main-nav--item');
// todo: Only works with mouseover, needs to work with screenreaders

mainNavItem.forEach(navItem => {
  const mainNavDropdown = navItem.querySelector('.main-nav--dropdown');
  const secondNavEls = navItem.querySelectorAll('.second-nav--item');

  navItem.addEventListener('mouseover', () => {
    navItem.setAttribute('aria-expanded', 'true');
  });
  navItem.addEventListener('mouseout', () => {
    navItem.setAttribute('aria-expanded', 'false');
  });

  navItem.addEventListener('focusin', () => {
    navItem.setAttribute('aria-expanded', 'true');
  });
  navItem.addEventListener('focusout', () => {
    navItem.setAttribute('aria-expanded', 'false');
  });

  secondNavEls.forEach(secondNavEl => {
    secondNavEl.addEventListener('mouseover', function () {
      const thirdList = secondNavEl.querySelector('ul');

      secondNavEls.forEach(allSecondNavEls => {
        allSecondNavEls.classList.remove('js-active');

        // * sets min-height on dropdown based on 3rd level element height
        // * prevents list from being clipped
        if (thirdList) {
          const thirdListHeight = thirdList.offsetHeight;
          mainNavDropdown.style.minHeight = `${thirdListHeight}px`;
        }
      });

      secondNavEl.classList.add('js-active');
      secondNavEl.setAttribute('aria-expanded', 'true');
    });

    secondNavEl.addEventListener('mouseout', () => {
      secondNavEl.setAttribute('aria-expanded', 'false');
    });

    secondNavEls.forEach(secondNavEl => {
      secondNavEl.addEventListener('focusin', function () {
        secondNavEl.setAttribute('aria-expanded', 'true');
      });
    });

    secondNavEl.addEventListener('focusout', () => {
      secondNavEl.setAttribute('aria-expanded', 'false');
    });
  });
});
