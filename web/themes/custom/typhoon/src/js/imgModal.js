const genConImgs = document.querySelectorAll('.gen-con--img-wrap');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleImgClick(e) {
  const img = e.currentTarget;
  const imgSrc = img.querySelector('img').src;
  const imgAlt = img.querySelector('img').alt;

  modalInner.innerHTML = `
    <figure class="max-h-[80%] max-w-[80%] lg:max-w-[70%] text-center mx-auto">
      <img class="w-full h-full shadow-dark-1 rounded" src="${imgSrc}" alt="${imgAlt}" />
      <figcaption class="text-white text-shadow-1 text-xl">${imgAlt}</figcaption>
    </figure>
  `;

  // show modal
  modalOuter.classList.add(
    'open',
    'fixed',
    'bg-red-500',
    'opacity-100',
    'bg-opacity-50',
    'z-50',
    'pointer-events-auto'
  );

  modalInner.classList.add('opacity-100');
}

genConImgs.forEach(img => img.addEventListener('click', handleImgClick));

function closeModal() {
  modalOuter.classList.remove(
    'open',
    'fixed',
    'bg-red-500',
    'opacity-100',
    'bg-opacity-50',
    'z-50',
    'pointer-events-auto'
  );
}

modalOuter.addEventListener('click', function (e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
