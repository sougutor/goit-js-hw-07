import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  container: document.querySelector('.gallery'),
};

refs.container.addEventListener('click', getOrirginalUrl);

function getOrirginalUrl(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  openModalWindow(evt);
}

const createCardMarkup = createItemList(galleryItems);
refs.container.innerHTML = createCardMarkup;

function createItemList(items) {
  return items
    .map(
      item =>
        `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`
    )
    .join('');
}

function openModalWindow(evt) {
  const originalUrlImage = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${originalUrlImage}" width="800" height="600">`,
    {
      onShow: instance =>
        document.body.addEventListener('keydown', onEscKeyPress),
      onClose: instance =>
        document.body.removeEventListener('keydown', onEscKeyPress),
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
