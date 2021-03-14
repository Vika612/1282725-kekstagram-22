import {onPreviewClick} from './full-photo.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((info) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = info.url;
    picture.querySelector('.picture__likes').textContent = info.likes;
    picture.querySelector('.picture__comments').textContent = info.comments.length;
    fragment.appendChild(picture);
    onPreviewClick(picture, info);
  });
  picturesList.appendChild(fragment);
};


export {renderPictures};
