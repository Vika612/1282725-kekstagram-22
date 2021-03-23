import {isEscEvent} from './util.js';

const COMMENTS_PER_STEP = 5;
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
let loadedComments = 0;
let allComments = [];


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

  return newComment;
};

const renderComments = (comments) => {
  for (let i = 0; i < COMMENTS_PER_STEP && i < comments.length; i++) {
    socialComments.appendChild(createNewComment(comments[i]));
  }
};

const createBigPictureContent = ({url, likes, comments, description}) => {
  allComments = comments;

  socialComments.innerHTML = '';
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  loadedComments = COMMENTS_PER_STEP;
  if (comments.length > COMMENTS_PER_STEP) {
    commentsLoader.classList.remove('hidden');
  }

  renderComments(comments);

  if (loadedComments <= allComments.length) {
    commentsLoader.addEventListener('click', onLoadButtonClick);
  }
};

const onLoadButtonClick = () => {
  if (loadedComments < allComments.length) {
    renderComments(allComments.slice(loadedComments, loadedComments + COMMENTS_PER_STEP));
    loadedComments += COMMENTS_PER_STEP;

    if (loadedComments >= allComments.length) {
      commentsLoader.classList.add('hidden');
      commentsLoader.removeEventListener('click', onLoadButtonClick);
    }
  }
};

const onPreviewClick = (preview, info) => {
  preview.addEventListener('click', () => {
    socialCommentCount.classList.add('hidden');
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
