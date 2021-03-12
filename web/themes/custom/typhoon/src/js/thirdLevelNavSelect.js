// third-level nav
const mainNavItem = document.querySelectorAll('.main-nav--item');
// todo: Only works with mouseover, needs to work with screenreaders

mainNavItem.forEach(navItem => {
  const secondNavEls = navItem.querySelectorAll('.second-nav--item');

  secondNavEls.forEach(secondNavEl => {

    secondNavEl.addEventListener('mouseover', function () {

      secondNavEls.forEach(allSecondNavEls => {
        allSecondNavEls.classList.remove('js-active');
      });

      secondNavEl.classList.add('js-active');
    })
  });
});