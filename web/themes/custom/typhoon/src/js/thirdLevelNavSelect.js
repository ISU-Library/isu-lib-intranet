const root = document.documentElement;
// third-level nav
const mainNavItem = document.querySelectorAll('.main-nav--item');
// todo: Only works with mouseover, needs to work with screenreaders

mainNavItem.forEach(navItem => {
  const mainNavDropdown = navItem.querySelector('.main-nav--dropdown');
  const secondNavEls = navItem.querySelectorAll('.second-nav--item');

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
    });
  });
});
