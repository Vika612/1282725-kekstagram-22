import {isEscEvent} from './util.js';

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img > img');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');


const createNewComment = ({avatar, name, message}) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newAvatar = document.createElement('img');
  newAvatar.classList.add('social__picture');
  newAvatar.src = avatar;
  newAvatar.alt = name;
  newAvatar.width = AVATAR_WIDTH;
  newAvatar.height = AVATAR_HEIGHT;
  newComment.appendChild(newAvatar);

  const newText = document.createElement('p');
  newText.classList.add('social__text');
  newText.textContent = message;
  newComment.appendChild(newText);

  socialComments.appendChild(newComment);
};


const createBigPictureContent = ({url, likes, comments, description}) => {
  socialComments.innerHTML = '';
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  for (let i = 0; i < comments.length; i++) {
    createNewComment(comments[i]);
  }
};


const onPreviewClick = (preview, info) => {
  preview.addEventListener('click', () => {
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    createBigPictureContent(info);
    openModal();
  });
};


const onModalEscPress = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscPress);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscPress);
};

bigPictureClose.addEventListener('click', () => {
  closeModal();
});


export {onPreviewClick};
