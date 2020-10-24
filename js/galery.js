import galleryItems from './galery-items.js'
// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.

// Разбей задание на несколько подзадач:

//  -Создание и рендер разметки по массиву данных и предоставленному шаблону.
//  -Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//  - Открытие модального окна по клику на элементе галереи.
//  - Подмена значения атрибута src элемента img.lightbox__image.
//  - Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//  - Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

const refs = {
  galeryContainer: document.querySelector('.js-gallery'),
  backDrop: document.querySelector('.js-lightbox'),
  modalCloseBtn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector('.lightbox__overlay'),
  modalImage: document.querySelector('.lightbox__image'),
  
}

refs.galeryContainer.addEventListener('click', onGaleryItemClick);
refs.modalCloseBtn.addEventListener('click', onModalClose);
refs.modal.addEventListener('click', onBackDropClick);

refs.galeryContainer.insertAdjacentHTML('beforeend', createItemGaleryMarkup(galleryItems));


function createItemGaleryMarkup(items) {
  return items.map(({preview, original, description}) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('');
}

function onGaleryItemClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  evt.preventDefault();
  onModalOpen();
  refs.modalImage.src = evt.target.dataset.source;
}

function onModalOpen() {
  refs.backDrop.classList.add('is-open');
  window.addEventListener('keydown', onWhatKeyWasPressed);
}

function onModalClose() {
  refs.modalImage.src = '';
  refs.backDrop.classList.remove('is-open');
  window.removeEventListener('keydown', onWhatKeyWasPressed)
}

function onBackDropClick(evt) {
  if (evt.target === evt.currentTarget) {
    onModalClose();
  }
}

function onWhatKeyWasPressed(evt) {
  if (evt.code === 'Escape') {
    onEscKeyPress()
  }
  if (evt.code === 'ArrowRight') {
    onArrowRightPress(evt)
  }
  if (evt.code === 'ArrowLeft') {
    onArrowLeftPress(evt)
  }
}

function onEscKeyPress() {
    onModalClose();
}
function onArrowRightPress(evt) {
  console.log('Еще этот момент не сделал (((')
  }
 
function onArrowLeftPress(evt) {
  console.log('Еще этот момент не сделал (((')
  }


// function setActiveImage(imageIdx) {
//   const activeImage = galleryItems[imageIdx].dataset.source;
//   refs.modalImage.src = activeImage;
// }


// function findImgIndex() {
//   if (evt.target.src === galleryItems[index].original) {
    
//   }
// }