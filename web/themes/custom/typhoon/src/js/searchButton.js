import { slideToggle } from './slide.js';

const searchButton = document.querySelector('.js-main-search-button');

function handleSearchButtonClick(e) {
  const searchInput = document.querySelector('.js-search-wrapper');
  slideToggle(searchInput);
}

searchButton.addEventListener('click', handleSearchButtonClick);
