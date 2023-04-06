import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  container: document.querySelector('.gallery'),
};

const createCardMarkup = createItemList(galleryItems);
refs.container.innerHTML = createCardMarkup;

function createItemList(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      title="${item.description}"
    />
    </a>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
