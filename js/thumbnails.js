import {onPreviewClick} from './full-photo.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach(({url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(picture);
  });
  picturesList.appendChild(fragment);
  onPreviewClick(pictures);
};


export {renderPictures};
