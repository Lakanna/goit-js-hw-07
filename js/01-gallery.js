import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    ).join("")
};

container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

container.addEventListener("click", handlerClick);

function handlerClick(evt) {

    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

        
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

    instance.show();
}


console.log(galleryItems);
