import {pictures} from './thumbnails.js';
import {isEscEvent} from './util.js';

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;
const body = document.querySelector('body');
const previewsList = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');


const createNewComment = (commentInfo) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newAvatar = document.createElement('img');
  newAvatar.classList.add('social__picture');
  newAvatar.src = commentInfo.avatar;
  newAvatar.alt = commentInfo.name;
  newAvatar.width = AVATAR_WIDTH;
  newAvatar.height = AVATAR_HEIGHT;
  newComment.appendChild(newAvatar);

  const newText = document.createElement('p');
  newText.classList.add('social__text');
  newText.textContent = commentInfo.message;
  newComment.appendChild(newText);

  socialComments.appendChild(newComment);
};


const createBigPictureContent = (info) => {
  socialComments.innerHTML = '';
  bigPictureImg.src = info.url;
  likesCount.textContent = info.likes;
  commentsCount.textContent = info.comments.length;
  socialCaption.textContent = info.description;

  for (let i = 0; i < info.comments.length; i++) {
    createNewComment(info.comments[i]);
  }
};


const onPreviewClick = (preview, info) => {
  preview.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');
    createBigPictureContent(info);

    document.addEventListener('keydown', onModalEscPress);
  });
};

for (let i = 0; i < previewsList.length; i++) {
  onPreviewClick(previewsList[i], pictures[i]);
}

const onModalEscPress = (evt) => {
  if(isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscPress);
}

bigPictureClose.addEventListener('click', () => {
  closeModal();
})
