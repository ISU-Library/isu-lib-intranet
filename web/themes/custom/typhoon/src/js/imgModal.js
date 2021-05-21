const genConImgs = document.querySelectorAll('.gen-con--img-wrap');
const modalOuter = document.querySelector('.js-modal-outer');
const modalInner = modalOuter.querySelector('figure');

function handleImgClick(e) {
  const body = document.querySelector('body');
  const img = e.currentTarget;
  const imgSrc = img.querySelector('img').src;
  const imgAlt = img.querySelector('img').alt;

  modalInner.innerHTML = `
  <img class="max-w-full shadow-dark-1 rounded" src="${imgSrc}" alt="${imgAlt}" />
  <figcaption class="text-white text-shadow-1 text-xl">${imgAlt}</figcaption>
  `;

  // show modal
  modalOuter.classList.add(
    'open',
    'fixed',
    'opacity-100',
    'bg-opacity-50',
    'z-50',
    'pointer-events-auto'
  );

  modalInner.classList.add('opacity-100');
}

function closeModal() {
  modalOuter.classList.remove(
    'open',
    'opacity-100',
    'z-50',
    'pointer-events-auto'
  );
}

genConImgs.forEach(img => img.addEventListener('click', handleImgClick));

modalOuter.addEventListener('click', function (e) {
  const isOutside = !e.target.closest('figure');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
