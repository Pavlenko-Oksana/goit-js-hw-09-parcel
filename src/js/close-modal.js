const lightBox = document.querySelector(".lightbox");
const bigPhoto = document.querySelector(".lightbox__image");

export function onClickGalleryCard(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  addClassIsOpen(evt);
}

export function addClassIsOpen(evt) {
  lightBox.classList.add("is-open");
  const linkBigPhoto = evt.target.dataset.source;
  bigPhoto.src = linkBigPhoto;
  bigPhoto.alt = evt.target.alt;
}

export function onCloseModal(evt) {
  if (evt.target.nodeName === "BUTTON") {
    lightBox.classList.remove("is-open");
  }

  removeAttribute(evt);
}

export function removeAttribute(evt) {
  bigPhoto.removeAttribute("src");
  bigPhoto.removeAttribute("alt");
}

export function onClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    lightBox.classList.remove("is-open");
    removeAttribute(evt);
  }
}
