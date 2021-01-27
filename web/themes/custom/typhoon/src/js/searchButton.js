
const searchButton = document.querySelector('.js-main-search-button');

function handleSearchButtonClick(e) {
  const searchInput = document.querySelector('.js-search-wrapper')
  searchInput.classList.toggle('hidden');
}

searchButton.addEventListener('click', handleSearchButtonClick);
