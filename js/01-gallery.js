import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const listOfImages = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', listOfImages);
gallery.addEventListener('click', onClickImg);

function onClickImg(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  basicLightbox.create(`<img src="${event.target.dataset.source}"width="800" height="600">`).show();
}
